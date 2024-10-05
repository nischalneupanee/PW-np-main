document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll Effect
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: section.offsetTop - 70, // Adjust for sticky navbar
                behavior: 'smooth'
            });
        });
    });

    // Navbar Active State Toggle
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjusted for smoother transitions
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // Toggle for Navbar on Mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });

    /* ----- TYPING EFFECT ----- */
    var typingEffect = new Typed(".typedText", {
        strings: ["CS Undergrad", "Blogger", "Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });

    /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /* -- HOME SECTION -- */
    sr.reveal('.home-left', {});
    sr.reveal('.home-right', { delay: 200 });

    /* -- ABOUT SECTION -- */
    sr.reveal('.about-content', {});
    sr.reveal('.about-image', { delay: 200 });

    /* -- PROJECT/PORTFOLIO SECTION -- */
    sr.reveal('.portfolio-item', { interval: 200 });

    /* -- CONTACT SECTION -- */
    sr.reveal('.contact-info', {});
    sr.reveal('.contact-form', { delay: 200 });

    /* -- HEADINGS -- */
    sr.reveal('.top-header', {});

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
    const srLeft = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    const srRight = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });

    /* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
    const section = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
});
