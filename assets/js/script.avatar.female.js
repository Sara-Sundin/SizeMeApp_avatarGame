// Layers setup
const canvases = {
  skin: document.getElementById("canvas-skin"),
  hair: document.getElementById("canvas-hair"),
  nose: document.getElementById("canvas-nose"),
  eyes: document.getElementById("canvas-eyes"),
  brows: document.getElementById("canvas-brows"),
  mouth: document.getElementById("canvas-mouth"),
  animal: document.getElementById("canvas-animal"),
  clothes: document.getElementById("canvas-clothes"),
};

const contexts = {
  skin: canvases.skin.getContext("2d", {
    willReadFrequently: true
  }),
  hair: canvases.hair.getContext("2d", {
    willReadFrequently: true
  }),
  nose: canvases.nose.getContext("2d", {
    willReadFrequently: true
  }),
  eyes: canvases.eyes.getContext("2d", {
    willReadFrequently: true
  }),
  brows: canvases.brows.getContext("2d", {
    willReadFrequently: true
  }),
  mouth: canvases.mouth.getContext("2d", {
    willReadFrequently: true
  }),
  animal: canvases.animal.getContext("2d", {
    willReadFrequently: true
  }),
  clothes: canvases.clothes.getContext("2d", {
    willReadFrequently: true
  }),
};

const layers = {
  skin: null,
  hair: null,
  nose: null,
  eyes: null,
  brows: null,
  mouth: null,
  animal: null,
  clothes: null,
};

function initializeCanvases() {
  Object.values(canvases).forEach((canvas) => {
    canvas.width = 400;
    canvas.height = 400;
  });

  // Set the default skin image
  const defaultSkinImage = "assets/images/images_avatar/outlines/shape_female_outline.png";
  layers.skin = defaultSkinImage;
  loadAndDrawLayer("skin", defaultSkinImage); // Preload the default skin image
}


// Utility: Convert HSL to RGB
function hslToRgb(h, s, l) {
  let r, g, b;
  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  r = hueToRgb(p, q, h + 1 / 3);
  g = hueToRgb(p, q, h);
  b = hueToRgb(p, q, h - 1 / 3);
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

// Convert HEX to RGB
function hexToRgb(hex) {
  let c = hex.substring(1).split('');
  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  const r = parseInt(c[0] + c[1], 16);
  const g = parseInt(c[2] + c[3], 16);
  const b = parseInt(c[4] + c[5], 16);
  return [r, g, b];
}

// Load and draw a single layer
function loadAndDrawLayer(layerName, imageSrc = null) {
  const ctx = contexts[layerName];
  const src = imageSrc || layers[layerName];

  if (!ctx) return;

  if (!src) {
    ctx.clearRect(0, 0, canvases[layerName].width, canvases[layerName].height);
    return;
  }

  const img = new Image();
  img.src = src;

  img.onload = () => {
    ctx.clearRect(0, 0, canvases[layerName].width, canvases[layerName].height);
    ctx.drawImage(img, 0, 0, canvases[layerName].width, canvases[layerName].height);
  };
}


// Handle thumbnail selection
function handleThumbnailSelection() {
  document.querySelectorAll(".thumbnail-radio").forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const layer = e.target.dataset.layer;
      const src = e.target.dataset.src;

      if (layer) {
        layers[layer] = src;
        loadAndDrawLayer(layer);

        const colorPicker = document.getElementById("custom-color-picker");
        if (colorPicker) {
          colorPicker.classList.remove("hidden");
        }
      }
    });
  });
}


// Apply color to the active layer
function applyColorToActiveLayer() {
  const hueSlider = document.getElementById("hue-slider");
  const lightnessSlider = document.getElementById("lightness-slider");
  const swatches = document.querySelectorAll(".swatch");

  let hue = 0;
  let lightness = 50;

  function updateColor() {
    const activeRadio = document.querySelector(".thumbnail-radio:checked");
    const layer = activeRadio ? activeRadio.dataset.layer : "skin";

    const ctx = contexts[layer];
    const canvas = canvases[layer];

    const rgb = hslToRgb(hue / 360, 1, lightness / 100);

    const img = new Image();
    img.src = layers[layer];

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
          [data[i], data[i + 1], data[i + 2]] = rgb;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }

  const attachSliderEvents = (slider, callback) => {
    let isDragging = false;

    slider.addEventListener("mousedown", () => (isDragging = true));
    window.addEventListener("mouseup", () => (isDragging = false));
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const rect = slider.getBoundingClientRect();
      const value = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      callback(value);
    });

    slider.addEventListener("click", (e) => {
      const rect = slider.getBoundingClientRect();
      const value = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      callback(value);
    });
  };

  attachSliderEvents(hueSlider, (value) => {
    hue = Math.round(value * 360);
    updateColor();
  });

  attachSliderEvents(lightnessSlider, (value) => {
    lightness = Math.round(value * 100);
    updateColor();
  });

  // Add swatch click event
  swatches.forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      const color = e.target.dataset.color;
      if (!color) return;

      const [r, g, b] = hexToRgb(color);
      const [h, s, l] = rgbToHsl(r, g, b);
      hue = h * 360;
      lightness = l * 100;
      updateColor();

      // Keep the main-thumbnail radio checked
      const activeMainRadio = document.querySelector(".thumbnail-radio.main-thumbnail:checked");
      if (activeMainRadio) {
        activeMainRadio.checked = true;
      }
    });
  });
}

function setupAdditionalThumbnails() {
  document.querySelectorAll(".thumbnail-radio.main-thumbnail").forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const layer = event.target.dataset.layer;
      const additionalThumbnailsId = `additional-thumbnails-${layer}`;
      const additionalThumbnails = document.getElementById(additionalThumbnailsId);

      if (additionalThumbnails) {
        // Hide other thumbnails
        document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.add("hidden"));
        // Show the additional thumbnails for the selected layer
        additionalThumbnails.classList.remove("hidden");
      }
    });

    // Enable repeated clicks on the main-thumbnail to toggle additional thumbnails
    radio.addEventListener("click", (event) => {
      const layer = event.target.dataset.layer;
      const additionalThumbnailsId = `additional-thumbnails-${layer}`;
      const additionalThumbnails = document.getElementById(additionalThumbnailsId);

      if (additionalThumbnails) {
        if (additionalThumbnails.classList.contains("hidden")) {
          // Open the additional thumbnails
          document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.add("hidden"));
          additionalThumbnails.classList.remove("hidden");
        } else {
          // Close the additional thumbnails and show main thumbnails
          additionalThumbnails.classList.add("hidden");
          document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.remove("hidden"));
        }
      }
    });
  });
}

// Clear the active canvas layer
function setupClearThumbnail() {
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
      // Hide additional thumbnails
      document.querySelectorAll(".additional-thumbnails").forEach((el) => el.classList.add("hidden"));

      // Show main thumbnails
      const mainThumbnails = document.querySelector(".thumbnail-container");
      if (mainThumbnails) {
        mainThumbnails.querySelectorAll("div").forEach((thumb) => thumb.classList.remove("hidden"));
      }

      // Re-check the active main-thumbnail radio button
      const activeAdditionalRadio = document.querySelector(".thumbnail-radio:checked");
      if (activeAdditionalRadio) {
        const layer = activeAdditionalRadio.dataset.layer;
        const correspondingMainRadio = document.querySelector(`.thumbnail-radio.main-thumbnail[data-layer="${layer}"]`);
        if (correspondingMainRadio) {
          correspondingMainRadio.checked = true; // Mark the main-thumbnail as active
        }
      }
    });
  });
}

document.getElementById("download-button").addEventListener("click", () => {
  // Create a temporary canvas to merge all layers
  const tempCanvas = document.createElement("canvas");
  const tempContext = tempCanvas.getContext("2d");

  // Set the temporary canvas size to match the base canvas size
  const baseCanvas = canvases.skin;
  tempCanvas.width = baseCanvas.width;
  tempCanvas.height = baseCanvas.height;

  // Draw all layers onto the temporary canvas in order
  Object.values(canvases).forEach((canvas) => {
    if (canvas) {
      tempContext.drawImage(canvas, 0, 0);
    }
  });

  // Convert the temporary canvas content to a data URL
  const dataURL = tempCanvas.toDataURL("image/png");

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "avatar.png"; // Set the file name for the download
  link.click(); // Trigger the download
});

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  initializeCanvases();
  handleThumbnailSelection();
  applyColorToActiveLayer();
  setupAdditionalThumbnails();
  setupClearThumbnail();
  setupBackButtons();
});