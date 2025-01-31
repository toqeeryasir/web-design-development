document.addEventListener("DOMContentLoaded", () => {
  const goToSignIn = document.querySelector(".sign-up-left button"); // Corrected
  const goToSignUp = document.querySelector(".sign-in-right button"); // Corrected

  const signInForm = document.querySelector(".sign-in");
  const signUpForm = document.querySelector(".sign-up");

  signInForm.classList.add("active");

  goToSignUp.addEventListener("click", () => {
    signInForm.classList.remove("active");
    signUpForm.classList.add("active");
  });

  goToSignIn.addEventListener("click", () => {
    signUpForm.classList.remove("active");
    signInForm.classList.add("active");
  });
});
