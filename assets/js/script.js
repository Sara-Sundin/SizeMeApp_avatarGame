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
            "face1":"assets/images/images_avatar/face_female_1.png",
            "face2":"assets/images/images_avatar/face_female_2.png",
            "face3":"assets/images/images_avatar/face_female_3.png",
            "face4":"assets/images/images_avatar/face_female_4.png",
        },
            default: "face1",
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
});

/*let faceImageFemale = new Image();
faceImageFemale.src ="assets/images/images_avatar/face_female_1.png";

let eyesImage1 = new Image();
eyesImage1.src ="assets/images/images_avatar/eyes_1.png";

let browImage1 = new Image();
browImage1.src ="assets/images/images_avatar/brows_1.png";

// Draw image on canvas

faceImageFemale.onload = () => {
    ctx.drawImage(faceImageFemale, 100, 50, 400, 400);

    eyesImage1.onload = () => ctx.drawImage(eyesImage1, 100, 50, 400, 400);  // Draw eyes after the face

    browImage1.onload = () => ctx.drawImage(browImage1, 100, 50, 400, 400);  // Draw brows after the eyes
}; */