/* ==========================================================================
   AI & ROBOTICS CLUB - GLOBAL HEADER (header.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Resolve site root from this script's location (works from / and /gulf/ etc.)
  var base = "";
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src && scripts[i].src.indexOf("header.js") !== -1) {
      base = scripts[i].src.replace(/header\.js(\?.*)?$/, "");
      break;
    }
  }

  var logoUrl = base + "images/airlogo.webp";
  var homeUrl = base + "index.html";
  var productsUrl = base + "products.html";
  var programsUrl = base + "programs/ai-robotics-workshops-and-courses-for-kids.html";
  var bestProjectsUrl = base + "best-students-projects/100-mission-hero-journey.html";

  // Set site favicon
  var existingFavicon = document.querySelector('link[rel="icon"]');
  if (!existingFavicon) {
    var favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/webp";
    favicon.href = logoUrl;
    document.head.appendChild(favicon);
  } else {
    existingFavicon.href = logoUrl;
  }

  var appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (!appleIcon) {
    appleIcon = document.createElement("link");
    appleIcon.rel = "apple-touch-icon";
    document.head.appendChild(appleIcon);
  }
  appleIcon.href = logoUrl;

  var headerHTML =
    '<header class="navbar">' +
    '  <div class="container nav-container">' +
    '    <a href="' + homeUrl + '" class="logo">' +
    '      <img src="' + logoUrl + '" alt="AI & Robotics Club" class="logo-img">' +
    '      <span class="logo-text">AI & <span>ROBOTICS CLUB</span></span>' +
    "    </a>" +
    '    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">' +
    '      <span class="hamburger"></span>' +
    "    </button>" +
    '    <nav class="nav-menu" id="navMenu">' +
    '      <ul class="nav-links">' +
    '        <li><a href="' + homeUrl + '">Home</a></li>' +
    '        <li><a href="' + programsUrl + '">Programs</a></li>' +
    '        <li><a href="' + bestProjectsUrl + '">Best Students Projects</a></li>' +
    '        <li><a href="' + productsUrl + '">Products</a></li>' +
    "      </ul>" +
    "    </nav>" +
    "  </div>" +
    "</header>";

  var siteHeader = document.getElementById("site-header");
  if (siteHeader) {
    siteHeader.innerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  // Mobile menu toggle
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
