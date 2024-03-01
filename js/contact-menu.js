function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateIfVisible() {
  var contactMenu = document.querySelector(".contact-menu");
  var contactMenuHeading = document.querySelector(".contact-menu-heading");
  var contactMenuPara = document.querySelector(".contact-menu-para");
  var contactMenuBtn = document.querySelector(".contact-menu-btn");

  if (isElementInViewport(contactMenu)) {
      contactMenu.style.animation = "rightToleft .7s linear, opacity both";
  }

  if (isElementInViewport(contactMenuHeading)) {
    contactMenuHeading.style.animation = "leftToright .7s .7s linear, opacity .6s .7s both";
  }

  if (isElementInViewport(contactMenuPara)) {
    contactMenuPara.style.animation = "rightToleft .7s .7s linear, opacity .6s .7s both";
  }

  if (isElementInViewport(contactMenuBtn)) {
    contactMenuBtn.style.animation = "opacity .7s both";
  }
}

// Run the function when the page loads
animateIfVisible();

// Run the function whenever the window is scrolled or resized
window.addEventListener("scroll", animateIfVisible);
window.addEventListener("resize", animateIfVisible);
