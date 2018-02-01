let score = 0;
let time = 15

// 1. on click of h3 CLick Me button
    // add a point
    // print point to the screen using p tage
const userClick = (buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel, neededClicks)=>{
    document.getElementById(buttonLevel)
    .addEventListener('click', function (event) {
        addScore(scoreLevel1, requireedScore, currentLevel);
        nextLevel(currentLevel, nextGameLevel);
        makedynamic(buttonLevel, neededClicks);
        timer();
    });
}

// 2. increase score as user clicks
    // once user reaches required score,
    // show winning panel
    // print score to page
const addScore = (scoreLevel1, requireedScore, hideElement) => {
    score++;
    const para = document.getElementById(scoreLevel1);
    para.textContent = score;
    if (score === requireedScore) {
        const el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        const scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(hideElement).classList = "hide";
    }
}

// 3. on click of accept
    // hide winning panel
    // hide previous game play
    // show new level

function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
        resetProgress();
        const winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        resetProgress();
        const previousGame = document.getElementById(currentLevel);
        const nextGame = document.getElementById(nextGameLevel);
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    })
}

function timer(){
    const countdown = window.setInterval(function(){
        time--;
        if (time <= 0){
            clearInterval(countdown);
            window.setTimeout(function(){
                document.querySelector(".level-container").classList.add("hide");
                document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
            })
        }
        document.querySelector(".timer").textContent = time;
    }, 1000);
}

// Progress Bar

function makedynamic(button, neededclicks) {
    let info = document.getElementById("info");
    let progress = document.getElementById("progress");
    let stepsize = 100 / neededclicks;
    document.getElementById(button).onclick = function () {
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
}

function resetProgress(){
    let progress = document.getElementById("progress");
    let info = document.getElementById("info");
    progress.style.width = "0";
    info.innerHTML = `"Progress: 0%`;
}


// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two", 5);
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three", 15);
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four", 20);