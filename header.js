/* ==========================================================================
   AI & ROBOTICS CLUB - GLOBAL HEADER (header.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Set site favicon (applies on every page that loads header.js)
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

  // Also set apple-touch-icon for better mobile support
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
        <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;">
          <img src="images/airlogo.webp" alt="AI & Robotics Club" style="height: 40px; width: auto; object-fit: contain;">
          <span>AI & <span style="color: inherit;">ROBOTICS CLUB</span></span>
        </a>
        <nav>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#trial" class="btn btn-primary" style="padding: 0.5rem 1rem;">Free Trial</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // Inject header: prefer #site-header if present, otherwise at the beginning of <body>
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    siteHeader.innerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }
});
