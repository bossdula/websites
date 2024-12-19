// Toggle menu visibility on small screens
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Toggle the "active" class to show or hide the menu
});

let currentIndex = 0;
const images = [
    'masachussets.png', // Add your image paths here
    'pexels-allan-so-2622179.jpg',
    'zanzibar.jpg',
];

const welcomeSection = document.querySelector('.welcome-section');

// Function to change background image
function changeBackground() {
    welcomeSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Initial background change
changeBackground();
