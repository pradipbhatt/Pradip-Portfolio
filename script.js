// JavaScript to handle the toggle functionality
const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarToggle.classList.toggle('active');
});


const cuboid = document.getElementById('cuboid');

let rotationX = 0;
let rotationY = 0;

function rotateCuboid() {
  rotationX += 1; // Adjust the rotation speed as needed
  rotationY += 1; // Adjust the rotation speed as needed
  cuboid.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

setInterval(rotateCuboid, 50); // Adjust the interval for rotation speed




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
  const deleteButton = section.querySelector('.delete-button');
  const addButton = section.querySelector('.add-button');

  if (button.classList.contains('delete-button')) {
      section.style.display = 'none';
      deleteButton.style.display = 'none';
      addButton.style.display = 'block';
  } else {
      section.style.display = 'block';
      deleteButton.style.display = 'block';
      addButton.style.display = 'none';
  }
}


// Swiper JS

