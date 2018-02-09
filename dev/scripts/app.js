let score = 0;
let time = 35;

const levels = document.getElementsByClassName("level-container")[0];
const levelForward = document.getElementsByClassName("next-level-panel")[0];
// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
const userClick = (buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel) => {
    document.getElementById(buttonLevel)
        .addEventListener('click', (event)=>{
            addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel, currentLevel, nextGameLevel);
        });
}


// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
const addScore = (buttonLevel, scoreLevel1, requireedScore, hideElement, currentLevel, nextGameLevel) => {
    score++;
    const para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
        if (score > 200){
            const myel = document.getElementsByClassName("winning-game-panel")[0];
            myel.style.display = "block";
            const scoreBoard1 = document.getElementsByClassName("score")[0];
            scoreBoard1.textContent = score;
            score === 0;
            document.getElementById(currentLevel).style.display = "none";
            levels.style.display = "none";
            time = NaN;
            document.querySelector(".timer").style.display = "none";
        }
        if (score === requireedScore) {
            levelForward.style.display = "block";
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

const nextLevel=(currentLevel, nextGameLevel)=>{
    document.getElementById("accept-one").addEventListener("click", ()=>{
        resetProgress();
        score = 0;
        const previousGame = document.getElementById(currentLevel);
        const nextGame = document.getElementById(nextGameLevel);
        levelForward.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    })
}

const timer=()=>{
    const countdown = window.setInterval(function () {
        time = time - 1;
        if (time <= 0) {
            clearTimeout(countdown);
            window.setTimeout=()=>{
                levels.style.display = "none";
                document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
            }
        }
        document.querySelector(".timer").textContent = `Timer: ${time}`;
    }, 1000);
}

// Progress Bar

const makedynamic=(button, requireedScore)=>{
    let info = document.getElementById("info");
    let progress = document.getElementById("progress");
    let stepsize = 100 / requireedScore;
    let width = progress.style.width.replace("%", "");
    width = parseInt(width) + stepsize;
    if (width >= 100) {
        progress.style.width = "100%";
        info.innerHTML = stepsize > 10 ? "You made it!" : "ouch, my fingerrrrs";
        levelForward.style.display = "block";
    } else {
        width = width + "%";
        progress.style.width = width;
        info.innerHTML = "Progress: " + width;
    }
}

const resetProgress=()=>{
    let progress = document.getElementById("progress");
    let info = document.getElementById("info");
    progress.style.width = "0";
    info.innerHTML = `"Progress: 0%`;
}

// if user clicks on "no", show the visit panel 
const showVisitPanel=(elementID)=>{
    document.getElementById(elementID).addEventListener("click", function () {
        document.getElementsByClassName("visit-panel")[0].style.display = "block";
        levels.style.display = "none";
        document.getElementsByClassName("losing-panel-container")[0].style.display = "none";
        document.getElementsByClassName("timer")[0].style.display = "none";
    })
}

// refresh the page
const refreshPage=(reloadButton)=>{
    document.getElementById(reloadButton).addEventListener("click", function(){
        window.location.reload(true); 
    })
};

// end game function
const endGame=(buttonLevel, scoreLevel1, requireedScore, currentLevel)=>{
    score++;
    const para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
    if (score === requireedScore) {
        const scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        levelForward.style.display = "none";
    }
}


const initGame = () => {
    document.getElementById("start-game-button").addEventListener("click", () => {
        // on click of start game button, run the following functions
        const startGame = document.getElementById("game-start-panel");
        startGame.style.display = "none";
        levels.style.display = "block";
        const firstLevel = document.getElementById("level-one");
        firstLevel.style.display = "block";
        timer();
        // Level One
        userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
        // Level Two
        userClick("level-two-button", "score-level2", 20, "level-two", "level-three");
        // Level Three
        userClick("level-three-button", "score-level3", 50, "level-three", "level-four");
        // Level Four
        userClick("level-four-button", "score-level4", 70, "level-four", "level-five");
        // Level Five
        userClick("level-five-button", "score-level5", 100, "level-five", "level-six");
        // Level Six
        userClick("level-six-button", "score-level6", 201, "level-six");

        showVisitPanel("load-visit-panel");
        showVisitPanel("reject");
        refreshPage("reload-game");
        refreshPage("reload-game2");
        refreshPage("play-again");
    })
}
initGame();