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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let faceImage = new Image();
faceImage.src ="assets/images/female_outline.png";

faceImage.onload = () => ctx.drawImage(faceImage, 100, 50, 400, 400);