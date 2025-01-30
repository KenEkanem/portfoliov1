// Smooth Scroll
const scrollArrow = document.querySelector('.scroll-arrow img');
scrollArrow.addEventListener('click', () => {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('flipped');
    });
});

  
