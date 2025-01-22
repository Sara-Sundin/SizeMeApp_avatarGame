var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800; // Adjusted for slower animation
ml4.durationOut = 600;
ml4.delay = 400;

anime.timeline({
        loop: false // true for loop: false to run once
    })
    .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
    });

document.addEventListener("DOMContentLoaded", () => {
    const introAnimation = document.getElementById("intro-animation");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    // Simulate animation duration
    setTimeout(() => {
        // Hide intro animation
        introAnimation.classList.add("hidden");
        introAnimation.classList.remove("visible");

        // Show other sections
        header.classList.add("visible");
        header.classList.remove("hidden");

        main.classList.add("visible");
        main.classList.remove("hidden");

        footer.classList.add("visible");
        footer.classList.remove("hidden");
    }, 5000); // Adjust time (matches animation duration)
});

function openPopup() {
    // Open a new window with the desired file
    window.open("avatar.female.html", "popupWindow", "width=320,height=480,resizable=no,scrollbars=yes");
}