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
