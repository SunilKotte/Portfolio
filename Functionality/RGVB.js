document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;  
    document.body.style.backgroundPosition = `center ${scrollPosition * 0.3}px`; // Adjust speed
});
