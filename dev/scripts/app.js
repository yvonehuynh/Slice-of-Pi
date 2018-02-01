let score = 0;

// 1. on click of h3 CLick Me button
    // add a point
    // print point to the screen using p tage
const userClick=(index, param1, param2, index1, index2)=>{
document.getElementsByClassName('click-button')[index]
    .addEventListener('click', function (event) {
        addScore(param1, param2);
        nextLevel(index1, index2);
    });
}

// 2. increase score as user clicks
    // once user reaches required score,
    // show winning panel
    // print score to page
const addScore = (index1, index2) => {
    score++;
    const para = document.getElementsByClassName("score")[index1];
    para.textContent = score;
    if (score === 5) {
        const el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        const scoreBoard = document.getElementsByClassName("score")[index2];
        scoreBoard.textContent = score;
        score = 0;
    }
}

// 3. on click of accept
    // hide winning panel
    // hide previous game play
    // show new level

function nextLevel(index1, index2){
    document.getElementById("accept-one").addEventListener("click", function(){
        const winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        const previousGame = document.getElementsByClassName("level-container")[index1];
        const nextGame = document.getElementsByClassName("level-container")[index2];
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    })
}


// first level
// 0 = index of h3 Click Button
// 2 = index of p score
// 0 = index of winning panel p score
userClick(0, 2, 0, 0, 1);
userClick(1, 3, 0, 1, 2);
userClick(2, 4, 0, 2, 3);
// 0 = index of current container
// 1 = index of next container
// nextLevel(0, 1);

// userClick(1, 3, 0);
// userClick(2, 4, 0);

