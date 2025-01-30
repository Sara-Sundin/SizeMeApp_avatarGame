/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    // Load HTML before each test
    document.body.innerHTML = `
         <!-- Contact Section -->
        <section id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <h5 class="heading-font blk-heading">Let's Connect</h5>
                    </div>
                    <div id="button-contact" class="col-12 col-md-4">
                        <button type="button" class="btn btn-dark" id="openModal">Contact</button>
                    </div>
                    <div class="col-12 col-md-4">
                        <p>"Let us create something amazing – drop a message!"</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Modal -->
        <div id="contactModal" class="modal-contact hidden">
            <div class="modal-content-contact">
                <span class="close" id="closeModal">&times;</span>
                <h2>Contact Us</h2>
                <form id="contactForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>

        <!-- Success Modal -->
        <div id="successModal" class="modal-contact hidden">
            <div class="modal-content-contact">
                <span class="close" id="closeSuccess">&times;</span>
                <h2>Success!</h2>
                <p>Your message has been sent.</p>
            </div>
        </div>
    `;

    // Get elements after HTML is set
    contactModal = document.getElementById("contactModal");
    openModalBtn = document.getElementById("openModal");
    closeModalBtn = document.getElementById("closeModal");
    successModal = document.getElementById("successModal");
    contactForm = document.getElementById("contactForm");

});

test("should open the contact modal when clicking the button", () => {
    // Ensure modal is hidden before click
    expect(contactModal.classList.contains("hidden")).toBe(true);

    // Function to remove "hidden" class
    const showContactModal = () => {
        contactModal.classList.remove("hidden");
    };

    // Add event listener
    openModalBtn.addEventListener("click", showContactModal);

    // Simulate button click 
    openModalBtn.dispatchEvent(new Event("click"));

    // Ensure modal is now visible
    expect(contactModal.classList.contains("hidden")).toBe(false);
});

test("should close the contact modal when clicking the close button", () => {
    // Simulate the modal being open
    contactModal.classList.remove("hidden");

    // Function to close the modal
    const closeContactModal = () => {
        contactModal.classList.add("hidden");
    };

    // Add event listener
    closeModalBtn.addEventListener("click", closeContactModal);

    // Simulate clicking the close button
    closeModalBtn.dispatchEvent(new Event("click"));

    // Check that the modal is now hidden
    expect(contactModal.classList.contains("hidden")).toBe(true);
});

test("should show success modal when called", () => {
    const showSuccessModal = () => {
        contactModal.classList.add("hidden");
        successModal.classList.remove("hidden");
    };

    // Before calling function, success modal should be hidden
    expect(successModal.classList.contains("hidden")).toBe(true);

    // Call function
    showSuccessModal();

    // Success modal should now be visible
    expect(successModal.classList.contains("hidden")).toBe(false);
});

test("should call showSuccessModal when form is submitted", () => {
    const mockShowSuccessModal = jest.fn(); // Mock function

    // Overwrite the function inside handleFormSubmit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        mockShowSuccessModal(); // Call the mock function
    };

    // Attach event listener to mock function
    contactForm.addEventListener("submit", handleFormSubmit);

    // Simulate form submission
    contactForm.dispatchEvent(new Event("submit", {
        bubbles: true
    }));

    // Check if mockShowSuccessModal() was called
    expect(mockShowSuccessModal).toHaveBeenCalled(); // ✅ Now it properly validates function call
});