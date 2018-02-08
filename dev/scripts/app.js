
function initGame(){
    document.getElementById("start-game-button").addEventListener("click", function(){
        // on click of start game button, run the following functions
        document.getElementById("game-start-panel").style.display= "none";
        document.querySelector(".level-container").style.display = "block";
        document.getElementById("level-one").style.display= "block";
        timer();
        userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
        // Level Two
        userClick("level-two-button", "score-level2", 50, "level-two", "level-three");
    })
}
initGame();

let score = 0;
let time = 15


// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
const userClick = (buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel, neededClicks) => {
    document.getElementById(buttonLevel)
        .addEventListener('click', function (event) {
            addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel, currentLevel, nextGameLevel);
            //nextLevel(currentLevel, nextGameLevel);
            //makedynamic(buttonLevel, requireedScore);
        });
}


// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
const addScore = (buttonLevel, scoreLevel1, requireedScore, hideElement, currentLevel, nextGameLevel,) => {
    score++;
    const para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
    if (score === requireedScore) {
        const el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        const scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        nextLevel(currentLevel, nextGameLevel);
    }
}

// 3. on click of accept
// hide winning panel
// hide previous game play
// show new level

function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
        resetProgress();
        score = 0;
        const winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        const previousGame = document.getElementById(currentLevel);
        const nextGame = document.getElementById(nextGameLevel);
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    })
}

function timer() {
    const countdown = window.setInterval(function () {
        time = time - 1;
        if (time <= 0) {
            clearTimeout(countdown);
            window.setTimeout(function () {
                document.querySelector(".level-container").style.display = "none";
                document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
            })
        }
        document.querySelector(".timer").textContent = time;
    }, 1000);
}

// Progress Bar

function makedynamic(button, requireedScore) {
    let info = document.getElementById("info");
    let progress = document.getElementById("progress");
    let stepsize = 100 / requireedScore;
    let width = progress.style.width.replace("%", "");
    width = parseInt(width) + stepsize;
    if (width >= 100) {
        progress.style.width = "100%";
        info.innerHTML = stepsize > 10 ? "You made it!" : "ouch, my fingerrrrs";
        const el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
    } else {
        width = width + "%";
        progress.style.width = width;
        info.innerHTML = "Progress: " + width;
    }
}

function resetProgress() {
    let progress = document.getElementById("progress");
    let info = document.getElementById("info");
    progress.style.width = "0";
    info.innerHTML = `"Progress: 0%`;
}
