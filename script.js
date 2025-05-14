// Button click event
document.getElementById("magicBtn").addEventListener("click", function () {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "purple";
});

// Hover effect
document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightgreen";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightblue";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

// Double-click bonus
document.getElementById("magicBtn").addEventListener("dblclick", () => {
  alert("Secret double-click action unlocked! 🎉");
});

// Image gallery
let imgIndex = 0;
const images = [
  "https://via.placeholder.com/200?text=1",
  "https://via.placeholder.com/200?text=2",
  "https://via.placeholder.com/200?text=3"
];

function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImg").src = images[imgIndex];
}

// Tabs
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tab => tab.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@")) {
    feedback.textContent = "Invalid email format.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});
