// Avatar Generator

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Make DOM load before canvas

    const features = {
        defaultFace: {
            "defaultFace":"assets/images/images_avatar/avatar_default.png",
        },
        shape: {
            options: {
                "female":"assets/images/images_avatar/shape_female.png",
                "male":"assets/images/images_avatar/shape_male.png",
                "junior":"assets/images/images_avatar/shape_junior.png",
            },
        },
    };

    let SelectedFace = features.defaultFace.defaultFace; //Loading face 1st slide

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

function loadAndDrawImage(ImageSrc) {
    const img = new Image();
    img.src = ImageSrc;
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function setUpSlide1() {
    loadAndDrawImage(features.defaultFace.defaultFace);
}

setUpSlide1();

});