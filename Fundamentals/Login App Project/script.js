function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");
  const isCorrectUsername = usernameInput.value === "haris@sigmaschool.co";
  const isCorrectPassword = passwordInput.value === "password";


  if (isCorrectUsername && isCorrectPassword) {
    result.textContent = "Welcome Haris!";
  } else if (isCorrectUsername) {
    result.textContent = "Wrong password";
  } else {
    result.textContent = "Wrong password/username"
  }
}