// DARK / LIGHT MODE
function toggleMode() {
    document.body.classList.toggle("light");
}

// SMOOTH SCROLL EFFECT
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});