//Select the button and message paragraph
const button =
document.getElementById("magicBtn");
const message =
document.getElementById("message");

//Add click event
button.addEventListener("click", function() {message.textContent = "🎉 You clicked the button! Welcome to JS!";
    message.style.color = "#ff6600";
    message.style.fontWeight = "bold";
});

const logo = document.querySelector(".logo");

logo.addEventListener("click", function() {
    logo.style.transform = "rotate(360deg)";
    logo.style.transition = "transform 0.6s ease";
});