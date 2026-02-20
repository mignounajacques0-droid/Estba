document.addEventListener('DOMContentLoaded', function() {
        // LOGIQUE DU PRELOADER
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Masque le préchargeur et affiche le contenu après un délai
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('hidden'); // Anime la disparition du préchargeur
            preloader.addEventListener('transitionend', function() {
                // S'assure que le préchargeur est complètement caché après la transition
                preloader.style.display = 'none';
                body.classList.remove('loading'); // Retire la classe loading pour afficher le contenu
            }, { once: true }); // S'exécute une seule fois
        } else {
            // Fallback si le preloader n'existe pas ou JS est trop lent
            body.classList.remove('loading');
        }
    }, 2500); // Durée de l'animation en ms (ici 2.5 secondes)
              // Ajuste ce délai en fonction de la durée de ton animation CSS
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    // On sélectionne maintenant tous les liens à l'intérieur du menu de navigation
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    

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
