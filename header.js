/* ==========================================================================
   AI & ROBOTICS CLUB - GLOBAL HEADER (header.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Set site favicon
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (!existingFavicon) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/webp';
    favicon.href = 'images/airlogo.webp';
    document.head.appendChild(favicon);
  } else {
    existingFavicon.href = 'images/airlogo.webp';
  }

  let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (!appleIcon) {
    appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    document.head.appendChild(appleIcon);
  }
  appleIcon.href = 'images/airlogo.webp';

  const headerHTML = `
    <header class="navbar">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          <img src="images/airlogo.webp" alt="AI & Robotics Club" class="logo-img">
          <span class="logo-text">AI & <span>ROBOTICS CLUB</span></span>
        </a>

        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span class="hamburger"></span>
        </button>

        <nav class="nav-menu" id="navMenu">
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="index.html#programs">Programs</a></li>
            <li><a href="index.html#benefits">About Us</a></li>
            <li><a href="index.html#contact">Contact</a></li>
            <li><a href="index.html#contact" class="btn btn-primary nav-cta">Free Trial</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    siteHeader.innerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  // Mobile menu toggle
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked (mobile)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
