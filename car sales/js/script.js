// Get all card elements
const cards = document.querySelectorAll('.card');

// Add a mouseover event listener to each card
cards.forEach((card) => {
    // When the mouse hovers over a card
    card.addEventListener('mouseover', () => {
        // Change the card's background color to lightsalmon
        card.style.backgroundColor = 'lightsalmon';
        // Apply a 3D effect by rotating and scaling the card
        card.style.transform = 'rotateY(10deg) scale(1.05)';
        // Add a smooth transition for background color and transform
        card.style.transition = 'background-color 0.3s, transform 0.3s';
    });

    // When the mouse moves away from a card
    card.addEventListener('mouseout', () => {
        // Restore the original background color
        card.style.backgroundColor = '';
        // Reset the 3D effect to its original state
        card.style.transform = 'rotateY(0) scale(1)';
    });
});
