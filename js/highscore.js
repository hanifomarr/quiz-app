const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

highScoreList.innerHTML = highScores.map(score => {
return `<li class="high-score-item">${score.name} - ${score.score}</li>`;
}).join("");

console.log(highScores)