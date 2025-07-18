document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nameRegex = /^[a-zA-Z]+$/;
    var EmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    var passwordRegex = /^.{6,}$/;

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var valid = true;

    // Hide all errors initially
    document.querySelector(".nameError").style.display = "none";
    document.querySelector(".emailError").style.display = "none";
    document.querySelector(".passwordError").style.display = "none";

    if (!nameRegex.test(name.value)) {
        document.querySelector(".nameError").style.display = "inline";
        valid = false;
    }
    if (!EmailRegex.test(email.value)) {
        document.querySelector(".emailError").style.display = "inline";
        valid = false;
    }
    if (!passwordRegex.test(password.value)) {
        document.querySelector(".passwordError").style.display = "inline";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        this.submit();
    }
});