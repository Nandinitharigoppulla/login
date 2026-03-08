// Get form elements
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const successMsg = document.getElementById('successMessage');

// Helper to clear all error messages
function clearErrors() {
  usernameError.textContent = '';
  passwordError.textContent = '';
  successMsg.classList.remove('show');
}

// Remove success message when user starts typing again (optional)
usernameInput.addEventListener('input', function() {
  successMsg.classList.remove('show');
});
passwordInput.addEventListener('input', function() {
  successMsg.classList.remove('show');
});

// Form submit handler
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent actual form submission/page reload

  // Clear any previous errors and hide success message
  clearErrors();

  // Trim values to check emptiness
  const usernameVal = usernameInput.value.trim();
  const passwordVal = passwordInput.value.trim();

  let isValid = true;

  // Validate username/email
  if (usernameVal === '') {
    usernameError.textContent = 'Username or email is required.';
    isValid = false;
  }

  // Validate password
  if (passwordVal === '') {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    // Show success message
    successMsg.classList.add('show');
    // Optionally clear the form fields? we keep them as is (no clear)
    // You could also remove errors (already cleared)
  }
});