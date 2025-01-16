// Avatar Generator

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Make DOM load before canvas

    const features = {
        defaultFace: {
            "defaultFace":"assets/images/images_avatar/avatar_default.png",
        },
        shape: {
            options: {
                Female:"assets/images/images_avatar/color_images/outlines/shape_female.png",
                Male:"assets/images/images_avatar/color_images/outlines/shape_male.png",
                Junior:"assets/images/images_avatar/color_images/outlines/shape_junior.png",
            },

            colors: {
                skinOne:"assets/images/images_avatar/color_images/female_skin_1.png",
                skinTwo:"assets/images/images_avatar/color_images/female_skin_2.png",
                skinThree:"assets/images/images_avatar/color_images/female_skin_3.png",
                brownOne:"assets/images/images_avatar/color_images/female_skin_4.png",
            },
        },
        eyes: {
            options: {
                eyesOne:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/eyes_1.png",
                eyesTwo:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/eyes_2.png",
                eyesThree:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/eyes_3.png",
            },
        },
        eyebrows: {
            options: {
                eyebrowOne:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/brows_1.png",
                eyebrowTwo:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/brows_2.png",
                eyeBrowThree:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/brows_3.png",
            },
        },
        nose: {
            options: {
                noseOne:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/nose_1.png",
            },
        },
        mouthPlain: {
            options: {
                mouthOne:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/happy_mouth_1.png",
                mouthTwo:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/plain_mouth_1.png",
            },   
        },
        mouthFilled: {
            options: {
                mouthThree:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/filler_mouth_1.png",
            },  
            colors: {
                mouthColorOne:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/filler_mouth_1.png",
                mouthColorTwo:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/filler_mouth_2.png",
                mouthColorThree:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/filler_mouth_3.png",
                mouthColorFour:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/filler_mouth_4.png",   
                mouthColorFive:"assets/images/images_avatar/color_images/eyes_brows_nose_mouth_cheeks/filler_mouth_5.png",       
            },
        },    
    };

    // Canvas Setup
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const slide3 = document.getElementById("slide-3");
const startButton = document.getElementById("start-button");
const canvasOne = document.getElementById("canvas-1");
const canvasTwo = document.getElementById("canvas-2");
const canvasThree = document.getElementById("canvas-3");
const ctxOne = canvasOne.getContext("2d");
//const ctxTwo = canvasTwo.getContext("2d");
const ctxThree = canvasThree.getContext("2d");
const shapePicker = document.getElementById("shape-picker");
const femaleButton = document.getElementById("thumbnail-female");

// Canvas Dimensions
[canvasOne, canvasTwo, canvasThree].forEach((canvas) => {
    canvas.width = 400;
    canvas.height = 400;
});

function loadAndDrawImage(ctx, imageSrc) {
    console.log(`Attempting to load image: ${imageSrc}`); // Debug log
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
        console.log(`Image loaded: ${imageSrc}`); // Debug log
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas before drawing
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}

function setUpSlide1() {
    const defaultImage = features.defaultFace.defaultFace; // Correctly retrieve the default image path
    console.log(`Setting up slide 1 with image: ${defaultImage}`); // Debug log
    loadAndDrawImage(ctxOne, defaultImage); // Pass the correct path to loadAndDrawImage
}

// Start Button Event Listener
startButton.addEventListener("click", () => {
    console.log("Start button clicked."); // Debug log
    slide1.classList.remove("active");
    slide2.classList.add("active");
})

// Female Button Event Listener
femaleButton.addEventListener("click", () => {
    console.log("Female button clicked."); // Debug log
    slide2.classList.remove("active");
    slide3.classList.add("active");
})

/*function setUpSlide2() {
    const femaleShape = features.shape.options.Female;
    console.log(`Setting up slide 2 with image:${femaleShape})`); // Debug log
    loadAndDrawImage(ctxTwo, femaleShape); // Pass the image path to loadAndDrawImage
    shapePicker.value = "Female"; // Set "Female" as the selected option in the dropdown
}*/

function setUpSlide3() {
    const femaleShape = features.shape.options.Female;
    console.log(`Setting up slide 3 with image:${femaleShape})`); // Debug log
    loadAndDrawImage(ctxThree, femaleShape); // Pass the image path to loadAndDrawImage
    shapePicker.value = "Female"; // Set "Female" as the selected option in the dropdown
}

/*function populateShapePicker() {
    shapePicker.innerHTML=""; //Clear existing options in the dropdown

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose your shape:";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    shapePicker.insertBefore(defaultOption, shapePicker.firstChild);

    for (const [key, value] of Object.entries(features.shape.options)) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = key;
        shapePicker.appendChild(option);
    }
}*/

// Event listener for shape selection
/*shapePicker.addEventListener("change", (event) => {
    const selectedShape = event.target.value; // Get the image path from the selected option
    console.log(`Selected shape: ${selectedShape}`); // Debug log
    loadAndDrawImage(ctxTwo, selectedShape); // Load and draw the selected shape
});*/

// Event listener for shape selection
/*shapePicker.addEventListener("change", (event) => {
    const selectedShape = event.target.value; // Get the image path from the selected option
    console.log(`Selected shape: ${selectedShape}`); // Debug log
    loadAndDrawImage(ctxThree, selectedShape); // Load and draw the selected shape
});*/

// Color Picker for Skin selection
const colorButtonsSkin = {
    skinOne: document.getElementById("skin-1"),
    skinTwo: document.getElementById("skin-2"),
    skinThree: document.getElementById("skin-3"),
    brownOne: document.getElementById("brown-1"),
};       

         // Function to handle color selection
         function handleColorSkin(colorKey) {
            
            const colorImage = features.colorSkin.options[colorKey];
            if (colorImage) {
                console.log(`Changing to skin color: ${colorKey}`);
                loadAndDrawImage(ctxThree, colorImage);
            } else {
                console.error(`No image defined for color: ${colorKey}`);
            }
        }

         // Add event listeners for color buttons
         Object.entries(colorButtonsSkin).forEach(([colorKey, button]) => {
            button.addEventListener("click", () => handleColorSkin(colorKey));
        });

setUpSlide1();
//setUpSlide2();
setUpSlide3();
//populateShapePicker();

});