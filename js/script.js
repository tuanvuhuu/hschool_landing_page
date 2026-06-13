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
    ".section-head, .about-art, .about-copy, .prog-card, .event-card, .why-card, .strip-item, .contact-info, .contact-form, .tl-item"
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

  // Animated counter for hero stats
  var counters = document.querySelectorAll("[data-count]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1200;
    var start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) {
      co.observe(el);
    });
  } else {
    counters.forEach(animateCounter);
  }

  // Contact form — dán URL Google Apps Script / Formspree vào đây để gửi thật
  // VD: "https://script.google.com/macros/s/AKfycb.../exec"
  var FORM_ENDPOINT = "";

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
      var phoneOk = /^[0-9+\-\s().]{8,15}$/.test(phone);
      if (!phoneOk) {
        msg.style.color = "#e23b3b";
        msg.textContent = "Số điện thoại chưa hợp lệ. Vui lòng kiểm tra lại.";
        return;
      }

      var submitBtn = form.querySelector("button[type=submit]");
      var originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Đang gửi…";
      }
      msg.style.color = "";
      msg.textContent = "";

      var done = function (ok) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
        if (ok) {
          msg.style.color = "";
          msg.textContent =
            "Cảm ơn " + parent + "! HSchool sẽ liên hệ với bạn sớm nhất 💙";
          form.reset();
        } else {
          msg.style.color = "#e23b3b";
          msg.textContent =
            "Gửi không thành công. Vui lòng gọi 032 990 3869 để được hỗ trợ.";
        }
      };

      if (!FORM_ENDPOINT) {
        // Fallback demo khi chưa cấu hình endpoint
        setTimeout(function () { done(true); }, 400);
        return;
      }

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
      })
        .then(function (r) { done(r.ok); })
        .catch(function () { done(false); });
    });
  }
})();
