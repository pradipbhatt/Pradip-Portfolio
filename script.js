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

