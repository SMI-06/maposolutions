/**
 * Template Name: Nexa
 * Template URL: https://bootstrapmade.com/nexa-bootstrap-agency-template/
 * Updated: Aug 19 2025 with Bootstrap v5.3.7
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Frequently Asked Questions Toggle
   */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();

      const faqItem = toggle.closest(".faq-item");
      const plus = toggle.querySelector(".bi-plus");
      const minus = toggle.querySelector(".bi-dash");

      // Toggle faq active
      faqItem.classList.toggle("faq-active");

      // Pure JS icon toggle
      if (faqItem.classList.contains("faq-active")) {
        plus.style.display = "none";
        minus.style.display = "inline-block";
      } else {
        plus.style.display = "inline-block";
        minus.style.display = "none";
      }
    });
  });
});

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

// MY Gallery animations

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carouselTrack");
  const cards = Array.from(track.children);
  const cardCount = cards.length; // 4

  // Clone for infinite
  cards.forEach((card) => track.appendChild(card.cloneNode(true)));

  const cardWidth = 280 + 32; // width + gap
  let position = 0;
  const speed = 0.5; // pixels per frame

  function animate() {
    position += speed;

    // Seamless reset (invisible)
    if (position >= cardCount * cardWidth) {
      position = 0; // Instant reset - NO JUMP
    }

    track.style.transform = `translateX(-${position}px)`;
    requestAnimationFrame(animate);
  }

  // Start animation
  requestAnimationFrame(animate);
});

// Input Validations

const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("input", function (e) {
  // Remove all non-digits
  this.value = this.value.replace(/[^0-9]/g, "");

  // Visual feedback
  updateFeedback();
});

// ✅ 2. Paste bhi clean karega
phoneInput.addEventListener("paste", function (e) {
  e.preventDefault();
  navigator.clipboard.readText().then((text) => {
    const cleanNumber = text.replace(/[^0-9]/g, "");
    this.value = cleanNumber;
    updateFeedback();
  });
});

// ✅ 3. Keypress - Letters block
phoneInput.addEventListener("keypress", function (e) {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
});

// ✅ 4. Pakistani format auto (+92 3xx xxxxxxx)
phoneInput.addEventListener("input", function () {
  let value = this.value.replace(/[^0-9]/g, "");

  if (value.startsWith("0") && value.length > 4) {
    value = "+92" + value.slice(1);
  }
  this.value = value;
});

function updateFeedback() {
  const value = phoneInput.value.replace(/[^0-9]/g, "");

  if (value.length === 0) {
    phoneHelp.textContent = "Sirf numbers enter karein";
    phoneInput.classList.remove("is-valid", "is-invalid");
  } else if (/^\d+$/.test(value) && value.length >= 10) {
    phoneHelp.textContent = "Valid phone number!";
    phoneInput.classList.add("is-valid");
    phoneInput.classList.remove("is-invalid");
  } else {
    phoneHelp.textContent = "Minimum 10 digits required";
    phoneInput.classList.add("is-invalid");
    phoneInput.classList.remove("is-valid");
  }
}

function validatePhone() {
  const cleanNumber = phoneInput.value.replace(/[^0-9]/g, "");

  if (cleanNumber.length >= 10 && /^\d+$/.test(cleanNumber)) {
    resultDiv.innerHTML = `
      <div class="alert alert-success">
          ✅ Valid Number: <strong>${phoneInput.value}</strong>
          <br>Clean: ${cleanNumber}
      </div>`;
  } else {
    resultDiv.innerHTML = `
      <div class="alert alert-danger">
          ❌ Invalid! Sirf 10+ digits numbers allowed
      </div>`;
  }
}

// Initial feedback
updateFeedback();

// For Alphabet

document.getElementById('nameInput').onpaste = function(e) {
    e.preventDefault();
    let text = (e.clipboardData||window.clipboardData).getData('text');
    this.value = text.replace(/[^a-zA-Z\s]/g,''); }
document.getElementById('subjectInput').onpaste = function(e) {
    e.preventDefault();
    let text = (e.clipboardData||window.clipboardData).getData('text');
    this.value = text.replace(/[^a-zA-Z\s]/g,''); }