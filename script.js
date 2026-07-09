document.addEventListener("DOMContentLoaded", function () {

  const startBtn = document.getElementById("startBtn");
  const loginBtn = document.getElementById("loginBtn");

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      alert("Welcome to PresentAI Pro!");

      // AI Generator section par le jayega
      document.querySelector(".cards").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Login page is coming soon!");
    });
  }

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      alert(this.textContent + " page is coming soon!");
    });
  });

});
