// ===== HSchool landing page interactions =====
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Current year in footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Scroll reveal animation
  var revealTargets = document.querySelectorAll(
    ".section-head, .about-art, .about-copy, .prog-card, .event-card, .why-card, .strip-item, .contact-info, .contact-form"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // Contact form (front-end demo handling)
  var form = document.getElementById("contactForm");
  var msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var parent = form.parent.value.trim();
      var phone = form.phone.value.trim();
      if (!parent || !phone) {
        msg.style.color = "#e23b3b";
        msg.textContent = "Vui lòng nhập họ tên và số điện thoại.";
        return;
      }
      msg.style.color = "";
      msg.textContent =
        "Cảm ơn " + parent + "! HSchool sẽ liên hệ với bạn sớm nhất 💙";
      form.reset();
    });
  }
})();
