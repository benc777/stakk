
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});


function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
}

// Show hamburger menu only on smaller screens
window.addEventListener('resize', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const desktopNav = document.querySelector('.desktop-nav');
  if (window.innerWidth <= 768) {
    hamburgerMenu.style.display = 'block';
    desktopNav.style.display = 'none';
  } else {
    hamburgerMenu.style.display = 'none';
    desktopNav.style.display = 'flex';
    // ALSO force mobile menu to hide if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.style.display = 'none';
    }
  }
});

// Trigger resize event on page load
window.dispatchEvent(new Event('resize'));





