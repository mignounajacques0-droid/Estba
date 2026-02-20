    document.addEventListener('DOMContentLoaded', function() {
        // ... ton code existant pour le préchargeur, etc. ...

        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.querySelector('.main-nav');
        const mainHeader = document.querySelector('.main-header'); // Pour récupérer le logo original

        // Créer un élément pour le logo mobile si ce n'est pas déjà fait
        let mobileLogo = document.querySelector('.main-nav .logo-mobile');
        if (!mobileLogo) {
            mobileLogo = document.createElement('div');
            mobileLogo.classList.add('logo-mobile');
            // Cloner le contenu du logo original pour le menu mobile
            const originalLogo = mainHeader.querySelector('.logo img');
            if (originalLogo) {
                const clonedLogo = originalLogo.cloneNode(true);
                mobileLogo.appendChild(clonedLogo);
            }
            mainNav.prepend(mobileLogo); // Insérer le logo au début du menu mobile
        }

        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('active'); // Pour animer l'icône hamburger
            document.body.classList.toggle('no-scroll'); // Empêche le défilement du body
            // Gérer la visibilité du logo mobile
            if (mainNav.classList.contains('active')) {
                mobileLogo.style.display = 'block';
            } else {
                mobileLogo.style.display = 'none';
            }
        });

        // Fermer le menu si on clique sur un lien (pour les SPA)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
                mobileLogo.style.display = 'none';
            });
        });

        // ... le reste de ton JS ...
    });

