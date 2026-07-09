document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    alert("Welcome to PresentAI Pro!");
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(link.textContent + " page is coming soon!");
    });
  });
});
