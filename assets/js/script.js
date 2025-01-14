let person = {
    firstName: "Sara",
    lastName:"Sundin",
    email: "sara@iknw.se",
    genderType: "female",
    age: 47,
    aroundChest: 90,
    aroundWaist: 70,
    aroundHips: 100,
    acrossShoulders: 40
} 

person.firstName = "Linus";

function helloPerson() {
    console.log("Welcome "+ person.firstName+"!")   
}

helloPerson();

// Avatar Generator

// Features
const features = {
    face: {
        options: {
            "faceDefault":"assets/images/images_avatar/avatar_default.png",
            "face1":"assets/images/images_avatar/face_female_1.png",
            "face2":"assets/images/images_avatar/face_female_2.png",
            "face3":"assets/images/images_avatar/face_female_3.png",
            "face4":"assets/images/images_avatar/face_female_4.png",
        },
            default: "faceDefault",
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Make DOM load before canvas
    
// Canvas Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas Dimensions
canvas.width = 600;
canvas.height = 500;

// Load and Draw Default Face Image
const defaultFace = new Image();
defaultFace.src = features.face.options[features.face.default]; // Load default face image

    defaultFace.onload = () => {
        console.log("Default face image loaded");
        ctx.drawImage(defaultFace, 100, 100, 400, 400); // Draw the face image on the canvas
    };

    // Face options dropdown
    const facePicker = document.getElementById("face-option-picker");
    for (const [key, value] of Object.entries(features.face.options)) {
        const option = document.createElement("option");
        option.value = key; //Use the key (face1 etc) as the value
        option.textContent = key; //Display the key as the text (face1)
        facePicker.appendChild(option); //Add option to the drowpdown
    } 
    //Event Listener for dropdown Face menu
    facePicker.addEventListener("change", (event) => {
        const selectedFace = event.target.value;
        const newFaceImage = new Image();
        newFaceImage.src = features.face.options[selectedFace];

        newFaceImage.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
            ctx.drawImage(newFaceImage,  100, 100, 400, 400); // Draws the new selected face)            
        }; // 
    }); // 
});

