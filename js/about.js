function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateIfVisible() {
    var aboutHeading = document.querySelector('.about-heading');
    if (isElementInViewport(aboutHeading)) {
        aboutHeading.classList.add('animate-leftToRight');
    }

    var aboutsummary = document.querySelector('.abt-summary');
    if (isElementInViewport(aboutsummary)) {
        aboutsummary.classList.add('animate-opacity');
    }

    var aboutImage = document.querySelector('.abt-image');
    if (isElementInViewport(aboutImage)) {
        aboutImage.classList.add('animate-rightToLeft');
        aboutImage.classList.add('animate-opacity');
    }

    // var aboutContent = document.querySelector('.about-content'); // Select the main element
    // var aboutContentBefore = window.getComputedStyle(aboutContent, '::before'); // Access its ::before pseudo-element
    // if (isElementInViewport(aboutContent)) {
    //     aboutContentBefore.animation = "moveUp 2.5s "; // Apply animation to the pseudo-element
    // }
}

// Run the function when the page loads
animateIfVisible();

// Run the function whenever the window is scrolled or resized
window.addEventListener('scroll', animateIfVisible);
window.addEventListener('resize', animateIfVisible);



