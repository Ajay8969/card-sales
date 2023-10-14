// Get all card elements
var cards = document.querySelectorAll('.card');

// Add a mouseover event listener to each card
cards.forEach((card) => {
    // When the mouse hovers over a card
    card.addEventListener('mouseover', () => {
        // Change the card's background color to lightsalmon
        card.style.background = 'linear-gradient(90deg, #d53369 0%, #daae51 100%)';
        // Apply a 3D effect by rotating and scaling the card
        card.style.transform = 'rotateY(10deg) scale(1.05)';
        card.style.transition = 'background-color 0.3s, transform 0.3s';
    });

    card.addEventListener('mouseout', () => {
        card.style.background = '';
        card.style.transform = 'rotateY(0) scale(1)';
    });
});

btn1 = () => {
    document.getElementById('btn1').innerText="Buyed";
    alert('buyed')
}
btn2 = () => {
    document.getElementById('btn2').innerText="Buyed";
}
btn3 = () => {
    document.getElementById('btn3').innerText="Buyed";
}
btn4 = () => {
    document.getElementById('btn4').innerText="Buyed";
}
btn5 = () => {
    document.getElementById('btn5').innerText="Buyed";
}
btn6 = () => {
    document.getElementById('btn6').innerText="Buyed";
}
