document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Reset Errors
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    if (name.value.trim() === "") {
        nameError.innerText = "Name is required.";
        valid = false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        emailError.innerText = "Valid email is required.";
        valid = false;
    }

    if (message.value.trim() === "") {
        messageError.innerText = "Message cannot be empty.";
        valid = false;
    }

    if (valid) {
        alert("✅ Message sent successfully!");
        this.reset();
    }
});


