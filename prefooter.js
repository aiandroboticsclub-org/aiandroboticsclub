/* ==========================================================================
   AI & ROBOTICS CLUB - PRE-FOOTER (prefooter.js)
   Legal links + contact + address. Sticky WhatsApp/Call bar stays in footer.js.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const prefooterHTML = `
    <div class="prefooter">
      <div class="prefooter-inner">
        <div class="prefooter-col">
          <div class="prefooter-title">Contact</div>
          <p><a href="tel:+923224217059">+92 322 4217059</a></p>
          <p><a href="https://wa.me/923224217059" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          <p>Email: <a href="mailto:info@aiandroboticsclub.org">info@aiandroboticsclub.org</a></p>
        </div>

        <div class="prefooter-col">
          <div class="prefooter-title">Address</div>
          <p>AI & Robotics Club</p>
          <p>Karachi, Pakistan</p>
          <p class="prefooter-muted">(Full address to be updated)</p>
        </div>

        <div class="prefooter-col">
          <div class="prefooter-title">Pages</div>
          <p><a href="index.html">Home</a></p>
          <p><a href="products.html">Products</a></p>
          <p class="prefooter-muted">More pages coming soon</p>
        </div>

        <div class="prefooter-col">
          <div class="prefooter-title">Legal</div>
          <p><a href="privacy-policy.html">Privacy Policy</a></p>
          <p><a href="terms.html">Terms & Conditions</a></p>
          <p><a href="shipping.html">Shipping & Returns</a></p>
        </div>
      </div>

      <div class="prefooter-bottom">
        &copy; <span id="prefooter-year"></span> AI & Robotics Club. All rights reserved.
      </div>
    </div>

    <style>
      .prefooter {
        background: #0f172a;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.5;
        padding: 1.25rem 1rem 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }

      .prefooter-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem 1.5rem;
      }

      .prefooter-col {
        min-width: 0;
      }

      .prefooter-title {
        font-size: 10px;
        font-weight: 700;
        color: #e2e8f0;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-bottom: 0.4rem;
      }

      .prefooter p {
        margin: 0 0 0.2rem 0;
        font-size: 10px;
        color: #94a3b8;
      }

      .prefooter a {
        color: #94a3b8;
        text-decoration: none;
      }

      .prefooter a:hover {
        color: #38bdf8;
      }

      .prefooter-muted {
        color: #64748b !important;
        font-style: italic;
      }

      .prefooter-bottom {
        max-width: 1100px;
        margin: 0.9rem auto 0;
        padding-top: 0.6rem;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        text-align: center;
        font-size: 10px;
        color: #64748b;
      }

      @media (max-width: 700px) {
        .prefooter-inner {
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
      }

      @media (max-width: 400px) {
        .prefooter-inner {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `;

  const target = document.getElementById("site-prefooter");
  if (target) {
    target.innerHTML = prefooterHTML;
  } else {
    // Insert before sticky footer if present, otherwise at end of body
    const sticky = document.getElementById("site-footer");
    const wrap = document.createElement("div");
    wrap.id = "site-prefooter";
    wrap.innerHTML = prefooterHTML;
    if (sticky && sticky.parentNode) {
      sticky.parentNode.insertBefore(wrap, sticky);
    } else {
      document.body.appendChild(wrap);
    }
  }

  const yearEl = document.getElementById("prefooter-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
