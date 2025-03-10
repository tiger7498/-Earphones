// Появление при прокрутке
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (window.scrollY > section.offsetTop - 300) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});