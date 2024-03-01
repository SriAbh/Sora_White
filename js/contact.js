

const animatedCard = document.getElementById("animatedCard");
const icon1 = document.querySelector(".contact-icon-1");
const icon2 = document.querySelector(".contact-icon-2");

icon1.style.display = "none";
let isAnimating = false;

animatedCard.addEventListener("click", function () {
  if (!isAnimating) {
    isAnimating = true;
    if (!this.classList.contains("animate-1")) {
      this.classList.remove("animate-2");
      this.classList.add("animate-1");

      // Display icon-1 and hide icon-2
      icon1.style.display = "block";

      icon2.style.display = "none";
    } else {
      this.classList.remove("animate-1");
      this.classList.add("animate-2");

      // Display icon-2 and hide icon-1
      icon2.style.display = "block";

      icon1.style.display = "none";
    }

    setTimeout(() => {
      isAnimating = false;
    }, 2000); // Adjust this value to match the duration of your animation
  }
});
