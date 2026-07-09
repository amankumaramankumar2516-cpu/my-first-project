document.addEventListener("DOMContentLoaded", function () {

    const generateBtn = document.getElementById("generateBtn");
    const loginBtn = document.getElementById("loginBtn");

    if (generateBtn) {
        generateBtn.addEventListener("click", function () {

            alert("Welcome to PresentAI Pro!");

            const cards = document.querySelector(".cards");
            if (cards) {
                cards.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            alert("Login page is coming soon!");
        });
    }

    document.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            alert(this.textContent + " page is coming soon!");
        });
    });

});
