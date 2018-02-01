let score = 0;
let time = 5;

// 1. on click of h3 CLick Me button
    // add a point
    // print point to the screen using p tage
const userClick = (buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel)=>{
    document.getElementById(buttonLevel)
    .addEventListener('click', function (event) {
        addScore(scoreLevel1, requireedScore);
        nextLevel(currentLevel, nextGameLevel);
        timer();
    });
}

// 2. increase score as user clicks
    // once user reaches required score,
    // show winning panel
    // print score to page
const addScore = (scoreLevel1, requireedScore) => {
    score++;
    const para = document.getElementById(scoreLevel1);
    para.textContent = score;
    if (score === requireedScore) {
        const el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        const scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score = 0;
    }
}

// 3. on click of accept
    // hide winning panel
    // hide previous game play
    // show new level

function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
        const winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        const previousGame = document.getElementById(currentLevel);
        const nextGame = document.getElementById(nextGameLevel);
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    })
}

function timer(){
    const countdown = window.setInterval(function(){
        time --;
        if (time <= 0){
            clearInterval(countdown);
            document.querySelector(".level-container").classList.add("hide");
            document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
        }
        console.log(time);
    }, 1000);
}

// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three");
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four");