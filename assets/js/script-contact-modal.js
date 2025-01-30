// Get modal and button elements
const contactModal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Function to show modal
const showContactModal = () => {
    contactModal.classList.remove("hidden");
};

// Event listener to show modal
openModalBtn.addEventListener("click", showContactModal);

// Function to close the modal
const closeContactModal = () => {
    contactModal.classList.add("hidden"); // Correct method to hide modal
};

// Event listener to close modal on button click
closeModalBtn.addEventListener("click", closeContactModal);