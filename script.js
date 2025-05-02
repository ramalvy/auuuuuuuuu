let currentSlide = 1;

function nextSlide() {
  document.getElementById(`slide${currentSlide}`).classList.remove("active");
  currentSlide++;
  document.getElementById(`slide${currentSlide}`).classList.add("active");
}

function showMessage() {
  document.querySelector("#slide2 .hidden-msg").style.display = "block";
}

function showGift() {
  nextSlide();
  document.querySelector(".gift").style.display = "block";
  startConfetti();
}

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    speed: Math.random() * 3 + 2,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.y += c.speed;
    if (c.y > canvas.height) c.y = 0;
  });
}

function startConfetti() {
  setInterval(() => {
    drawConfetti();
    updateConfetti();
  }, 20);
}