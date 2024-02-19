//Selectors
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeScoreBtn1 = document.getElementById("home-score-btn-1");
let homeScoreBtn2 = document.getElementById("home-score-btn-2");
let homeScoreBtn3 = document.getElementById("home-score-btn-3");
let homeResetBtn = document.getElementById("reset-home-score");
let guestScoreBtn1 = document.getElementById("guest-score-btn-1");
let guestScoreBtn2 = document.getElementById("guest-score-btn-2");
let guestScoreBtn3 = document.getElementById("guest-score-btn-3");
let guestResetBtn = document.getElementById("reset-guest-score");

// === Button Function - Home === \\
homeScoreBtn1.addEventListener("click", () => {
  homeScore.textContent++;
});

homeScoreBtn2.addEventListener("click", () => {
  homeScore.textContent = Number(homeScore.textContent) + 2;
});

homeScoreBtn3.addEventListener("click", () => {
  homeScore.textContent = Number(homeScore.textContent) + 3;
});

homeResetBtn.addEventListener("click", () => {
  homeScore.textContent = 0;
});
// === Button Function - Guest === \\
guestScoreBtn1.addEventListener("click", () => {
  guestScore.textContent++;
});

guestScoreBtn2.addEventListener("click", () => {
  guestScore.textContent = Number(guestScore.textContent) + 2;
});

guestScoreBtn3.addEventListener("click", () => {
  guestScore.textContent = Number(guestScore.textContent) + 3;
});

guestResetBtn.addEventListener("click", () => {
  guestScore.textContent = 0;
});
