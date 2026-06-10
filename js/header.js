/**
 * header.js - Sticky header and mobile menu toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');
  const menuIcon = menuToggle?.querySelector('.material-symbols-outlined');

  // Sticky Header Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // Mobile Menu Toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('header__nav--open');
      
      if (menuIcon) {
        menuIcon.textContent = isOpen ? 'close' : 'menu';
      }
      
      // Prevent scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        if (menuIcon) menuIcon.textContent = 'menu';
        document.body.style.overflow = '';
      }
    });
  });
});
