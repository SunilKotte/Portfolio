
        // Close the navbar after clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
    
                if (navbarCollapse.classList.toggle("show")) {
                    navbarToggler.classList.toggle("collapsed"); // Toggle the "collapsed" class to hide the navbar
    
            
                }
            });
        });
            document.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    function openPopup(projectId) {
        const popup = document.getElementById(`popup-${projectId}`);
        popup.style.display = "flex";
    }
    
    function closePopup(projectId) {
        const popup = document.getElementById(`popup-${projectId}`);
        popup.style.display = "none";
    }
    
            // Observer for fade-in sections
            const fadeInSections = document.querySelectorAll(".fade-in-section");
    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in-visible");
                    } else {
                        entry.target.classList.remove("fade-in-visible");
                    }
                });
            });
    
            fadeInSections.forEach((section) => {
                observer.observe(section);
            });
    
            document.addEventListener("DOMContentLoaded", () => {
        const options = {
            strings: ["Full-Stack Developer"],
            typeSpeed: 50,
            backSpeed: 60,
            loop: true,
            showCursor: false,
            cursorChar: "_",
            smartBackspace: true,
            backspacingDelay: 50,
            startDelay: 1000,
        };
        new Typed("#typewriter", options);
    });

    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 200,    // Trigger animation 200px into view
    });
    