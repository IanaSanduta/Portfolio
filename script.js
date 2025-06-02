document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile menu toggle (if needed in the future)
  const setupMobileMenu = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (window.innerWidth <= 768) {
      // Add mobile menu functionality here if needed
    }
  };

  // Call initially and on resize
  setupMobileMenu();
  window.addEventListener('resize', setupMobileMenu);
});