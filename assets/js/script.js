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

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Make DOM load before canvas

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

let selectedFace = features.face.default; //Current loading face
  
// Canvas Setup
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const startButton = document.getElementById("start-button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const facePicker = document.getElementById("face-option-picker");

// Canvas Dimensions
canvas.width = 400;
canvas.height = 400;

// Load and Draw Default Face Image
const defaultFace = new Image();
defaultFace.src = features.face.options[features.face.default]; // Load default face image
defaultFace.onload = () => {
    console.log("Default face image loaded");
    ctx.drawImage(defaultFace, 0, 0, 400, 400); // Draw the face image on the canvas
    };

    // Face options dropdown
    function populateFacePicker() {
        facePicker.innerHTML = "";
        for (const [key, value] of Object.entries(features.face.options)) {
        const option = document.createElement("option");
        option.value = key; //Use the key (face1 etc) as the value
        option.textContent = key; //Display the key as the text (face1)
        facePicker.appendChild(option); //Add option to the drowpdown
    }
    facePicker.value = selectedFace; //Set the current face
  }

  function redrawCanvasWithFace() {
        const faceImage = new Image();
        faceImage.src = features.face.options[selectedFace];
        faceImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(faceImage, 0, 0, 400, 400);    
        };
      }

      //Event Listener for Start Button
      startButton.addEventListener("click", () => {
        slide1.classList.remove("active");
        slide2.classList.add("active");
        
        selectedFace = "face1";//Change default face to slide 2
        populateFacePicker();
        redrawCanvasWithFace();
    });

    //Event Listener for dropdown Face menu
    facePicker.addEventListener("change", (event) => {
        selectedFace = event.target.value; //Update the selected face
        redrawCanvasWithFace();
  });  
});

