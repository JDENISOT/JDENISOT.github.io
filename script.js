// Ajoutez ici du code JavaScript si vous avez besoin d'interactivité

// Par exemple, pour ajouter une animation de défilement doux pour les liens de navigation :
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetSection.offsetTop,
            });
        }
    });
});

/* Ajoutez ces styles pour les formes géométriques */
.shape {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #007BFF;
    border-radius: 50%;
    pointer-events: none; /* Permet aux formes de ne pas interférer avec les interactions de la souris */
}

/* Ajoutez ces styles pour les formes géométriques */
.shape {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #007BFF;
    border-radius: 50%;
    pointer-events: none; /* Permet aux formes de ne pas interférer avec les interactions de la souris */
}
