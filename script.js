document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne le bouton du menu hamburger
    const navToggle = document.querySelector('.nav-toggle');
    // Sélectionne le menu de navigation complet
    const mainNav = document.querySelector('.main-nav');

    // Vérifie si les éléments existent avant d'ajouter l'écouteur d'événement
    if (navToggle && mainNav) {
        // Ajoute un écouteur d'événement pour le clic sur le bouton
        navToggle.addEventListener('click', function() {
            // Bascule la classe 'active' sur le menu de navigation
            // et sur le bouton hamburger pour l'animation (X)
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('open'); // Ceci ajoute/retire la classe 'open' au bouton nav-toggle
        });
    }
});

