window.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".bop");

    // Listen for the zoomOut animation to finish
    intro.addEventListener("animationend", (e) => {
        if (e.animationName === "zoomOut") {
            window.location.href = "nextpage.html";
        }
    });
});
