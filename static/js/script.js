// Smooth Scroll
const scrollArrow = document.querySelector('.scroll-arrow img');
scrollArrow.addEventListener('click', () => {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
});
