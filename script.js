const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
})