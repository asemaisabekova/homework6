function validateForm() {
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Invalid email format. Must contain '@' and '.'.";
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    return isValid;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
    }
});
