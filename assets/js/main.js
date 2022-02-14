/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("header__menu"),
  navToggle = document.getElementById("header__toggle"),
  navClose = document.getElementById("header__close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    console.log("open menu");
    navMenu.classList.add("open");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".header__link");

function linkAction() {
  navMenu.classList.remove("open");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsHeader = document.querySelectorAll(".skills__header"),
  skillsContent = document.getElementsByClassName(".skills__content");

function skillsAction() {
  let itemClass = this.parentNode.className;

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }

  if (itemClass === "skills__content skills__open") {
    this.parentNode.className = "skills__content skills__close";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", skillsAction);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  body = document.body;
modalCloses = document.querySelectorAll(".services__modalClose");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("modalActive");
  body.classList.add("overflow-hidden");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

let close = function (closeClick) {
  modalViews[closeClick].classList.remove("modalActive");
  body.classList.remove("overflow-hidden");
};

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener("click", () => {
    close(i);
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".header__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".header__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 20) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 500) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  console.log("button changed");
});

//change colors

// Get the root element
var r = document.querySelector(":root");
const btn = document.getElementById("btn");
const dropdownBtn = document.getElementById("color-button");
const dropdown = document.querySelector(".dropdown");
const colors = document.querySelectorAll(".btn");

dropdownBtn.addEventListener("click", function () {
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }

  console.log("added");
});

colors.forEach((color, i) => {
  color.addEventListener("click", function () {
    dropdown.classList.remove("show");
  });

  console.log("dropdown mchat");
});


// Create a function for setting a variable value
function set_green() {
  var rs = getComputedStyle(r);

  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--hue_color", 142);
  localStorage.setItem("Selected hue", rs.getPropertyValue("--hue_color"));
}

function set_blue() {
  var rs = getComputedStyle(r);

  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--hue_color", 230);
  localStorage.setItem("Selected hue", rs.getPropertyValue("--hue_color"));
}

function set_pink() {
  var rs = getComputedStyle(r);

  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--hue_color", 340);
  localStorage.setItem("Selected hue", rs.getPropertyValue("--hue_color"));
}

function set_purple() {
  var rs = getComputedStyle(r);
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--hue_color", 250);
  localStorage.setItem("Selected hue", rs.getPropertyValue("--hue_color"));
}

console.log("aaaa");
