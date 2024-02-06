const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const showButton = document.getElementById("show");
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;

function showPass() {
  if (showButton.innerText === "Hide") {
    passwordInput.type = "password";
    showButton.innerText = "Show";
    return
  }
  passwordInput.type = "text";
  showButton.innerText = "Hide";
}

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = []

function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert("Successful login!");
  } else {
    alert("User not found. Please sign up first.");
  }
}

function signUp(username, password, confirmPassword) {
  if (!regex.test(`${password}`)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    users.push({ username, password });
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }
  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}