// Avatar Generator

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Make DOM load before canvas

    const features = {
        defaultFace: {
            "defaultFace":"assets/images/images_avatar/avatar_default.png",
        },
        shape: {
            options: {
                "Female":"assets/images/images_avatar/shape_female.png",
                "Male":"assets/images/images_avatar/shape_male.png",
                "Junior":"assets/images/images_avatar/shape_junior.png",
            },
        },
    };

    // Canvas Setup
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const startButton = document.getElementById("start-button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const shapePicker = document.getElementById("shape-picker");

// Canvas Dimensions
canvas.width = 400;
canvas.height = 400;

function loadAndDrawImage(imageSrc) {
    console.log(`Attempting to load image: ${imageSrc}`); // Debug log
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
        console.log(`Image loaded: ${imageSrc}`); // Debug log
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function setUpSlide1() {
    const defaultImage = features.defaultFace.defaultFace; // Correctly retrieve the default image path
    console.log(`Setting up slide 1 with image: ${defaultImage}`); // Debug log
    loadAndDrawImage(defaultImage); // Pass the correct path to loadAndDrawImage
}

function setUpSlide2() {
    const femaleShape = features.shape.options.Female;
    console.log(`Setting up slide 2 with image:${femaleShape})`); // Debug log
    loadAndDrawImage(femaleShape); // Pass the image path to loadAndDrawImage
    shapePicker.value = femaleShape; // Set "Female" as the selected option in the dropdown
}

function populateShapePicker() {
    shapePicker.innerHTML=""; //Clear existing options in the dropdown

    for (const [key, value] of Object.entries(features.shape.options)) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = key;
        shapePicker.appendChild(option);
    }

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose your shape:";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    shapePicker.insertBefore(defaultOption, shapePicker.firstChild);
}

// Event listener for shape selection
shapePicker.addEventListener("change", (event) => {
    const selectedShape = event.target.value; // Get the image path from the selected option
    console.log(`Selected shape: ${selectedShape}`); // Debug log
    loadAndDrawImage(selectedShape); // Load and draw the selected shape
});

setUpSlide1();
setUpSlide2();
populateShapePicker();

});