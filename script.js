window.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro");

    // Listen for the zoomOut animation to finish
    intro.addEventListener("animationend", (e) => {
        if (e.animationName === "zoomOut") {
            window.location.href = "nextpage.html"; // 👈 change this to your page
        }
    });
});