/* ==========================================================================
   AI & ROBOTICS CLUB - BEFORE FOOTER CTA BANNER (cta-banner.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const ctaHTML = `
    <section class="section text-center" style="background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple)); color: white; margin-top: 4rem;">
      <div class="container">
        <h2 style="color: white; margin-bottom: 1rem;">Ready to Inspire Your Child's Tech Future?</h2>
        <p style="color: rgba(255, 255, 255, 0.9); max-width: 600px; margin: 0 auto 2rem auto;">
          Join Lahore's top hands-on AI & Robotics Club for kids aged 8–16. Book a free trial class today!
        </p>
        <a href="https://wa.me/923224217059" target="_blank" class="btn btn-primary">
          💬 Book Free Trial on WhatsApp
        </a>
      </div>
    </section>
  `;

  // Place immediately above the footer container or at bottom of body
  const footerElement = document.querySelector("footer");
  if (footerElement) {
    footerElement.insertAdjacentHTML("beforebegin", ctaHTML);
  } else {
    document.body.insertAdjacentHTML("beforeend", ctaHTML);
  }
});
