document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded");
  
    // Layers setup
    const canvases = {
      skin: document.getElementById("canvas-skin"),
      hair: document.getElementById("canvas-hair"),
    };
  
    const contexts = {
      skin: canvases.skin.getContext("2d"),
      hair: canvases.hair.getContext("2d"),
    };
  
    // Set canvas dimensions
    Object.values(canvases).forEach((canvas) => {
      canvas.width = 400;
      canvas.height = 400;
    });
  
    // Current layers
    const layers = {
      skin: null,
      hair: null,
    };
  
    let activeLayer = null; // Currently selected layer for coloring
  
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
  
    // Thumbnail click event
    document.querySelectorAll(".thumbnail").forEach((button) => {
      button.addEventListener("click", (e) => {
        const layer = e.target.closest("button").dataset.layer;
        const src = e.target.closest("button").dataset.src;
  
        if (layer) {
          layers[layer] = src; // Update selected layer
          activeLayer = layer; // Set active layer for color picker
          loadAndDrawLayer(layer); // Draw only the updated layer
  
          document.getElementById("universal-color-picker").classList.remove("hidden"); // Show color picker
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
     const tolerance = 100; // Adjust this value as needed (e.g., 5-20)


   // Modify only the white pixels (within the tolerance range)
   for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const alpha = data[i + 3];

    // Check if the pixel is close to white
    if (
      red >= 255 - tolerance &&
      green >= 255 - tolerance &&
      blue >= 255 - tolerance &&
      alpha > 0
    ) {
      // Apply the selected color
      const [r, g, b] = hexToRgb(color);
      data[i] = r; // Red
      data[i + 1] = g; // Green
      data[i + 2] = b; // Blue
    }
  }
  
          // Update the canvas with the modified image data
          ctx.putImageData(imageData, 0, 0);
        };
      }
    });
  
    // Convert hex color to RGB
    function hexToRgb(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    }
  
    // Initial load
    loadAllLayers();
  });
  