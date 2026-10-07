/**
 * CampusTech 2026 - Main JavaScript
 * Author: Team Digital Dominators (Dipanshu Singh)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // FAQ Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      
      // Close other accordion items
      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      } else {
        item.classList.remove('open');
      }
    });
  });

  // Schedule Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const scheduleDays = document.querySelectorAll('.schedule-day');
  if (tabButtons.length > 0 && scheduleDays.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetDay = btn.getAttribute('data-day');
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        scheduleDays.forEach(day => {
          if (targetDay === 'all' || day.id === targetDay) {
            day.style.display = 'block';
          } else {
            day.style.display = 'none';
          }
        });
      });
    });
  }

  // Prototype Form Submission Simulation
  const regForm = document.getElementById('demo-reg-form');
  const alertBox = document.getElementById('form-alert');
  if (regForm && alertBox) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alertBox.style.display = 'block';
      alertBox.innerHTML = '<strong>Success!</strong> (Prototype Simulation) Your registration form submission was captured in client state. Note: As this is an educational mock prototype, no real data is transmitted to live servers.';
      regForm.reset();
    });
  }
});
