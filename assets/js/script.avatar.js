// Layers setup
const canvases = {
  skin: document.getElementById("canvas-skin"),
  hair: document.getElementById("canvas-hair"),
  eyes: document.getElementById("canvas-eyes"),
  brows: document.getElementById("canvas-brows"),
  mouth: document.getElementById("canvas-mouth"),
  fox: document.getElementById("canvas-fox"),
};

// Current layers
const layers = {
  skin: null,
  hair: null,
  eyes: null,
  brows: null,
  mouth: null,
  fox: null,
};

// Contexts for drawing
const contexts = {
  skin: canvases.skin.getContext("2d"),
  hair: canvases.hair.getContext("2d"),
  eyes: canvases.eyes.getContext("2d"),
  brows: canvases.brows.getContext("2d"),
  mouth: canvases.mouth.getContext("2d"),
  fox: canvases.fox.getContext("2d"),
};

// Utility: Convert hex color to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

// Function: Load and draw a single layer
function loadAndDrawLayer(layerName) {
  const ctx = contexts[layerName];
  const src = layers[layerName];

  if (!ctx) {
    console.error(`Context for layer "${layerName}" not found.`);
    return;
  }

  if (src) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      ctx.clearRect(0, 0, canvases[layerName].width, canvases[layerName].height);
      ctx.drawImage(img, 0, 0, canvases[layerName].width, canvases[layerName].height);
    };
  } else {
    ctx.clearRect(0, 0, canvases[layerName].width, canvases[layerName].height);
  }
}

// Function: Handle thumbnail selection via radio buttons
function handleThumbnailSelection() {
  const thumbnails = document.querySelectorAll(".thumbnail-radio");

  thumbnails.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const layer = e.target.dataset.layer;
      const src = e.target.dataset.src;

      if (layer) {
        layers[layer] = src; // Update the selected layer source
        loadAndDrawLayer(layer); // Draw the layer
        document.getElementById("universal-color-picker").classList.remove("hidden"); // Show color picker
      }
    });
  });

  // Ensure clicking labels works as well
  document.querySelectorAll(".thumbnail").forEach((label) => {
    label.addEventListener("click", (e) => {
      const associatedRadio = document.getElementById(label.htmlFor);
      if (associatedRadio) associatedRadio.click();
    });
  });
}

// Function: Toggle additional thumbnails
function handleAdditionalThumbnails() {
  const mainThumbnailLabel = document.querySelector("label[for='thumbnail-hair']");
  const additionalThumbnailsContainer = document.getElementById("additional-thumbnails");

  if (mainThumbnailLabel && additionalThumbnailsContainer) {
    mainThumbnailLabel.addEventListener("click", (event) => {
      console.log("Hair thumbnail clicked");
      event.preventDefault(); // Prevent default input behavior

      // Toggle the visibility of the additional thumbnails
      additionalThumbnailsContainer.classList.toggle("hidden");
    });
  } else {
    console.error("Main hair thumbnail or additional thumbnails container not found.");
  }
}

// Function: Apply color to the active layer
function applyColorToActiveLayer() {
  document.getElementById("apply-color-button").addEventListener("click", () => {
    const color = document.getElementById("color-picker-input").value;
    const activeRadio = document.querySelector(".thumbnail-radio:checked");

    if (activeRadio) {
      const layer = activeRadio.dataset.layer;

      if (layer && layers[layer]) {
        const img = new Image();
        img.src = layers[layer];
        img.onload = () => {
          const ctx = contexts[layer];
          const canvas = canvases[layer];

          // Draw the image
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Extract image data
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          // Define tolerance for detecting white pixels
          const tolerance = 100;

          // Modify only the white pixels
          for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
            const alpha = data[i + 3];

            if (
              red >= 255 - tolerance &&
              green >= 255 - tolerance &&
              blue >= 255 - tolerance &&
              alpha > 0
            ) {
              const [r, g, b] = hexToRgb(color);
              data[i] = r;
              data[i + 1] = g;
              data[i + 2] = b;
            }
          }

          ctx.putImageData(imageData, 0, 0);
        };
      }
    }
  });
}

// Function: Initialize canvas dimensions
function initializeCanvases() {
  Object.values(canvases).forEach((canvas) => {
    canvas.width = 400;
    canvas.height = 400;
  });
}

// Call all functions
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");

  initializeCanvases(); // Set up canvas dimensions
  handleThumbnailSelection(); // Set up thumbnail selection events
  applyColorToActiveLayer(); // Set up color picker functionality
  handleAdditionalThumbnails(); // Handle additional thumbnails toggle
});