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

// Canvas Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas Dimensions
canvas.width = 600;
canvas.height = 500;

let faceImageFemale = new Image();
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
};