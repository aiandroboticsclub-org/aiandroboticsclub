/* ==========================================================================
   AI & ROBOTICS CLUB - GLOBAL HEADER (header.js)
   Dropdowns: Programs, Best Students Projects
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
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

  var programs = [
    { label: "Workshops & Courses", href: base + "programs/ai-robotics-workshops-and-courses-for-kids.html" },
    { label: "Online Courses", href: base + "programs/online-ai-and-online-robotics-courses.html" },
    { label: "Advanced Trainings", href: base + "programs/advanced-ai-and-robotics-trainings.html" },
    { label: "Competitions & Events", href: base + "programs/competitions-events.html" },
    { label: "School Partnerships", href: base + "programs/robotics-training-with-school-partnerships.html" }
  ];

  var bestProjects = [
    { label: "100 Mission Hero Journey", href: base + "best-students-projects/100-mission-hero-journey.html" },
    { label: "Components of a Robot", href: base + "best-students-projects/components-of-a-robot.html" },
    { label: "AI Course for Kids 2027", href: base + "best-students-projects/ai-course-for-kids-2027.html" }
  ];

  function dropdownHtml(title, items) {
    var links = items
      .map(function (item) {
        return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
      })
      .join("");
    return (
      '<li class="nav-item has-dropdown">' +
      '  <button type="button" class="nav-parent" aria-expanded="false" aria-haspopup="true">' +
      title +
      ' <span class="nav-caret" aria-hidden="true"></span>' +
      "  </button>" +
      '  <ul class="dropdown-menu">' +
      links +
      "  </ul>" +
      "</li>"
    );
  }

  // Favicon
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
    '    <a href="' +
    homeUrl +
    '" class="logo">' +
    '      <img src="' +
    logoUrl +
    '" alt="AI & Robotics Club" class="logo-img">' +
    '      <span class="logo-text">AI & <span>ROBOTICS CLUB</span></span>' +
    "    </a>" +
    '    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">' +
    '      <span class="hamburger"></span>' +
    "    </button>" +
    '    <nav class="nav-menu" id="navMenu">' +
    '      <ul class="nav-links">' +
    '        <li><a href="' +
    homeUrl +
    '">Home</a></li>' +
    dropdownHtml("Programs", programs) +
    dropdownHtml("Best Students Projects", bestProjects) +
    '        <li><a href="' +
    productsUrl +
    '">Products</a></li>' +
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

  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (!isOpen) {
        menu.querySelectorAll(".has-dropdown.open").forEach(function (el) {
          el.classList.remove("open");
          var btn = el.querySelector(".nav-parent");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      }
    });

    // Close mobile menu when a real link is clicked
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        menu.querySelectorAll(".has-dropdown.open").forEach(function (el) {
          el.classList.remove("open");
          var btn = el.querySelector(".nav-parent");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      });
    });
  }

  // Dropdown: click toggle (mobile + accessibility); hover works via CSS on desktop
  document.querySelectorAll(".has-dropdown").forEach(function (item) {
    var btn = item.querySelector(".nav-parent");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var willOpen = !item.classList.contains("open");
      // Close other dropdowns
      document.querySelectorAll(".has-dropdown.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          var ob = other.querySelector(".nav-parent");
          if (ob) ob.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
        var btn = el.querySelector(".nav-parent");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  });
});
