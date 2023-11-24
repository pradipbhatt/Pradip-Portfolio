// JavaScript to handle the toggle functionality
const navbarToggle = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navbarToggle.classList.toggle("active");
});


// Get references to buttons and content divs
const educationBtn = document.getElementById("educationBtn");
const experienceBtn = document.getElementById("experienceBtn");
const volunteeringBtn = document.getElementById("volunteeringBtn");
const awardBtn = document.getElementById("awardBtn");

const educationContent = document.getElementById("educationContent");
const experienceContent = document.getElementById("experienceContent");
const volunteeringContent = document.getElementById("volunteeringContent");
const awardContent = document.getElementById("awardContent");

// Add click event listeners to buttons
educationBtn.addEventListener("click", () => {
  hideAllContent();
  educationContent.style.display = "block";
});

experienceBtn.addEventListener("click", () => {
  hideAllContent();
  experienceContent.style.display = "block";
});

volunteeringBtn.addEventListener("click", () => {
  hideAllContent();
  volunteeringContent.style.display = "block";
});

awardBtn.addEventListener("click", () => {
  hideAllContent();
  awardContent.style.display = "block";
});

// Function to hide all content divs
function hideAllContent() {
  educationContent.style.display = "none";
  experienceContent.style.display = "none";
  volunteeringContent.style.display = "none";
  awardContent.style.display = "none";
}

// Initially, show the Education content
educationContent.style.display = "block";

function toggleSection(button) {
  const section = button.parentElement.parentElement;
  const deleteButton = section.querySelector(".delete-button");
  const addButton = section.querySelector(".add-button");

  if (button.classList.contains("delete-button")) {
    section.style.display = "none";
    deleteButton.style.display = "none";
    addButton.style.display = "block";
  } else {
    section.style.display = "block";
    deleteButton.style.display = "block";
    addButton.style.display = "none";
  }
}

// Swiper JS

const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const pagination = document.querySelector(".slider-pagination");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

// Create pagination buttons
for (let i = 0; i < sliderItems.length; i++) {
  const button = document.createElement("button");
  button.addEventListener("click", () => goToSlide(i));
  pagination.appendChild(button);
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;

  // Hide all slides except the active one
  sliderItems.forEach((item, index) => {
    if (index === slideIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update active class for pagination buttons
  const paginationButtons = pagination.querySelectorAll("button");
  paginationButtons.forEach((button, index) => {
    if (index === slideIndex) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Initialize the first slide
goToSlide(currentSlide);

// Add event listeners for arrow navigation
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < sliderItems.length - 1) {
    goToSlide(currentSlide + 1);
  }
});

// Swiper JS
const slidercontainer = document.querySelector(".slider-container");
document.querySelector(".slider").addEventListener("input", (e) => {
  slidercontainer.style.setProperty("--position", `${e.target.value}%`);
});



// JS for Preloader
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const modeToggleBtn = document.getElementById("modeToggleBtn");

  // Check the user's preferred mode
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setMode(prefersDarkMode);

  // Toggle between dark and light mode
  modeToggleBtn.addEventListener("click", function () {
      const isDarkMode = document.body.classList.contains("dark-mode");
      setMode(!isDarkMode);
  });

  function setMode(isDarkMode) {
      document.body.classList.toggle("dark-mode", isDarkMode);

      // Update button text based on the mode
      const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";
      modeToggleBtn.textContent = buttonText;
  }

  // Determine if it's day or night based on the current time
  function isDaytime() {
      const now = new Date();
      const hours = now.getHours();
      return hours >= 6 && hours < 18; // Assume day if between 6 AM and 6 PM
  }

  // Set initial mode based on the time of day
  setMode(isDaytime());

  // Update the theme automatically based on the time of day
  setInterval(function () {
      setMode(isDaytime());
  }, 1000 * 60 * 60); // Check every hour
});
