// Find the message paragraph and button elements in the HTML
const messageElement = document.getElementById("message");
const buttonElement = document.getElementById("actionBtn");

// Listen for a click event on the button
buttonElement.addEventListener("click", function () {
  // Update the text inside the message paragraph
  messageElement.textContent = "Congratulations! Your first app is working!";
});
