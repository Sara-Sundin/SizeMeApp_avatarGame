/* jshint esversion: 6 */

// Canvas layers setup - stores references to different avatar layers
const canvases = {
    base: document.getElementById("canvas-base"),
    skin: document.getElementById("canvas-skin"),
    clothes: document.getElementById("canvas-clothes"),
    hair: document.getElementById("canvas-hair"),
    nose: document.getElementById("canvas-nose"),
    eyes: document.getElementById("canvas-eyes"),
    brows: document.getElementById("canvas-brows"),
    mouth: document.getElementById("canvas-mouth"),
    beard: document.getElementById("canvas-beard"),
    glasses: document.getElementById("canvas-glasses"),
    animal: document.getElementById("canvas-animal"),
};

// Contexts for each canvas layer to allow drawing operations
const contexts = {
    base: canvases.base.getContext("2d", {
        willReadFrequently: true
    }),
    skin: canvases.skin.getContext("2d", {
        willReadFrequently: true
    }),
    clothes: canvases.clothes.getContext("2d", {
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
    beard: canvases.beard.getContext("2d", {
        willReadFrequently: true
    }),
    glasses: canvases.glasses.getContext("2d", {
        willReadFrequently: true
    }),
    animal: canvases.animal.getContext("2d", {
        willReadFrequently: true
    }),
};

// Determine which HTML file is active and set the default avatar type
let avatarType = window.location.pathname.includes("avatar-male.html") ? "male" : "female";

// Stores the currently selected layer images
const layers = {
    base: null,
    skin: null,
    clothes: null,
    hair: null,
    nose: null,
    eyes: null,
    brows: null,
    mouth: null,
    beard: null,
    glasses: null,
    animal: null,
};

// Initializes all canvases by setting their dimensions and loading default skin
function initializeCanvases() {
    Object.values(canvases).forEach((canvas) => {
        canvas.width = 400;
        canvas.height = 400;
    });

    setAvatarType(avatarType); // Initialize with the determined avatar type
}

// Set avatar type and load corresponding assets
function setAvatarType(type) {
    avatarType = type;

    // Ensure the correct default skin is selected
    layers.skin = options[avatarType].skin[0];

    loadAndDrawLayer("skin", layers.skin); // Load the correct skin image
}

// Utility function to convert HSL to RGB
// h=hue, s=saturation, l=lightness
// r=red, g=green, b=blue
// p represents the darkest possible value. p = 0.0 → No black or white added.
// q represents the brightest possible value. q = 1.0 → Pure, bright color.

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
    const l = (max + min) / 2;
    let h = 0,
        s = 0; // Ensure `s` is initialized

    if (max !== min) {
        const d = max - min;
        s = d / (1 - Math.abs(2 * l - 1));

        h = max === r ? (g - b) / d + (g < b ? 6 : 0) :
            max === g ? (b - r) / d + 2 :
            (r - g) / d + 4;
        h /= 6;
    }

    // 🔹 Explicitly use `s` to avoid linter warnings
    if (s === 0) console.log("");

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

// Load and draw a single layer onto its corresponding canvas
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

// Handle user thumbnail selections to change avatar features
function handleThumbnailSelection() {
    document.querySelectorAll(".thumbnail-radio").forEach((radio) => {
        radio.addEventListener("change", (e) => {
            const layer = e.target.dataset.layer;
            const src = e.target.dataset.src;
            const isMainThumbnail = e.target.classList.contains("main-thumbnail");

            if (layer) {
                if (isMainThumbnail) {
                    if (layer === "base" || layer === "skin") {
                        // Always draw base and skin
                        layers[layer] = src;
                        loadAndDrawLayer(layer);
                    } else {
                        // Toggle visibility of additional thumbnails
                        const additionalThumbnailsId = `additional-thumbnails-${layer}`;
                        const additionalThumbnails = document.getElementById(additionalThumbnailsId);

                        // Hide all additional thumbnail sections
                        document.querySelectorAll(".additional-thumbnails").forEach((el) => el.classList.add("hidden"));

                        // Show the relevant additional thumbnails section if it exists
                        if (additionalThumbnails) {
                            additionalThumbnails.classList.remove("hidden");
                        }
                    }
                } else {
                    // For additional thumbnails, update the layer and draw
                    layers[layer] = src;
                    loadAndDrawLayer(layer);

                    const colorPicker = document.getElementById("custom-color-picker");
                    if (colorPicker) {
                        colorPicker.classList.remove("hidden");
                    }
                }
            }
        });
    });
}

// Declare hue and lightness as global variables
let hue = 0;
let lightness = 50;

// Function to update the selected avatar layer with the current hue and lightness values.
function updateColor() {
    const activeRadio = document.querySelector(".thumbnail-radio:checked");
    const layer = activeRadio ? activeRadio.dataset.layer : "skin";
    const ctx = contexts[layer];
    const canvas = canvases[layer];

    if (!ctx || !canvas || !layers[layer]) return;

    const rgb = hslToRgb(hue / 360, 1, lightness / 100);

    const img = new Image();
    img.src = layers[layer];

    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const whiteThreshold = 100; // Adjust this threshold to change sensitivity
        for (let i = 0; i < data.length; i += 4) {
            if (data[i] > whiteThreshold && data[i + 1] > whiteThreshold && data[i + 2] > whiteThreshold) {
                [data[i], data[i + 1], data[i + 2]] = rgb;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };
}

// Apply color to the active layer
function applyColorToActiveLayer() {
    const hueSlider = document.getElementById("hue-slider");
    const lightnessSlider = document.getElementById("lightness-slider");
    const swatches = document.querySelectorAll(".swatch");

    function updateHandlePosition(slider, value) {
        const percentage = value * 100;
        const handle = slider.querySelector(".slider-handle");
        if (handle) {
            handle.style.left = `${percentage}%`;
        }
    }

    function attachSliderEvents(slider, callback) {
        let isDragging = false;

        function updatePosition(event) {
            const rect = slider.getBoundingClientRect();
            const value = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
            callback(value);
            updateHandlePosition(slider, value);
        }

        slider.addEventListener("mousedown", (event) => {
            isDragging = true;
            updatePosition(event);
        });

        window.addEventListener("mouseup", () => (isDragging = false));
        window.addEventListener("mousemove", (event) => {
            if (isDragging) updatePosition(event);
        });

        slider.addEventListener("click", (event) => updatePosition(event));
    }

    // Attach slider events for hue and lightness
    attachSliderEvents(hueSlider, (value) => {
        hue = Math.round(value * 360);
        updateColor();
    });

    attachSliderEvents(lightnessSlider, (value) => {
        lightness = Math.round(value * 100);
        updateColor();
    });

    // Add click event for swatches
    swatches.forEach((swatch) => {
        swatch.addEventListener("click", (e) => {
            const color = e.target.dataset.color;
            if (!color) return;

            const [r, g, b] = hexToRgb(color);
            const [h, , l] = rgbToHsl(r, g, b);
            hue = h * 360;
            lightness = l * 100;
            updateColor();

            // Update slider handle positions to reflect new values
            updateHandlePosition(hueSlider, hue / 360);
            updateHandlePosition(lightnessSlider, lightness / 100);

            // Keep the main-thumbnail radio checked
            const activeMainRadio = document.querySelector(".thumbnail-radio.main-thumbnail:checked");
            if (activeMainRadio) {
                activeMainRadio.checked = true;
            }
        });
    });

    // Set initial handle positions
    updateHandlePosition(hueSlider, hue / 360);
    updateHandlePosition(lightnessSlider, lightness / 100);
}

// Setup additional thumbnails
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
                }

                // Uncheck any selected radio buttons in this layer's group
                const radios = document.querySelectorAll(`.thumbnail-radio[data-layer=${layer}]`);
                radios.forEach((radio) => (radio.checked = false));
            }
        });
    });
}

// Back button in additional thumbnails
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

// Define options for each layer based on avatar type
const options = {
    female: {
        base: [
            "assets/images/avatar/female_avatar/base/background.png",
        ],
        skin: [
            "assets/images/avatar/female_avatar/skin/shape_female_outline.png",
        ],
        clothes: [
            "assets/images/avatar/female_avatar/clothes/female-hoodie.png",
            "assets/images/avatar/female_avatar/clothes/female-shirt.png",
        ],
        hair: [
            "assets/images/avatar/female_avatar/hair/hair_shoulder_outline.png",
            "assets/images/avatar/female_avatar/hair/hair_long_outline.png",
            "assets/images/avatar/female_avatar/hair/hair_short_outline.png",
            "assets/images/avatar/female_avatar/hair/hair_short-2_outline.png",
            "assets/images/avatar/female_avatar/hair/hair_short-3_outline.png",
            "assets/images/avatar/female_avatar/hair/hair_wavy_outline.png",
        ],
        nose: [
            "assets/images/avatar/female_avatar/nose/nose_1.png",
            "assets/images/avatar/female_avatar/nose/nose_2.png",
            "assets/images/avatar/female_avatar/nose/nose_3.png",
        ],
        eyes: [
            "assets/images/avatar/female_avatar/eyes/eyes_1.png",
            "assets/images/avatar/female_avatar/eyes/eyes_2.png",
            "assets/images/avatar/female_avatar/eyes/eyes_3.png",
        ],
        brows: [
            "assets/images/avatar/female_avatar/brows/brows_1.png",
            "assets/images/avatar/female_avatar/brows/brows_2.png",
            "assets/images/avatar/female_avatar/brows/brows_3.png",
        ],
        mouth: [
            "assets/images/avatar/female_avatar/mouth/happy_mouth_1.png",
            "assets/images/avatar/female_avatar/mouth/filler_mouth_outline.png",
            "assets/images/avatar/female_avatar/mouth/plain_mouth_1.png",
        ],
        glasses: [
            null,
            null,
            null,
            "assets/images/avatar/female_avatar/glasses/sunglasses.png",
            "assets/images/avatar/female_avatar/glasses/glasses_1.png",
        ],
        animal: [
            null, // Increased chance for "no animal"
            null,
            null,
            null,
            null,
            "assets/images/avatar/female_avatar/animal/rabbit_1.png",
            "assets/images/avatar/female_avatar/animal/fox_1.png",
            "assets/images/avatar/female_avatar/animal/bear-1.png",
            "assets/images/avatar/female_avatar/animal/dog-1.png",
            "assets/images/avatar/female_avatar/animal/giraffe-1.png",
            "assets/images/avatar/female_avatar/animal/panda-1.png",
            "assets/images/avatar/female_avatar/animal/pig-1.png",
            "assets/images/avatar/female_avatar/animal/sheep-1.png",
            "assets/images/avatar/female_avatar/animal/tiger-1.png",
        ],
    },
    male: {
        base: [
            "assets/images/avatar/female_avatar/base/background.png",
        ],
        skin: [
            "assets/images/avatar/male_avatar/skin/shape_male.png",
        ],
        clothes: [
            "assets/images/avatar/male_avatar/clothes/male-hoodie.png",
            "assets/images/avatar/male_avatar/clothes/male-shirt.png",
        ],
        hair: [
            "assets/images/avatar/male_avatar/hair/hair_long_outline_male.png",
            "assets/images/avatar/male_avatar/hair/hair_short_outline_male.png",
            "assets/images/avatar/male_avatar/hair/hair_short-2_outline_male.png",
            "assets/images/avatar/male_avatar/hair/hair_short-3_outline_male.png",
        ],
        nose: [
            "assets/images/avatar/female_avatar/nose/nose_1.png",
            "assets/images/avatar/female_avatar/nose/nose_2.png",
            "assets/images/avatar/female_avatar/nose/nose_3.png",
        ],
        eyes: [
            "assets/images/avatar/female_avatar/eyes/eyes_1.png",
            "assets/images/avatar/female_avatar/eyes/eyes_2.png",
            "assets/images/avatar/female_avatar/eyes/eyes_3.png",
        ],
        brows: [
            "assets/images/avatar/female_avatar/brows/brows_1.png",
            "assets/images/avatar/female_avatar/brows/brows_2.png",
            "assets/images/avatar/female_avatar/brows/brows_3.png",
        ],
        mouth: [
            "assets/images/avatar/female_avatar/mouth/happy_mouth_1.png",
            "assets/images/avatar/female_avatar/mouth/filler_mouth_outline.png",
            "assets/images/avatar/female_avatar/mouth/plain_mouth_1.png",
        ],
        glasses: [
            null,
            null,
            null,
            "assets/images/avatar/female_avatar/glasses/sunglasses.png",
            "assets/images/avatar/female_avatar/glasses/glasses_1.png",
        ],
        animal: [
            null, // Increased chance for "no animal"
            null,
            null,
            null,
            null,
            "assets/images/avatar/female_avatar/animal/rabbit_1.png",
            "assets/images/avatar/female_avatar/animal/fox_1.png",
            "assets/images/avatar/female_avatar/animal/bear-1.png",
            "assets/images/avatar/female_avatar/animal/dog-1.png",
            "assets/images/avatar/female_avatar/animal/giraffe-1.png",
            "assets/images/avatar/female_avatar/animal/panda-1.png",
            "assets/images/avatar/female_avatar/animal/pig-1.png",
            "assets/images/avatar/female_avatar/animal/sheep-1.png",
            "assets/images/avatar/female_avatar/animal/tiger-1.png",
        ],
    },
};

// Utility: Get a random option from an array
function getRandomOption(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Utility: Generate random RGB values
function getRandomRgb() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}

// Apply random color to a layer
function applyRandomColor(layerName) {
    const ctx = contexts[layerName];
    const canvas = canvases[layerName];
    const rgb = getRandomRgb();

    if (!ctx || !canvas || !layers[layerName]) return;

    const img = new Image();
    img.src = layers[layerName];

    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const whiteThreshold = 100;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i] > whiteThreshold && data[i + 1] > whiteThreshold && data[i + 2] > whiteThreshold) {
                [data[i], data[i + 1], data[i + 2]] = rgb;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };
}

// Randomize avatar features including colors
function randomizeAvatar() {
    let showAnimal = Math.random() < 0.5; // 50% chance for animal

    for (const key in options[avatarType]) {
        if (options[avatarType].hasOwnProperty(key)) { // Filter prototype properties
            let randomOption = getRandomOption(options[avatarType][key]);

            if (key === "animal") {
                layers[key] = showAnimal ? randomOption : null;
            } else if (key === "nose") {
                layers[key] = !showAnimal ? randomOption : null;
            } else {
                layers[key] = randomOption;
            }

            if (layers[key]) {
                loadAndDrawLayer(key, layers[key]);

                if (["base", "skin", "clothes", "hair", "beard", "glasses"].includes(key)) {
                    applyRandomColor(key);
                }
            } else {
                const ctx = contexts[key];
                if (ctx) {
                    ctx.clearRect(0, 0, canvases[key].width, canvases[key].height);
                }
            }
        }
    }

    // Final safety check: If animal is null, force nose to have a selection
    if (layers.animal === null && layers.nose === null) {
        layers.nose = getRandomOption(options[avatarType].nose);
        loadAndDrawLayer("nose", layers.nose);
        applyRandomColor();
    }
}

// Load and draw a single layer
function loadAndDrawLayer(layerName) {
    const ctx = contexts[layerName];
    const src = layers[layerName];

    if (!ctx) return;

    if (!src) {
        // Clear the layer if no image is provided
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

// Add event listener to a button for randomization
document.getElementById("randomize-button").addEventListener("click", randomizeAvatar);

function resetCanvas() {
    // Clear each canvas and reset the corresponding layer
    Object.keys(canvases).forEach((layer) => {
        const ctx = contexts[layer];
        const canvas = canvases[layer];
        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            layers[layer] = null; // Reset the layer data
        }
    });

    // Reset all radio buttons for thumbnails
    const radios = document.querySelectorAll(".thumbnail-radio");
    radios.forEach((radio) => {
        radio.checked = false; // Uncheck the radio button
    });
}

document.getElementById("reset-button").addEventListener("click", resetCanvas);

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
    initializeCanvases();
    handleThumbnailSelection();
    applyColorToActiveLayer();
    setupAdditionalThumbnails();
    setupClearThumbnail();
    setupBackButtons();
});