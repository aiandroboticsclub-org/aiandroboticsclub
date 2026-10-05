document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.getElementById('site-footer');

  const footerHTML = `
    <!-- Standard Page Footer -->
    <footer style="background:#0f172a; color:#94a3b8; padding:2rem 1rem 6rem 1rem; text-align:center; margin-top:3rem;">
      <p style="margin-bottom:1rem; font-size:0.95rem;">&copy; 2026 AI & Robotics Club. All rights reserved.</p>
      <p style="font-size:0.9rem;">
        <a href="privacy-policy.html" style="color:#25D366; text-decoration:none; margin:0 8px;">Privacy Policy</a> |
        <a href="terms.html" style="color:#25D366; text-decoration:none; margin:0 8px;">Terms & Conditions</a> |
        <a href="shipping.html" style="color:#25D366; text-decoration:none; margin:0 8px;">Shipping & Returns</a>
      </p>
    </footer>

    <!-- Sticky Bottom 50/50 Action Bar -->
    <div class="sticky-footer-bar">
      <a href="https://wa.me/923119696807" target="_blank" class="sticky-btn btn-whatsapp">
        💬 WhatsApp
      </a>
      <a href="tel:+923119696807" class="sticky-btn btn-call">
        📞 Call Us
      </a>
    </div>

    <!-- Sticky Bar & Floating Cart CSS Styles -->
    <style>
      /* Ensure page body clears the fixed bottom bar */
      body {
        padding-bottom: 70px !important;
      }

      /* Fixed Container */
      .sticky-footer-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: #0f172a;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.25);
        z-index: 997; /* Sits below cart drawer overlay */
        box-sizing: border-box;
        padding: 6px 10px;
        gap: 10px;
      }

      /* 50/50 Split Button Styling */
      .sticky-btn {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;
        transition: background-color 0.2s ease, transform 0.1s ease;
        box-sizing: border-box;
      }

      .btn-whatsapp {
        background-color: #25D366;
        color: #ffffff;
      }

      .btn-whatsapp:hover {
        background-color: #1da851;
      }

      .btn-call {
        background-color: #2563eb;
        color: #ffffff;
      }

      .btn-call:hover {
        background-color: #1d4ed8;
      }

      .sticky-btn:active {
        transform: scale(0.98);
      }

      /* Reposition cart floating button so it doesn't overlap sticky bar */
      .cart-floating-btn {
        bottom: 80px !important;
      }
    </style>
  `;

  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  } else {
    // If <div id="site-footer"></div> missing, append directly to body
    const div = document.createElement('div');
    div.innerHTML = footerHTML;
    document.body.appendChild(div);
  }
});
