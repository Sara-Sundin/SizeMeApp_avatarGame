// Layers setup
const canvases = {
  skin: document.getElementById("canvas-skin"),
  hair: document.getElementById("canvas-hair"),
  eyes: document.getElementById("canvas-eyes"),
  brows: document.getElementById("canvas-brows"),
  mouth: document.getElementById("canvas-mouth"),
  animal: document.getElementById("canvas-animal"),
};
console.log("Canvases initialized:", canvases);

// Current layers
const layers = {
  skin: null,
  hair: null,
  eyes: null,
  brows: null,
  mouth: null,
  animal: null,
};
console.log("Initial layers:", layers);

// Contexts for drawing
const contexts = {
  skin: canvases.skin.getContext("2d"),
  hair: canvases.hair.getContext("2d"),
  eyes: canvases.eyes.getContext("2d"),
  brows: canvases.brows.getContext("2d"),
  mouth: canvases.mouth.getContext("2d"),
  animal: canvases.animal.getContext("2d"),
};
console.log("Canvas contexts initialized:", contexts);

// Utility: Convert hex color to RGB
function hexToRgb(hex) {
  console.log("Converting HEX to RGB:", hex);
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  console.log("Converted RGB:", [r, g, b]);
  return [r, g, b];
}

// Function: Load and draw a single layer
function loadAndDrawLayer(layerName) {
  console.log(`Loading and drawing layer: ${layerName}`);
  const ctx = contexts[layerName];
  const src = layers[layerName];

  if (!ctx) {
    console.error(`Context for layer "${layerName}" not found.`);
    return;
  }

  if (!src) {
    console.warn(`No source image for layer "${layerName}". Clearing canvas.`);
    ctx.clearRect(0, 0, canvases[layerName].width, canvases[layerName].height);
    return;
  }

  console.log(`Drawing image from source: ${src}`);
  const img = new Image();
  img.src = src;

  img.onload = () => {
    console.log(`Image loaded successfully for layer: ${layerName}`);
    ctx.clearRect(0, 0, canvases[layerName].width, canvases[layerName].height);
    ctx.drawImage(img, 0, 0, canvases[layerName].width, canvases[layerName].height);
  };

  img.onerror = () => {
    console.error(`Failed to load image for layer: ${layerName}, source: ${src}`);
  };
}

// Function: Handle thumbnail selection via radio buttons
function handleThumbnailSelection() {
  console.log("Setting up thumbnail selection...");
  const thumbnails = document.querySelectorAll(".thumbnail-radio");

  thumbnails.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const layer = e.target.dataset.layer;
      const src = e.target.dataset.src;

      console.log(`Thumbnail selected: Layer - ${layer}, Source - ${src}`);
      if (layer) {
        layers[layer] = src; // Update the selected layer source
        console.log("Updated layers state:", layers);
        loadAndDrawLayer(layer); // Draw the layer
        document.getElementById("universal-color-picker").classList.remove("hidden"); // Show color picker
      }
    });
  });

  document.querySelectorAll(".thumbnail").forEach((label) => {
    label.addEventListener("click", (e) => {
      const associatedRadio = document.getElementById(label.htmlFor);
      console.log(`Label clicked: ${label.htmlFor}`);
      if (associatedRadio) associatedRadio.click();
    });
  });
}

// Function: Apply color to the active layer
function applyColorToActiveLayer() {
  console.log("Setting up color picker functionality...");
  document.getElementById("apply-color-button").addEventListener("click", () => {
    const color = document.getElementById("color-picker-input").value;
    const activeRadio = document.querySelector(".thumbnail-radio:checked");

    if (!activeRadio) {
      console.warn("No active radio selected.");
      return;
    }

    const layer = activeRadio.dataset.layer;

    if (layer && layers[layer]) {
      console.log(`Applying color to layer: ${layer}`);
      const img = new Image();
      img.src = layers[layer];
      img.onload = () => {
        const ctx = contexts[layer];
        const canvas = canvases[layer];

        // Clear the canvas and draw the image
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Fetch image data only once
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const [r, g, b] = hexToRgb(color);

        // Optimize the loop by reducing checks
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
            // Directly set the new color
            data[i] = r; // Red
            data[i + 1] = g; // Green
            data[i + 2] = b; // Blue
          }
        }

        // Put the updated image data back on the canvas
        ctx.putImageData(imageData, 0, 0);
        console.log(`Color applied to layer: ${layer}`);
      };

      img.onerror = () => {
        console.error(`Failed to load image for layer: ${layer}`);
      };
    }
  });
}

function setupAdditionalThumbnails() {
  document.querySelectorAll(".thumbnail-radio.main-thumbnail").forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const layer = event.target.dataset.layer;
      const additionalThumbnailsId = `additional-thumbnails-${layer}`;
      const additionalThumbnails = document.getElementById(additionalThumbnailsId);

      if (additionalThumbnails) {
        document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.add("hidden"));
        additionalThumbnails.classList.remove("hidden");
      } else {
        console.error(`No additional thumbnails found for layer: ${layer}`);
      }
    });

    // Allow reopening additional thumbnails on repeated clicks
    radio.addEventListener("click", (event) => {
      const layer = event.target.dataset.layer;
      const additionalThumbnailsId = `additional-thumbnails-${layer}`;
      const additionalThumbnails = document.getElementById(additionalThumbnailsId);

      if (additionalThumbnails && !additionalThumbnails.classList.contains("hidden")) {
        // Additional thumbnails are already visible, do nothing
        return;
      }

      // Trigger the same logic as the "change" event
      document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.add("hidden"));
      if (additionalThumbnails) {
        additionalThumbnails.classList.remove("hidden");
      }
    });
  });
}

function setupClearThumbnail() {
  // Select all clear thumbnails
  document.querySelectorAll(".clear-thumbnail").forEach((clearThumbnail) => {
    clearThumbnail.addEventListener("click", (event) => {
      const layer = event.target.dataset.layer; // Get the associated layer from the data attribute

      if (layer) {
        // Clear the layer data
        layers[layer] = null;

        // Get the canvas and its context
        const canvas = canvases[layer];
        const ctx = contexts[layer];

        // Clear the canvas
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          console.log(`Cleared selection for layer: ${layer}`);
        }

        // Uncheck any selected radio buttons in this layer's group
        const radios = document.querySelectorAll(`.thumbnail-radio[data-layer="${layer}"]`);
        radios.forEach((radio) => (radio.checked = false));
      }
    });
  });
}

function setupBackButtons() {
  document.querySelectorAll(".back-button").forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Back button clicked.");

      // Hide all additional thumbnails
      document.querySelectorAll(".additional-thumbnails").forEach((container) => {
        container.classList.add("hidden");
      });

      // Show all main thumbnails inside the `thumbnail-container`
      const mainThumbnails = document.querySelector(".thumbnail-container");
      if (mainThumbnails) {
        mainThumbnails.querySelectorAll("div").forEach((thumb) => {
          thumb.classList.remove("hidden");
        });
      } else {
        console.error("Thumbnail container not found.");
      }
    });
  });
}

// Function: Initialize canvas dimensions
function initializeCanvases() {
  console.log("Initializing canvases...");
  Object.values(canvases).forEach((canvas) => {
    canvas.width = 400;
    canvas.height = 400;
    console.log("Canvas initialized:", canvas);
  });
}

// Call all functions
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded. Initializing all functions...");

  initializeCanvases(); // Set up canvas dimensions
  handleThumbnailSelection(); // Set up thumbnail selection events
  applyColorToActiveLayer(); // Set up color picker functionality
  setupAdditionalThumbnails();
  setupClearThumbnail();
  setupBackButtons();
});