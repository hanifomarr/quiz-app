const finalScore = document.getElementById("finalScore");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const recentScore = localStorage.getItem("recentScore");
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

const MAX_HIGHSCORE = 5;

finalScore.innerText = recentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Save button clicked");
    e.preventDefault();

    const score = {
        score: recentScore,
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(MAX_HIGHSCORE);

    localStorage.setItem("highscores", JSON.stringify(highScores));

    return window.location.assign("./index.html");

    console.log(highScores);
};