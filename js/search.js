function search() {
  var keyword = document.getElementById("searchInput").value.toLowerCase();
  var divElement = document.getElementById(keyword);
  // Get the value entered in the search input
  var query = document.getElementById('searchInput').value.toLowerCase();

  // Define a mapping of keywords to page URLs within the same website
  var keywordMap = {
      'contact': '/contact.html',
      'feedback': '/feedback_form.html',
      'gallery': '/OurGallery.html',
      'mining': '/mining.html',
      'quality': '/quality.html',
      'quality assurance': '/quality.html',
      'quartz': '/Quartz.html',
      'feldspar': '/Feldspar.html',
      'ramming mass': '/Ramming-mass.html',
      'silica sand': '/silicasand.html',
      'dolomite': '/Dolomite.html',
      'home': '/index.html',
      'product': '/index.html#product',
      'faqs': '/index.html#faq',
      'faq': '/index.html#faq',
      'location': '/contact.html',
      'processing': '/processing.html',
      'about': '/AboutUs.html',
      'vision': '/AboutUs.html',
      'mission': '/AboutUs.html',
      'about us': '/AboutUs.html'
      
      // Add more keywords and page URLs as needed
  };
  // Check if the entered query matches any keyword in the mapping
  if (divElement) {
    // Scroll to the div
    divElement.scrollIntoView({ behavior: "smooth" });
  }
  else if (query in keywordMap) {
      // Redirect to the corresponding page URL
      window.location.href = keywordMap[query];
  }
  else if(!(query in keywordMap) && !(divElement)){
    alert('No matching keyword found!');
  }
}
var form = document.getElementById("valueForm");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the value from the input field
    var value = document.getElementById("searchInput").value;
    
    // Process the value (for example, log it to the console)
    console.log("Submitted value:", value);
    
    // You can add additional code here to handle the submitted value
  });

  // Alternative: Listen for key press events in the input field
  document.getElementById("searchInput").addEventListener("keyup", function(event) {
    // Check if the Enter key (key code 13) was pressed
    if (event.keyCode === 13) {
      // Trigger the form submission
      form.dispatchEvent(new Event("submit"));
    }
  });

