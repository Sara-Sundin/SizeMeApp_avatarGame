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
