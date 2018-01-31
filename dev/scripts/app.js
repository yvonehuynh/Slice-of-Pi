let score = 0;

// 1. on click of h3 CLick Me button
    // add a point
    // print point to the screen using p tage
const userClick=(index)=>{
document.getElementsByClassName('click-button')[index]
    .addEventListener('click', function (event) {
        addScore();
    });
}

// 2. increase score as user clicks
    // once user reaches required score,
    // show winning panel
    // print score to page
const addScore = () => {
    score++;
    const para = document.getElementsByClassName("score")[2];
    para.textContent = score;
    if (score === 5) {
        const el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        const scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
    }
}

// 3. on click of accept
    // hide winning panel
    // hide previous game play
    // show new level

function nextLevel(e){
    document.getElementById("accept-one").addEventListener("click", function(){
        const winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        const previousGame = document.getElementById("level-one");
        const nextGame = document.getElementById("level-two");
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    })
}

nextLevel();

userClick(0);


