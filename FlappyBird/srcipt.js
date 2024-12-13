// 1. check if bird is inside hole
// 2. render walls from right to left
// 3. add controls on screen
// 4. manage score

const bestScore = localStorage.getItem("b-score");
const bScoreCard = document.querySelector("#b-score");
const cScoreCard = document.querySelector("#c-score");
const BScoreContainer = document.querySelector(".score-card");
if (!bestScore) {
  localStorage.setItem("b-score", 0);
} else {
  bScoreCard.innerHTML = bestScore;
}
const game = document.querySelector(".game");
const hole = document.querySelector(".hole");
const bird = document.querySelector(".bird");
const wall = document.querySelector(".wall");
const startElement = document.querySelector(".start");
let GameStart = false;
let holeRandomPadding;
let holeAutoPaddingInterval;
let birdFallingInterval;
let pad = 50;
let left = 100;
let jumping = 0;
let score = 0;
game.addEventListener("click", (e) => {
  if (!GameStart) {
    Start();
    GameStart = true;
  } else {
    console.log("Up");
    pad = Math.max(pad - 10, 0);
    bird.style.top = pad + "%";
    jumping = 1;
    bird.style.rotate = "-20deg";
    check();
    setTimeout(() => {
      jumping = 0;
      bird.style.rotate = "0deg";
    }, 800);
  }
});
document.addEventListener("keydown", (e) => {
  if (!GameStart) {
    Start();
    GameStart = true;
  }
  if (e.code === "Space") {
    console.log("Up");
    pad = Math.max(pad - 10, 0);
    bird.style.top = pad + "%";
    jumping = 1;
    bird.style.rotate = "-20deg";
    check();
    setTimeout(() => {
      jumping = 0;
      bird.style.rotate = "0deg";
    }, 800);
  }
});

function check() {
  let x1 = bird.getBoundingClientRect().x;
  let x2 = hole.getBoundingClientRect().x;
  if (x2 - x1 < 20 && x2 - x1 > 0) {
    let t1 = bird.getBoundingClientRect().top;
    let b1 = bird.getBoundingClientRect().bottom;
    let t2 = hole.getBoundingClientRect().top;
    let b2 = hole.getBoundingClientRect().bottom;
    console.log(t1 - t2, b2 - b1);
    if (t1 - t2 > 0 && b2 - b1 > 0) {
      console.log("inside");
      score += 1;
      cScoreCard.innerHTML = score;
    } else {
      Stop();
    }
  } else {
    console.log(x2 - x1);
  }
}
function Start() {
  cScoreCard.style.opacity = 1;
  cScoreCard.innerHTML = 0;
  wall.style.paddingTop = holeRandomPadding + "%";
  wall.classList.add("moving-wall");
  startElement.classList.remove("slide-down");
  BScoreContainer.classList.remove("slide-down");
  // animate wall render
  holeAutoPaddingInterval = setInterval(function () {
    holeRandomPadding = Math.floor(Math.random() * 90);
    wall.style.paddingTop = holeRandomPadding + "%";
  }, 3000);
  birdFallingInterval = setInterval(() => {
    check();
    if (jumping == 0) {
      pad = Math.min(90, pad + 3);
      bird.style.top = pad + "%";
      bird.style.rotate = "20deg";
    }
  }, 100);
}
function Stop() {
  if (score > bestScore) {
    localStorage.setItem("b-score", score);
    bScoreCard.innerHTML = score;
  }
  score = 0;

  wall.classList.remove("moving-wall");
  bird.style.top = "50%";
  GameStart = false;
  startElement.classList.add("slide-down");
  BScoreContainer.classList.add("slide-down");
  if (holeAutoPaddingInterval) clearInterval(holeAutoPaddingInterval);
  if (birdFallingInterval) {
    bird.style.rotate = "0deg";
    clearInterval(birdFallingInterval);
  }
}
// Start();
