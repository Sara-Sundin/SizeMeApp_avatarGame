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
};

const contexts = {
  skin: canvases.skin.getContext("2d"),
  hair: canvases.hair.getContext("2d"),
  eyes: canvases.eyes.getContext("2d"),
  brows: canvases.brows.getContext("2d"),
  mouth: canvases.mouth.getContext("2d"),
  fox: canvases.fox.getContext("2d"),
};

// Convert hex color to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

// Load and draw a single layer
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

// Load all layers
function loadAllLayers() {
  Object.keys(layers).forEach((layerName) => loadAndDrawLayer(layerName));
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");

  // Set canvas dimensions
  Object.values(canvases).forEach((canvas) => {
    canvas.width = 400;
    canvas.height = 400;
  });

  let activeLayer = null; // Currently selected layer for coloring

  // Thumbnail click event
  document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      const nested = thumbnail.querySelector(".nested-thumbnails");
      if (nested) {
        // Toggle nested thumbnails visibility
        nested.style.display = nested.style.display === "flex" ? "none" : "flex";
      } else {
        const layer = e.target.closest("button").dataset.layer;
        const src = e.target.closest("button").dataset.src;

        if (layer) {
          layers[layer] = src; // Update selected layer
          activeLayer = layer; // Set active layer for color picker
          loadAndDrawLayer(layer); // Draw only the updated layer
          document.getElementById("universal-color-picker").classList.remove("hidden"); // Show color picker
        }
      }
    });
  });

  // Handle clicks on nested thumbnails
  document.querySelectorAll(".nested-thumbnail").forEach((nestedBtn) => {
    nestedBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event from propagating to parent thumbnail
      const layer = nestedBtn.getAttribute("data-layer");
      const src = nestedBtn.getAttribute("data-src");

      // Check if the layer exists in contexts
      if (contexts[layer]) {
        layers[layer] = src; // Update selected layer
        activeLayer = layer; // Set active layer for color picker
        loadAndDrawLayer(layer); // Draw the updated layer

        // Hide nested options after selection
        nestedBtn.closest(".nested-thumbnails").style.display = "none";
      } else {
        console.warn(`Layer "${layer}" is not defined in canvases or contexts.`);
      }
    });
  });



  // Apply color to the active layer (restricting to white areas)
  document.getElementById("apply-color-button").addEventListener("click", () => {
    const color = document.getElementById("color-picker-input").value;

    if (activeLayer && layers[activeLayer]) {
      const img = new Image();
      img.src = layers[activeLayer];
      img.onload = () => {
        const ctx = contexts[activeLayer];
        const canvas = canvases[activeLayer];

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
  });

  // Initial load
  loadAllLayers();
});