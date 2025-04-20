let score = parseInt(localStorage.getItem("score")) || 0;
let autoclickers = parseInt(localStorage.getItem("autoclickers")) || 0;
const scoreDisplay = document.getElementById("score");
const broccoli = document.getElementById("broccoli");
const explosion = document.getElementById("explosion");
const autoclickerBtn = document.getElementById("autoclicker");

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
    localStorage.setItem("score", score);
    localStorage.setItem("autoclickers", autoclickers);
    if (score >= 100) {
        autoclickerBtn.disabled = false;
    }
}

broccoli.addEventListener("click", () => {
    score++;
    updateScoreDisplay();
    explosion.style.display = "block";
    setTimeout(() => explosion.style.display = "none", 200);
});

autoclickerBtn.addEventListener("click", () => {
    if (score >= 100) {
        score -= 100;
        autoclickers++;
        updateScoreDisplay();
    }
});

setInterval(() => {
    score += autoclickers;
    updateScoreDisplay();
}, 1000);

updateScoreDisplay();
