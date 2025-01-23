// Layers setup
const canvases = {
  skin: document.getElementById("canvas-skin"),
  hair: document.getElementById("canvas-hair"),
  eyes: document.getElementById("canvas-eyes"),
  brows: document.getElementById("canvas-brows"),
  mouth: document.getElementById("canvas-mouth"),
  animal: document.getElementById("canvas-animal"),
};

const contexts = {
  skin: canvases.skin.getContext("2d"),
  hair: canvases.hair.getContext("2d"),
  eyes: canvases.eyes.getContext("2d"),
  brows: canvases.brows.getContext("2d"),
  mouth: canvases.mouth.getContext("2d"),
  animal: canvases.animal.getContext("2d"),
};

const layers = {
  skin: null,
  hair: null,
  eyes: null,
  brows: null,
  mouth: null,
  animal: null,
};

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

// Function: Load and draw a single layer
function loadAndDrawLayer(layerName) {
  const ctx = contexts[layerName];
  const src = layers[layerName];

  if (!ctx) {
    console.error(`Context for layer "${layerName}" not found.`);
    return;
  }

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

  img.onerror = () => {
    console.error(`Failed to load image for layer: ${layerName}, source: ${src}`);
  };
}

// Function: Handle thumbnail selection
function handleThumbnailSelection() {
  document.querySelectorAll(".thumbnail-radio").forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const layer = e.target.dataset.layer;
      const src = e.target.dataset.src;

      if (layer) {
        layers[layer] = src;
        loadAndDrawLayer(layer);

        // Show color picker if applicable
        const colorPicker = document.getElementById("custom-color-picker");
        if (colorPicker) {
          colorPicker.classList.remove("hidden");
        }
      }
    });
  });
}

// Function: Apply color to the active layer
// Function: Apply color to the active layer
function applyColorToActiveLayer() {
  const hueSlider = document.getElementById("hue-slider");
  const lightnessSlider = document.getElementById("lightness-slider");

  if (!hueSlider || !lightnessSlider) {
    console.error("Hue or lightness slider not found.");
    return;
  }

  let hue = 0;
  let lightness = 50;

  const updateColor = () => {
    const activeRadio = document.querySelector(".thumbnail-radio:checked");
    if (!activeRadio) return;

    const layer = activeRadio.dataset.layer;
    if (!layer || !layers[layer]) return;

    const ctx = contexts[layer];
    const canvas = canvases[layer];
    const src = layers[layer];

    if (!ctx || !canvas || !src) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      // Clear and redraw the original image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Fetch image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Convert HSL to RGB
      const rgb = hslToRgb(hue / 360, 1, lightness / 100);

      // Modify image data
      for (let i = 0; i < data.length; i += 4) {
        // Replace near-white colors with the selected color
        if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
          data[i] = rgb[0]; // Red
          data[i + 1] = rgb[1]; // Green
          data[i + 2] = rgb[2]; // Blue
        }
      }

      // Put updated image data back onto the canvas
      ctx.putImageData(imageData, 0, 0);
      console.log(`Color applied to layer: ${layer}`);
    };

    img.onerror = () => {
      console.error(`Failed to load image for layer: ${layer}`);
    };
  };

  // Attach events to sliders
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
}

// Function: Additional thumbnails
function setupAdditionalThumbnails() {
  document.querySelectorAll(".thumbnail-radio.main-thumbnail").forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const layer = event.target.dataset.layer;
      const additionalThumbnailsId = `additional-thumbnails-${layer}`;
      const additionalThumbnails = document.getElementById(additionalThumbnailsId);

      if (additionalThumbnails) {
        document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.add("hidden"));
        additionalThumbnails.classList.remove("hidden");
      }
    });
  });

  document.querySelectorAll(".thumbnail-radio").forEach((radio) => {
    radio.addEventListener("click", (event) => {
      const layer = event.target.dataset.layer;
      const additionalThumbnailsId = `additional-thumbnails-${layer}`;
      const additionalThumbnails = document.getElementById(additionalThumbnailsId);

      if (additionalThumbnails && !additionalThumbnails.classList.contains("hidden")) {
        return;
      }

      document.querySelectorAll(".thumbnail-container > div").forEach((thumb) => thumb.classList.add("hidden"));
      if (additionalThumbnails) {
        additionalThumbnails.classList.remove("hidden");
      }
    });
  });
}

// Back buttons
function setupBackButtons() {
  document.querySelectorAll(".back-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".additional-thumbnails").forEach((el) => el.classList.add("hidden"));

      const mainThumbnails = document.querySelector(".thumbnail-container");
      if (mainThumbnails) {
        mainThumbnails.querySelectorAll("div").forEach((thumb) => thumb.classList.remove("hidden"));
      }
    });
  });
}

// Initialize canvases
function initializeCanvases() {
  Object.values(canvases).forEach((canvas) => {
    canvas.width = 400;
    canvas.height = 400;
  });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  initializeCanvases();
  handleThumbnailSelection();
  applyColorToActiveLayer();
  setupAdditionalThumbnails();
  setupBackButtons();
});