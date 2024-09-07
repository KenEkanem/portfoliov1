// static/script.js
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode preference is saved in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply saved preference on page load
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.setAttribute('aria-pressed', 'true');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update aria-pressed attribute
    const isPressed = darkModeToggle.getAttribute('aria-pressed') === 'true';
    darkModeToggle.setAttribute('aria-pressed', !isPressed);

    // Save current preference in localStorage
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
});

// Smooth scroll functionality for scroll arrow
const scrollArrow = document.querySelector('.scroll-arrow');

scrollArrow.addEventListener('click', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.scrollIntoView({ behavior: 'smooth' });
});

// Preload images for better performance
const preloadImages = () => {
    const images = [
        "/static/images/noise-texture.png", // Example
        "{{ url_for('static', filename='social-icon.jpg') }}"
    ];
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

window.addEventListener('load', preloadImages);
