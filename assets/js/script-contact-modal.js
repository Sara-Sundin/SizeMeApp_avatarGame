// Get modal and button elements
const contactModal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");

// Function to show modal
const showContactModal = () => {
    contactModal.classList.remove("hidden");
};

// Event listener to open modal
openModalBtn.addEventListener("click", showContactModal);