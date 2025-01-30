// Get modal and button elements
const contactModal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const successModal = document.getElementById("successModal");
const closeSuccessBtn = document.getElementById("closeSuccess");

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

// Function to show success modal
const showSuccessModal = () => {
    console.log("showSuccessModal() called!"); // Debugging
    contactModal.classList.add("hidden"); // Hide contact modal
    successModal.classList.remove("hidden"); // Show success modal
};

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted!"); // Debugging
    showSuccessModal(); // Show success modal after submission
};

// Attach event listener for form submission
contactForm.addEventListener("submit", handleFormSubmit);

// Function to close the success modal
const closeSuccessModal = () => {
    successModal.classList.add("hidden");
};

// Event listener to close the success modal when clicking 
closeSuccessBtn.addEventListener("click", closeSuccessModal);

console.log("closeSuccessBtn:", closeSuccessBtn);
console.log("successModal:", successModal);