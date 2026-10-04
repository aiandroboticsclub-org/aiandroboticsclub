/* ==========================================================================
   AI & ROBOTICS CLUB - GLOBAL FOOTER (footer.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const footerHTML = `
    <footer class="footer">
      <div class="container grid grid-3">
        <div>
          <h3 style="color: white; margin-bottom: 1rem;">🤖 AI & Robotics Club</h3>
          <p>Where young creators learn AI, Coding, Robotics, Arduino, and STEAM skills by building real projects.</p>
        </div>
        <div>
          <h4 style="color: white; margin-bottom: 1rem;">Quick Links</h4>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.5rem;"><a href="index.html">Home</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="#programs">Programs & Courses</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="#trial">Book Free Trial</a></li>
          </ul>
        </div>
        <div>
          <h4 style="color: white; margin-bottom: 1rem;">Location & Contact</h4>
          <p>📍 Shah Jilani Road, Near Lahore Grammar School, Township, Lahore</p>
          <p>📞 +92 322 421 7059</p>
          <p>✉️ support@aiandroboticsclub.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${currentYear} AI & Robotics Club. All Rights Reserved.</p>
      </div>
    </footer>
  `;

  // Inject footer at the very end of <body>
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
