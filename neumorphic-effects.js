// Advanced Neumorphic Effects
document.addEventListener('DOMContentLoaded', () => {
  // Add mouse follow light effect
  createMouseFollowEffect();
  
  // Add reveal animations
  setupFadeInElements();
  
  // Add tactile feedback to neumorphic elements
  addTactileFeedback();
});

// Create a light element that follows the mouse for a more tactile experience
function createMouseFollowEffect() {
  // Create a div for the mouse follow light with neutral color
  const mouseLight = document.createElement('div');
  mouseLight.className = 'mouse-follow-light';
  document.body.appendChild(mouseLight);
  
  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    // Only show on non-mobile devices
    if (window.innerWidth > 768) {
      mouseLight.style.display = 'block';
      mouseLight.style.opacity = '1';
      mouseLight.style.left = `${e.clientX - 150}px`;
      mouseLight.style.top = `${e.clientY - 150}px`;
    }
  });
  
  // Hide light when mouse leaves the window
  document.addEventListener('mouseleave', () => {
    mouseLight.style.opacity = '0';
  });
}

// Setup fade-in animations for elements as they scroll into view
function setupFadeInElements() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Add visible class to elements in viewport on page load
  checkFadeElements();
  
  // Check elements on scroll
  window.addEventListener('scroll', () => {
    checkFadeElements();
  });
  
  function checkFadeElements() {
    const triggerBottom = window.innerHeight * 0.8;
    
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('visible');
      }
    });
  }
}

// Add tactile feedback to neumorphic elements for a more physical feel
function addTactileFeedback() {
  const buttons = document.querySelectorAll('.neumorphic-btn');
  const cards = document.querySelectorAll('.neumorphic, .tech-item, .project-card, .what-column');
  
  // Add subtle tilt effect to buttons
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const maxTilt = 10; // maximum tilt in degrees
      const tiltX = ((y - centerY) / centerY) * maxTilt;
      const tiltY = ((centerX - x) / centerX) * maxTilt;
      
      button.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-3px)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
    
    // Add "press" effect on click
    button.addEventListener('mousedown', () => {
      button.style.transform = 'translateY(2px) scale(0.98)';
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = '';
    });
  });
  
  // Add subtle hover effect to cards
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create light reflection effect
      card.style.background = `
        linear-gradient(
          145deg,
          rgba(242, 242, 245, 1),
          rgba(237, 237, 240, 1)
        )
      `;
      
      // Subtle shadow adjustment based on mouse position
      const shadowX = ((x / rect.width) - 0.5) * 10;
      const shadowY = ((y / rect.height) - 0.5) * 10;
      
      card.style.boxShadow = `
        ${6 + shadowX}px ${6 + shadowY}px 12px rgba(163, 177, 198, 0.25),
        ${-6 - shadowX}px ${-6 - shadowY}px 12px rgba(255, 255, 255, 0.85)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
      card.style.boxShadow = '';
    });
  });
}
