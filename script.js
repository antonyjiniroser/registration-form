const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateForm() {
    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    } else {
        nameError.textContent = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    submitBtn.disabled = !valid;
    submitBtn.classList.toggle('enabled', valid);
}

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Character Counter
const messageBox = document.getElementById('message');
const charCount = document.getElementById('charCount');
const charWarning = document.getElementById('charWarning');
const maxChars = 200;

messageBox.addEventListener('input', () => {
    const currentLength = messageBox.value.length;
    charCount.textContent = `${currentLength}/${maxChars} characters`;

    if (currentLength >= maxChars) {
        charWarning.textContent = "Character limit reached!";
    } else {
        charWarning.textContent = "";
    }
});

// Prevent form submission for demo
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});