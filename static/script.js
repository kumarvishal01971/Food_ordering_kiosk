document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user details
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const reason = document.getElementById("reason").value;

    // Store data in localStorage (or send to an API later)
    localStorage.setItem("scheduledCall", JSON.stringify({ name, email, reason }));

    // Show confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    // Clear form fields
    document.getElementById("contactForm").reset();
});
