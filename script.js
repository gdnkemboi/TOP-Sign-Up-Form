(function () {
  // Selecting password fields
  const passwordField = document.querySelector("#password1");
  const confirmPasswordField = document.querySelector("#password2");
  const errorMessage = document.querySelector("#errorMessage");

  // Function to check if passwords match
  function checkPasswordMatch() {
    if (passwordField.value !== confirmPasswordField.value) {
      errorMessage.textContent = "* Passwords do not match";
      passwordField.classList.add("error");
      console.log("error");
    } else {
      errorMessage.textContent = ""; // Clear error message if passwords match
    }
  }

  // Adding event listener to confirm password field
  confirmPasswordField.addEventListener("input", checkPasswordMatch);
})();

(function () {
  document.querySelector("#submitButton").addEventListener("click", function() {
      document.querySelector(".submitBtn").click();
    });
})();
