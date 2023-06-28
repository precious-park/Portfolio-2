/*------sticky navbar----*/
window.onscroll = () =>{
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  };



// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
//contact section
// JavaScript
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // TODO: Implement your logic to handle the form submission
  // For example, you can send an AJAX request to a server-side script

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Display success message or perform other actions
  alert("Message sent successfully!");
});
// typing text effect 
/*document.addEventListener("DOMContentLoaded", function(event) {
  var text = "Hello, World!"; // The text you want to type
  var speed = 100; // Speed in milliseconds (lower value for faster typing)

  var container = document.getElementById("auto-type");
  var index = 0;

  function typeWriter() {
    if (index < text.length) {
      container.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});*/
const text = "Hello, hi";
const typingTextElement = document.getElementById("auto-type");
let index = 0;

function type() {
  if (index < text.length) {
    typingTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // Delay between each character, adjust as needed
  }
}

type();


