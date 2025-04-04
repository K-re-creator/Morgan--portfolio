//show/hide the return to top button based on scroll
window.onscroll = function () {
    const returnToTopButton = document.getElementById("return-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        returnToTopButton.style.display = "block";
    } else {
        returnToTopButton.style.display = "none";
    }
}
// Smooth scrolling for navigation
document.getElementById("return-to-top").onclick = function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior : "smooth"});
};