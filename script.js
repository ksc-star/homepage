// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
target.scrollIntoView({ behavior: 'smooth' });
});
});

// Hover animation on project cards
const cards = document.querySelectorAll('.project');
cards.forEach(card => {
card.addEventListener('mouseenter', () => {
card.style.transform = 'scale(1.05)';
});
card.addEventListener('mouseleave', () => {
card.style.transform = 'scale(1)';
});
});

.project {
transition: transform 0.3s ease;
}
