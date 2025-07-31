document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").innerText = "Thank you! Your message has been received.";
  this.reset();
});
