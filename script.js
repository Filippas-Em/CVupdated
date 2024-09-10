const texts = ['Web Developer', 'Full Stack Developer'];
let index = 0; 

function typeWriter() {
  const text = texts[index]; 
  const speed = 100; 
  const textElement = document.getElementById('text'); 
  let i = 0;

  function type() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    if (i >= 0) {
      textElement.textContent = text.substring(0, i);
      i--;
      setTimeout(deleteText, speed);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(typeWriter, 500); 
    }
  }

  type();
}

typeWriter();


//hamberger menu
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const menuLinks = offScreenMenu.querySelectorAll('a');


hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
  });
});






let lastScrollY = window.scrollY;
const desktopNav = document.querySelector('.desktop');
const hamNav = document.querySelector('.hamNav');
const heroSection = document.querySelector('.heroWrapper'); // Assuming this is the hero section

// Function to show the navbars
function showNavbars() {
    desktopNav.classList.add('visible');
    hamNav.classList.add('visible');
}

// Function to hide the navbars when scrolling down
function hideNavbars() {
    desktopNav.classList.remove('visible');
    hamNav.classList.remove('visible');
}

// Show navbars on initial load
window.addEventListener('load', () => {
    showNavbars();  // Ensure navbars are visible when the page loads
});

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Get the height of the hero section
    const heroSectionHeight = heroSection.offsetHeight;

    // Check if the user has scrolled past the hero section
    if (currentScrollY > heroSectionHeight) {
        // If user is scrolling upwards, show the navbars
        if (currentScrollY < lastScrollY) {
            showNavbars(); // Show both navbars when scrolling up
        } else {
            hideNavbars(); // Hide both navbars when scrolling down
        }
    } else {
        // Always show navbars when at the top or within the hero section
        showNavbars();
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
});
