      // Get the button
      let mybutton = document.getElementById("mytopBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "flex";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      //color reset

      // document.addEventListener("DOMContentLoaded", function () {
      //   var myButton = document.getElementById("mytopBtn");

      mybutton.addEventListener("click", function () {
        // Add the 'clicked' class to the button
        mybutton.classList.add("clicked");

        // Reset the color after a certain delay (you can adjust the delay as needed)
        setTimeout(function () {
          mybutton.classList.remove("clicked");
        }, 1000);
      });
      // });
      
      
      const soraHead = document.getElementById("sora-heading");
soraHead.addEventListener("click", () => {
  window.location.href = "/";
});