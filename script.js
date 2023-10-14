// Fonction pour créer une forme géométrique
function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    document.body.appendChild(shape);
    return shape;
}

// Fonction pour déplacer la forme en fonction de la position de la souris
function moveShape(shape, mouseX, mouseY) {
    const xOffset = 10; // Ajustez ces valeurs pour la position initiale de la forme
    const yOffset = 10;

    const x = mouseX - xOffset;
    const y = mouseY - yOffset;

    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
}

// Fonction d'animation pour mettre à jour la position de la forme à chaque événement de la souris
function animateShapes(event) {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    shapes.forEach((shape) => {
        moveShape(shape, mouseX, mouseY);
    });
}

// Écoutez l'événement de mouvement de la souris
document.addEventListener('mousemove', animateShapes);

// Créez des formes géométriques initiales
for (let i = 0; i < 10; i++) {
    const shape = createShape();
    moveShape(shape, window.innerWidth / 2, window.innerHeight / 2);
}

