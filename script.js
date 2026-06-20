const roles = [
  "Robotics & AI Educator",
  "Researcher",
  "Content Creator"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  const currentRole = roles[roleIndex];
  typingElement.textContent = currentRole.substring(0, charIndex);

  charIndex++;

  if (charIndex > currentRole.length) {
    charIndex = 0;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, 120);
}

window.onload = typeEffect;
