/* ==========================================================================
   AI & ROBOTICS CLUB - PRE-FOOTER (prefooter.js)
   Areas We Serve: Gulf > Cities > Pages (loads /gulf-nav.json)
                   Europe > Countries > Pages (loads /europe-nav.json)
                   Far East > Countries > Pages (loads /far-east-nav.json)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  function esc(s) {
    return String(s)
      .replace(/&/g, "&" + "amp;")
      .replace(/</g, "&" + "lt;")
      .replace(/>/g, "&" + "gt;")
      .replace(/"/g, "&" + "quot;");
  }
  function cityTitle(slug) {
    return slug.split("-").map(function (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
  }

  var styles =
    ".prefooter{background:#0f172a;color:#94a3b8;font-size:10px;line-height:1.5;padding:1.25rem 1rem 1rem;border-top:1px solid rgba(255,255,255,.08)}" +
    ".prefooter-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem 1.5rem}" +
    ".prefooter-col{min-width:0}.prefooter-title{font-size:10px;font-weight:700;color:#e2e8f0;text-transform:uppercase;letter-spacing:.04em;margin-bottom:.4rem}" +
    ".prefooter p{margin:0 0 .2rem;font-size:10px;color:#94a3b8}.prefooter a{color:#94a3b8;text-decoration:none}.prefooter a:hover{color:#38bdf8}" +
    ".prefooter-bottom{max-width:1100px;margin:.9rem auto 0;padding-top:.6rem;border-top:1px solid rgba(255,255,255,.06);text-align:center;font-size:10px;color:#64748b}" +
    ".prefooter-areas{max-width:1100px;margin:.85rem auto 0;padding-top:.65rem;border-top:1px solid rgba(255,255,255,.06)}" +
    ".pf-areas-row{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem;align-items:flex-start}" +
    ".pf-area-root{flex:1 1 260px;min-width:200px;max-width:340px}" +
    ".pf-area-btn{display:flex;align-items:center;justify-content:space-between;gap:.4rem;width:100%;max-width:280px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);color:#e2e8f0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:.35rem .55rem;border-radius:6px;cursor:pointer;font-family:inherit;text-align:left}" +
    ".pf-area-btn:hover{border-color:rgba(56,189,248,.35);color:#38bdf8}" +
    ".pf-area-sub{max-width:100%;text-transform:none;font-weight:600;background:transparent;border-color:transparent;padding:.3rem .4rem;margin-top:.15rem}" +
    ".pf-caret{display:inline-block;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid currentColor;transition:transform .2s ease;flex-shrink:0}" +
    ".pf-area-item.open>.pf-area-btn .pf-caret{transform:rotate(180deg)}" +
    ".pf-area-panel{display:none;padding:.35rem 0 .35rem .55rem;border-left:1px solid rgba(56,189,248,.2);margin:.25rem 0 .35rem .35rem;max-height:240px;overflow-y:auto}" +
    ".pf-area-item.open>.pf-area-panel{display:block}" +
    ".pf-area-link{display:block;padding:.18rem 0;font-size:10px;color:#94a3b8;line-height:1.35}.pf-area-link:hover{color:#38bdf8}" +
    ".pf-area-panel .pf-area-item{margin-bottom:.15rem}" +
    "@media (max-width:700px){.prefooter-inner{grid-template-columns:1fr 1fr;gap:1rem}.pf-area-btn{max-width:100%}.pf-area-root{max-width:100%}}" +
    "@media (max-width:400px){.prefooter-inner{grid-template-columns:1fr}}";

  var baseHtml =
    '<div class="prefooter">' +
    '<div class="prefooter-inner">' +
    '<div class="prefooter-col"><div class="prefooter-title">Contact</div>' +
    '<p><a href="tel:+923224217059">+92 322 4217059</a></p>' +
    '<p><a href="https://wa.me/923224217059" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>' +
    '<p>Email: <a href="mailto:support@aiandroboticsclub.com">support@aiandroboticsclub.com</a></p></div>' +
    '<div class="prefooter-col"><div class="prefooter-title">Address</div>' +
    '<p>AI and Robotics Club</p><p>Shah Jilani Road, Near Lahore Grammer School Township</p><p>Lahore, Pakistan, 54770</p></div>' +
    '<div class="prefooter-col"><div class="prefooter-title">Legal</div>' +
    '<p><a href="/privacy-policy.html">Privacy Policy</a></p>' +
    '<p><a href="/terms.html">Terms and Conditions</a></p>' +
    '<p><a href="/shipping.html">Shipping and Returns</a></p>' +
    '<p><a href="/refund-return-exchange-policy.html">Refund, Return and Exchange</a></p>' +
    '<p><a href="/disclaimer.html">Disclaimer</a></p></div></div>' +
    '<div class="prefooter-areas"><div class="prefooter-title">Areas We Serve</div>' +
    '<div class="pf-areas-row">' +
    '<div class="pf-area-item pf-area-root" id="pf-gulf-root">' +
    '<button type="button" class="pf-area-btn" data-pf-toggle aria-expanded="false">Gulf <span class="pf-caret"></span></button>' +
    '<div class="pf-area-panel" id="pf-gulf-panel"><p class="pf-area-link" style="opacity:.7">Loading areas...</p></div></div>' +
    '<div class="pf-area-item pf-area-root" id="pf-europe-root">' +
    '<button type="button" class="pf-area-btn" data-pf-toggle aria-expanded="false">Europe <span class="pf-caret"></span></button>' +
    '<div class="pf-area-panel" id="pf-europe-panel"><p class="pf-area-link" style="opacity:.7">Loading areas...</p></div></div>' +
    '<div class="pf-area-item pf-area-root" id="pf-fareast-root">' +
    '<button type="button" class="pf-area-btn" data-pf-toggle aria-expanded="false">Far East <span class="pf-caret"></span></button>' +
    '<div class="pf-area-panel" id="pf-fareast-panel"><p class="pf-area-link" style="opacity:.7">Loading areas...</p></div></div>' +
    '</div></div>' +
    '<div class="prefooter-bottom">&copy; <span id="prefooter-year"></span> AI and Robotics Club. All rights reserved.</div></div>' +
    '<style>' + styles + '</style>';

  var target = document.getElementById("site-prefooter");
  if (target) {
    target.innerHTML = baseHtml;
  } else {
    var sticky = document.getElementById("site-footer");
    var wrap = document.createElement("div");
    wrap.id = "site-prefooter";
    wrap.innerHTML = baseHtml;
    if (sticky && sticky.parentNode) sticky.parentNode.insertBefore(wrap, sticky);
    else document.body.appendChild(wrap);
  }
  var yearEl = document.getElementById("prefooter-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function bindToggles(root) {
    (root || document).querySelectorAll("[data-pf-toggle]").forEach(function (btn) {
      if (btn.getAttribute("data-pf-bound")) return;
      btn.setAttribute("data-pf-bound", "1");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var item = btn.closest(".pf-area-item");
        if (!item) return;
        var open = !item.classList.contains("open");
        var parent = item.parentElement;
        if (parent) {
          Array.prototype.forEach.call(parent.children, function (sib) {
            if (sib !== item && sib.classList && sib.classList.contains("pf-area-item") && sib.classList.contains("open")) {
              sib.classList.remove("open");
              var b = sib.querySelector(".pf-area-btn");
              if (b) b.setAttribute("aria-expanded", "false");
            }
          });
        }
        item.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }
  bindToggles(document);

  function resolveJsonUrl(filename) {
    var url = "/" + filename;
    try {
      var scripts = document.getElementsByTagName("script");
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src && scripts[i].src.indexOf("prefooter.js") !== -1) {
          url = scripts[i].src.replace(/prefooter\.js(\?.*)?$/, filename);
          break;
        }
      }
    } catch (err) {}
    return url;
  }

  function fillNestedNav(panelId, groups, emptyMsg) {
    var keys = Object.keys(groups || {}).sort();
    var html = keys.map(function (slug) {
      var pages = groups[slug] || [];
      var links = pages.map(function (p) {
        return '<a class="pf-area-link" href="' + esc(p.href) + '">' + esc(p.label) + "</a>";
      }).join("");
      return (
        '<div class="pf-area-item">' +
        '<button type="button" class="pf-area-btn pf-area-sub" data-pf-toggle aria-expanded="false">' +
        esc(cityTitle(slug)) + ' <span class="pf-caret"></span></button>' +
        '<div class="pf-area-panel">' + links + "</div></div>"
      );
    }).join("");
    var panel = document.getElementById(panelId);
    if (panel) {
      panel.innerHTML = html || '<p class="pf-area-link">' + emptyMsg + "</p>";
      bindToggles(panel);
    }
  }

  fetch(resolveJsonUrl("gulf-nav.json"))
    .then(function (r) { return r.json(); })
    .then(function (GULF_NAV) {
      fillNestedNav("pf-gulf-panel", GULF_NAV.cities, "No city pages listed yet.");
    })
    .catch(function () {
      var panel = document.getElementById("pf-gulf-panel");
      if (panel) panel.innerHTML = '<p class="pf-area-link">Gulf areas will appear here.</p>';
    });

  fetch(resolveJsonUrl("europe-nav.json"))
    .then(function (r) { return r.json(); })
    .then(function (EU_NAV) {
      fillNestedNav("pf-europe-panel", EU_NAV.countries, "No country pages listed yet.");
    })
    .catch(function () {
      var panel = document.getElementById("pf-europe-panel");
      if (panel) panel.innerHTML = '<p class="pf-area-link">Europe areas will appear here.</p>';
    });

  fetch(resolveJsonUrl("far-east-nav.json"))
    .then(function (r) { return r.json(); })
    .then(function (FE_NAV) {
      fillNestedNav("pf-fareast-panel", FE_NAV.countries, "No country pages listed yet.");
    })
    .catch(function () {
      var panel = document.getElementById("pf-fareast-panel");
      if (panel) panel.innerHTML = '<p class="pf-area-link">Far East areas will appear here.</p>';
    });
});
