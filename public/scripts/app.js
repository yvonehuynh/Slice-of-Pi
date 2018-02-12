(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function initGame() {
    document.getElementById("start-game-button").addEventListener("click", function () {
        // on click of start game button, run the following functions
        document.getElementById("game-start-panel").style.display = "none";
        document.querySelector(".level-container").style.display = "block";
        document.getElementById("level-one").style.display = "block";
        timer();
        // Level One
        userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
        // Level Two
        userClick("level-two-button", "score-level2", 20, "level-two", "level-three");
        // Level Three
        userClick("level-three-button", "score-level3", 50, "level-three", "level-four");
        // Level Four
        userClick("level-four-button", "score-level4", 100, "level-four", "level-five");
        // Level Five
        userClick("level-five-button", "score-level5", 100, "level-five", "level-six");
        // Level Six
        userClick("level-six-button", "score-level6", 201, "level-six");

        showVisitPanel("load-visit-panel");
        showVisitPanel("reject");
        refreshPage("reload-game");
        refreshPage("reload-game2");
        refreshPage("play-again");
    });
}
initGame();

var score = 0;
var time = 35;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel, currentLevel, nextGameLevel);
        //nextLevel(currentLevel, nextGameLevel);
        //makedynamic(buttonLevel, requireedScore);
        // endGame(buttonLevel, scoreLevel1, requireedScore, currentLevel);
    });
};

// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
var addScore = function addScore(buttonLevel, scoreLevel1, requireedScore, hideElement, currentLevel, nextGameLevel) {
    score++;
    var para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
    if (score > 200) {
        var myel = document.getElementsByClassName("winning-game-panel")[0];
        myel.style.display = "block";
        var scoreBoard1 = document.getElementsByClassName("score")[0];
        scoreBoard1.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        document.getElementsByClassName("level-container")[0].style.display = "none";
        time = NaN;
        document.querySelector(".timer").style.display = "none";
    }
    if (score === requireedScore) {
        var el = document.getElementsByClassName("next-level-panel")[0];
        el.style.display = "block";
        var scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        nextLevel(currentLevel, nextGameLevel);
    }
};

// 3. on click of accept
// hide winning panel
// hide previous game play
// show new level

function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
        resetProgress();
        score = 0;
        var winningPanel = document.getElementsByClassName("next-level-panel")[0];
        var previousGame = document.getElementById(currentLevel);
        var nextGame = document.getElementById(nextGameLevel);
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    });
}

function timer() {
    var countdown = window.setInterval(function () {
        time = time - 1;
        if (time <= 0) {
            clearTimeout(countdown);
            window.setTimeout(function () {
                document.querySelector(".level-container").style.display = "none";
                document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
            });
        }
        document.querySelector(".timer").textContent = "Timer: " + time;
    }, 1000);
}

// Progress Bar

function makedynamic(button, requireedScore) {
    var info = document.getElementById("info");
    var progress = document.getElementById("progress");
    var stepsize = 100 / requireedScore;
    var width = progress.style.width.replace("%", "");
    width = parseInt(width) + stepsize;
    if (width >= 100) {
        progress.style.width = "100%";
        info.innerHTML = stepsize > 10 ? "You made it!" : "ouch, my fingerrrrs";
        var el = document.getElementsByClassName("next-level-panel")[0];
        el.style.display = "block";
    } else {
        width = width + "%";
        progress.style.width = width;
        info.innerHTML = "Progress: " + width;
    }
}

function resetProgress() {
    var progress = document.getElementById("progress");
    var info = document.getElementById("info");
    progress.style.width = "0";
    info.innerHTML = "\"Progress: 0%";
}

// if user clicks on "no", show the visit panel 
function showVisitPanel(elementID) {
    document.getElementById(elementID).addEventListener("click", function () {
        document.getElementsByClassName("visit-panel")[0].style.display = "block";
        document.getElementsByClassName("level-container")[0].style.display = "none";
        document.getElementsByClassName("losing-panel-container")[0].style.display = "none";
        document.getElementsByClassName("timer")[0].style.display = "none";
    });
}

// refresh the page
function refreshPage(reloadButton) {
    document.getElementById(reloadButton).addEventListener("click", function () {
        window.location.reload(true);
    });
};

// end game function
function endGame(buttonLevel, scoreLevel1, requireedScore, currentLevel) {
    score++;
    var para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
    if (score === requireedScore) {
        var scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        var winningPanel = document.getElementsByClassName("next-level-panel")[0];
        winningPanel.style.display = "none";
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixhQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLGdCQUE3QyxDQUE4RCxPQUE5RCxFQUF1RSxZQUFZO0FBQy9FO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixrQkFBeEIsRUFBNEMsS0FBNUMsQ0FBa0QsT0FBbEQsR0FBNEQsTUFBNUQ7QUFDQSxpQkFBUyxhQUFULENBQXVCLGtCQUF2QixFQUEyQyxLQUEzQyxDQUFpRCxPQUFqRCxHQUEyRCxPQUEzRDtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBckMsQ0FBMkMsT0FBM0MsR0FBcUQsT0FBckQ7QUFDQTtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsQ0FBOUMsRUFBaUQsV0FBakQsRUFBOEQsV0FBOUQ7QUFDQTtBQUNBLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLEVBQTlDLEVBQWtELFdBQWxELEVBQStELGFBQS9EO0FBQ0E7QUFDQSxrQkFBVSxvQkFBVixFQUFnQyxjQUFoQyxFQUFnRCxFQUFoRCxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRTtBQUNBO0FBQ0Esa0JBQVUsbUJBQVYsRUFBK0IsY0FBL0IsRUFBK0MsR0FBL0MsRUFBb0QsWUFBcEQsRUFBa0UsWUFBbEU7QUFDQTtBQUNBLGtCQUFVLG1CQUFWLEVBQStCLGNBQS9CLEVBQStDLEdBQS9DLEVBQW9ELFlBQXBELEVBQWtFLFdBQWxFO0FBQ0E7QUFDQSxrQkFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxHQUE5QyxFQUFtRCxXQUFuRDs7QUFFQSx1QkFBZSxrQkFBZjtBQUNBLHVCQUFlLFFBQWY7QUFDQSxvQkFBWSxhQUFaO0FBQ0Esb0JBQVksY0FBWjtBQUNBLG9CQUFZLFlBQVo7QUFD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QUNBLFFBQU0sT0FBTyxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixLQUFuQjtBQUNBLGdCQUFZLFdBQVosRUFBeUIsY0FBekI7QUFDQSxRQUFJLFVBQVUsY0FBZCxFQUE4QjtBQUMxQixZQUFNLGFBQWEsU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFuQjtBQUNBLG1CQUFXLFdBQVgsR0FBeUIsS0FBekI7QUFDQSxrQkFBVSxDQUFWO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxLQUF0QyxDQUE0QyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNBLFlBQU0sZUFBZSxTQUFTLHNCQUFULENBQWdDLGtCQUFoQyxFQUFvRCxDQUFwRCxDQUFyQjtBQUNBLHFCQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsTUFBN0I7QUFDSDtBQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvbiBjbGljayBvZiBzdGFydCBnYW1lIGJ1dHRvbiwgcnVuIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1zdGFydC1wYW5lbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtb25lXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHRpbWVyKCk7XG4gICAgICAgIC8vIExldmVsIE9uZVxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1vbmUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwxXCIsIDUsIFwibGV2ZWwtb25lXCIsIFwibGV2ZWwtdHdvXCIpO1xuICAgICAgICAvLyBMZXZlbCBUd29cbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtdHdvLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMlwiLCAyMCwgXCJsZXZlbC10d29cIiwgXCJsZXZlbC10aHJlZVwiKTtcbiAgICAgICAgLy8gTGV2ZWwgVGhyZWVcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDUwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTtcbiAgICAgICAgLy8gTGV2ZWwgRm91clxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1mb3VyLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsNFwiLCAxMDAsIFwibGV2ZWwtZm91clwiLCBcImxldmVsLWZpdmVcIik7XG4gICAgICAgIC8vIExldmVsIEZpdmVcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtZml2ZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDVcIiwgMTAwLCBcImxldmVsLWZpdmVcIiwgXCJsZXZlbC1zaXhcIik7XG4gICAgICAgIC8vIExldmVsIFNpeFxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1zaXgtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWw2XCIsIDIwMSwgXCJsZXZlbC1zaXhcIik7XG5cbiAgICAgICAgc2hvd1Zpc2l0UGFuZWwoXCJsb2FkLXZpc2l0LXBhbmVsXCIpO1xuICAgICAgICBzaG93VmlzaXRQYW5lbChcInJlamVjdFwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJyZWxvYWQtZ2FtZVwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJyZWxvYWQtZ2FtZTJcIik7XG4gICAgICAgIHJlZnJlc2hQYWdlKFwicGxheS1hZ2FpblwiKTtcbiAgICB9KVxufVxuaW5pdEdhbWUoKTtcblxubGV0IHNjb3JlID0gMDtcbmxldCB0aW1lID0gMzU7XG5cblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4vLyBhZGQgYSBwb2ludFxuLy8gcHJpbnQgcG9pbnQgdG8gdGhlIHNjcmVlbiB1c2luZyBwIHRhZ2VcbmNvbnN0IHVzZXJDbGljayA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhZGRTY29yZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgICAgICAvL25leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgLy9tYWtlZHluYW1pYyhidXR0b25MZXZlbCwgcmVxdWlyZWVkU2NvcmUpO1xuICAgICAgICAgICAgLy8gZW5kR2FtZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwpO1xuICAgICAgICB9KTtcbn1cblxuXG4vLyAyLiBpbmNyZWFzZSBzY29yZSBhcyB1c2VyIGNsaWNrc1xuLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4vLyBzaG93IHdpbm5pbmcgcGFuZWxcbi8vIHByaW50IHNjb3JlIHRvIHBhZ2VcbmNvbnN0IGFkZFNjb3JlID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGhpZGVFbGVtZW50LCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwsICkgPT4ge1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICBpZiAoc2NvcmUgPiAyMDApIHtcbiAgICAgICAgY29uc3QgbXllbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLWdhbWUtcGFuZWxcIilbMF07XG4gICAgICAgIG15ZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29uc3Qgc2NvcmVCb2FyZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgIHNjb3JlQm9hcmQxLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxldmVsLWNvbnRhaW5lclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRpbWUgPSBOYU47XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtbGV2ZWwtcGFuZWxcIilbMF07XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcblxuICAgIH1cbn1cblxuLy8gMy4gb24gY2xpY2sgb2YgYWNjZXB0XG4vLyBoaWRlIHdpbm5pbmcgcGFuZWxcbi8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4vLyBzaG93IG5ldyBsZXZlbFxuXG5mdW5jdGlvbiBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dC1sZXZlbC1wYW5lbFwiKVswXTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKTtcbiAgICAgICAgY29uc3QgbmV4dEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgd2lubmluZ1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcHJldmlvdXNHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV4dEdhbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdGltZXIoKSB7XG4gICAgY29uc3QgY291bnRkb3duID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZSA9IHRpbWUgLSAxO1xuICAgICAgICBpZiAodGltZSA8PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxldmVsLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikudGV4dENvbnRlbnQgPSBgVGltZXI6ICR7dGltZX1gO1xuICAgIH0sIDEwMDApO1xufVxuXG4vLyBQcm9ncmVzcyBCYXJcblxuZnVuY3Rpb24gbWFrZWR5bmFtaWMoYnV0dG9uLCByZXF1aXJlZWRTY29yZSkge1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IHN0ZXBzaXplID0gMTAwIC8gcmVxdWlyZWVkU2NvcmU7XG4gICAgbGV0IHdpZHRoID0gcHJvZ3Jlc3Muc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyBzdGVwc2l6ZTtcbiAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gc3RlcHNpemUgPiAxMCA/IFwiWW91IG1hZGUgaXQhXCIgOiBcIm91Y2gsIG15IGZpbmdlcnJycnNcIjtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dC1sZXZlbC1wYW5lbFwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHdpZHRoICsgXCIlXCI7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gXCJQcm9ncmVzczogXCIgKyB3aWR0aDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIGluZm8uaW5uZXJIVE1MID0gYFwiUHJvZ3Jlc3M6IDAlYDtcbn1cblxuLy8gaWYgdXNlciBjbGlja3Mgb24gXCJub1wiLCBzaG93IHRoZSB2aXNpdCBwYW5lbCBcbmZ1bmN0aW9uIHNob3dWaXNpdFBhbmVsKGVsZW1lbnRJRCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpc2l0LXBhbmVsXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZXZlbC1jb250YWluZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aW1lclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbn1cblxuLy8gcmVmcmVzaCB0aGUgcGFnZVxuZnVuY3Rpb24gcmVmcmVzaFBhZ2UocmVsb2FkQnV0dG9uKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVsb2FkQnV0dG9uKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgIH0pXG59O1xuXG4vLyBlbmQgZ2FtZSBmdW5jdGlvblxuZnVuY3Rpb24gZW5kR2FtZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwpIHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgaWYgKHNjb3JlID09PSByZXF1aXJlZWRTY29yZSkge1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29uc3Qgd2lubmluZ1BhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtbGV2ZWwtcGFuZWxcIilbMF07XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSJdfQ==
