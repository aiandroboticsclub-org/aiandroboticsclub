document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.getElementById('site-footer');

  const footerHTML = `
    <!-- Sticky Bottom 50/50 Action Bar -->
    <div class="sticky-footer-bar">
      <a href="https://wa.me/923224217059" target="_blank" rel="noopener noreferrer" class="sticky-btn btn-whatsapp">
        <i class="fa-brands fa-whatsapp mr-2"></i> WhatsApp
      </a>
      <a href="tel:+923224217059" class="sticky-btn btn-call">
        <i class="fa-solid fa-phone mr-2"></i> Call Us
      </a>
    </div>

    <style>
      /* Space out body so content isn't covered by the fixed bar */
      body {
        padding-bottom: 70px !important;
      }

      /* Fixed Bottom Container */
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
        box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.4);
        z-index: 997;
        box-sizing: border-box;
        padding: 8px 12px;
        gap: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      /* 50/50 Split Button Styling */
      .sticky-btn {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 0.95rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
        box-sizing: border-box;
      }

      .btn-whatsapp {
        background-color: #10b981;
        color: #ffffff;
      }

      .btn-whatsapp:hover {
        background-color: #059669;
      }

      .btn-call {
        background-color: #06b6d4;
        color: #000000;
      }

      .btn-call:hover {
        background-color: #0891b2;
      }

      .sticky-btn:active {
        transform: scale(0.98);
      }

      /* Elevate floating cart button if present */
      .cart-floating-btn {
        bottom: 80px !important;
      }
    </style>
  `;

  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  } else {
    const div = document.createElement('div');
    div.id = 'site-footer';
    div.innerHTML = footerHTML;
    document.body.appendChild(div);
  }
});
