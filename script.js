document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    // On sélectionne maintenant tous les liens à l'intérieur du menu de navigation
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    if (navToggle && mainNav) {
        // Logique pour le clic sur le bouton hamburger
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('open');
        });

        // Nouvelle logique : Fermer le menu quand un lien est cliqué
        navLinks.forEach(link => { // Pour chaque lien du menu
            link.addEventListener('click', function() {
                // Si le menu est ouvert (a la classe 'active'), on le ferme
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    navToggle.classList.remove('open'); // On remet aussi le bouton hamburger à son état initial
                }
                // Ici, le comportement par défaut du lien (scroll vers l'ancre) se produira
            });
        });
    }
});
    

        // Variables pour le bouton "Back to Top"
        const backToTopButton = document.getElementById('back-to-top');

        // LOGIQUE DE NAVIGATION EXISTANTE ET AMÉLIORÉE
        if (navToggle && mainNav) {
            navToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                navToggle.classList.toggle('open');
                document.body.classList.toggle('no-scroll'); // Empêche le défilement
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        navToggle.classList.remove('open');
                        document.body.classList.remove('no-scroll'); // Réactive le défilement
                    }
                });
            });
        }

        // LOGIQUE DU BOUTON "BACK TO TOP"
        if (backToTopButton) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopButton.style.display = 'flex'; // Utilise flex pour le centrage
                } else {
                    backToTopButton.style.display = 'none';
                }
            });

            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // LOGIQUE SCROLLREVEAL POUR LES ANIMATIONS
        if (typeof ScrollReveal !== 'undefined') {
            ScrollReveal({ distance: '50px', duration: 1000, easing: 'ease-in-out', mobile: true });

            ScrollReveal().reveal('.hero-content h1', { delay: 200, origin: 'bottom' });
            ScrollReveal().reveal('.hero-content p', { delay: 400, origin: 'bottom' });
            ScrollReveal().reveal('.hero-content .btn', { delay: 600, origin: 'bottom' });

            ScrollReveal().reveal('section h2', { delay: 100, origin: 'top', distance: '30px', interval: 50 });
            ScrollReveal().reveal('section .intro-text', { delay: 200, origin: 'bottom', distance: '20px' });

            ScrollReveal().reveal('.news-card', { delay: 300, origin: 'bottom', interval: 150 });
            ScrollReveal().reveal('.program-card', { delay: 300, origin: 'bottom', interval: 150 });
            ScrollReveal().reveal('.cta-banner', { delay: 400, origin: 'left', distance: '50px' });

            ScrollReveal().reveal('.research-area-card', { delay: 300, origin: 'bottom', interval: 150 });
            ScrollReveal().reveal('#recherche .btn-primary', { delay: 400, origin: 'bottom' });

            ScrollReveal().reveal('.exam-section .intro-text, .exam-section .update-message', { delay: 200, origin: 'bottom', interval: 100 });

            ScrollReveal().reveal('.map-embed', { delay: 300, origin: 'top', distance: '50px' });
            ScrollReveal().reveal('.contact-info h3', { delay: 400, origin: 'left' });
            ScrollReveal().reveal('.contact-info p', { delay: 500, origin: 'left', interval: 100 });
            
            // Animations pour tes images spécifiques
            ScrollReveal().reveal('.goo', { delay: 100, origin: 'left' });
            ScrollReveal().reveal('.goe', { delay: 150, origin: 'right' });
            ScrollReveal().reveal('.goa', { delay: 200, origin: 'left' });
        }
    });
