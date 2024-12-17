document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  // Auto-login if token exists
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    window.location.href = "home.html"; // Redirect to the main page
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user input
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe");

    // Custom Validation
    if (username !== "emilys") {
      alert('Username must be "emilys".');
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!rememberMe.checked) {
      alert('Please check "Remember Me" to proceed.');
      return;
    }

    // Simulate successful login (no API)
    const fakeToken = "dummyToken1234";
    localStorage.setItem("authToken", fakeToken);
    localStorage.setItem("userData", JSON.stringify({ username, email }));

    alert("Login successful!");
    window.location.href = "home.html"; // Redirect to main page
  });
});
