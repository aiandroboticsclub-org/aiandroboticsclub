/* ==========================================================================
   AI & ROBOTICS CLUB - GLOBAL HEADER (header.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="navbar">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          🤖 AI & <span>ROBOTICS CLUB</span>
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

  // Inject header at the beginning of the <body>
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
