// Toggle Dark Mode Feature
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Character Counter Feature
const feedbackBox = document.getElementById("feedback");
const charCount = document.getElementById("charCount");

feedbackBox.addEventListener("input", function () {
  charCount.textContent = "Characters: " + feedbackBox.value.length;
});

// Custom Form Validation
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default submit action
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Name validation
  if (name.length < 2) {
    message = "Name must be at least 2 characters long.";
  }
  // Email validation (basic regex)
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    message = "Please enter a valid email address.";
  }
  // Password validation
  else if (password.length < 6) {
    message = "Password must be at least 6 characters long.";
  }
  else {
    message = "Form submitted successfully!";
  }

  document.getElementById("formMessage").textContent = message;
});
