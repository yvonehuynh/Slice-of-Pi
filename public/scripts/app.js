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
        userClick("level-one-button", "score-level1", 1, "level-one", "level-two");
        // Level Two
        userClick("level-two-button", "score-level2", 1, "level-two", "level-three");
        // Level Three
        userClick("level-three-button", "score-level3", 1, "level-three", "level-four");
        // Level Four
        userClick("level-four-button", "score-level4", 1, "level-four", "level-five");
        // Level Five
        userClick("level-five-button", "score-level5", 1, "level-five", "level-six");
        // Level Six
        // endGame("level-six-button", "score-level6", 10, "level-six");

        userClick("level-six-button", "score-level6", 7, "level-six");

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
    if (score > 6) {
        var myel = document.getElementsByClassName("win-game-panel")[0];
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
        var el = document.getElementsByClassName("winning-panel-container")[0];
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
        var winningPanel = document.getElementsByClassName("winning-panel-container")[0];
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
        document.querySelector(".timer").textContent = time;
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
        var el = document.getElementsByClassName("winning-panel-container")[0];
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
        var winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        winningPanel.style.display = "none";
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsUUFBVCxHQUFtQjtBQUNmLGFBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQVU7QUFDN0U7QUFDQSxpQkFBUyxjQUFULENBQXdCLGtCQUF4QixFQUE0QyxLQUE1QyxDQUFrRCxPQUFsRCxHQUEyRCxNQUEzRDtBQUNBLGlCQUFTLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTNDLENBQWlELE9BQWpELEdBQTJELE9BQTNEO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFyQyxDQUEyQyxPQUEzQyxHQUFvRCxPQUFwRDtBQUNBO0FBQ0E7QUFDQSxrQkFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxDQUE5QyxFQUFpRCxXQUFqRCxFQUE4RCxXQUE5RDtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsQ0FBOUMsRUFBaUQsV0FBakQsRUFBOEQsYUFBOUQ7QUFDQTtBQUNBLGtCQUFVLG9CQUFWLEVBQWdDLGNBQWhDLEVBQWdELENBQWhELEVBQW1ELGFBQW5ELEVBQWtFLFlBQWxFO0FBQ0E7QUFDQSxrQkFBVSxtQkFBVixFQUErQixjQUEvQixFQUErQyxDQUEvQyxFQUFrRCxZQUFsRCxFQUFnRSxZQUFoRTtBQUNBO0FBQ0Esa0JBQVUsbUJBQVYsRUFBK0IsY0FBL0IsRUFBK0MsQ0FBL0MsRUFBa0QsWUFBbEQsRUFBZ0UsV0FBaEU7QUFDQTtBQUNEOztBQUVDLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLENBQTlDLEVBQWlELFdBQWpEOztBQUVBLHVCQUFlLGtCQUFmO0FBQ0EsdUJBQWUsUUFBZjtBQUNBLG9CQUFZLGFBQVo7QUFDQSxvQkFBWSxjQUFaO0FBQ0Esb0JBQVksWUFB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cEU7QUFDQSxRQUFNLE9BQU8sU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxnQkFBWSxXQUFaLEVBQXlCLGNBQXpCO0FBQ0EsUUFBSSxVQUFVLGNBQWQsRUFBOEI7QUFDMUIsWUFBTSxhQUFhLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBbkI7QUFDQSxtQkFBVyxXQUFYLEdBQXlCLEtBQXpCO0FBQ0Esa0JBQVUsQ0FBVjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsTUFBdEQ7QUFDQSxZQUFNLGVBQWUsU0FBUyxzQkFBVCxDQUFnQyx5QkFBaEMsRUFBMkQsQ0FBM0QsQ0FBckI7QUFDQSxxQkFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0g7QUFDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmZ1bmN0aW9uIGluaXRHYW1lKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gb24gY2xpY2sgb2Ygc3RhcnQgZ2FtZSBidXR0b24sIHJ1biB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc3RhcnQtcGFuZWxcIikuc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtb25lXCIpLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIjtcbiAgICAgICAgdGltZXIoKTtcbiAgICAgICAgLy8gTGV2ZWwgT25lXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgMSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4gICAgICAgIC8vIExldmVsIFR3b1xuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC10d28tYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwyXCIsIDEsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4gICAgICAgIC8vIExldmVsIFRocmVlXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXRocmVlLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsM1wiLCAxLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTtcbiAgICAgICAgLy8gTGV2ZWwgRm91clxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1mb3VyLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsNFwiLCAxLCBcImxldmVsLWZvdXJcIiwgXCJsZXZlbC1maXZlXCIpO1xuICAgICAgICAvLyBMZXZlbCBGaXZlXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLWZpdmUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWw1XCIsIDEsIFwibGV2ZWwtZml2ZVwiLCBcImxldmVsLXNpeFwiKTtcbiAgICAgICAgLy8gTGV2ZWwgU2l4XG4gICAgICAgLy8gZW5kR2FtZShcImxldmVsLXNpeC1idXR0b25cIiwgXCJzY29yZS1sZXZlbDZcIiwgMTAsIFwibGV2ZWwtc2l4XCIpO1xuXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXNpeC1idXR0b25cIiwgXCJzY29yZS1sZXZlbDZcIiwgNywgXCJsZXZlbC1zaXhcIik7XG5cbiAgICAgICAgc2hvd1Zpc2l0UGFuZWwoXCJsb2FkLXZpc2l0LXBhbmVsXCIpO1xuICAgICAgICBzaG93VmlzaXRQYW5lbChcInJlamVjdFwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJyZWxvYWQtZ2FtZVwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJyZWxvYWQtZ2FtZTJcIik7XG4gICAgICAgIHJlZnJlc2hQYWdlKFwicGxheS1hZ2FpblwiKTtcbiAgICB9KVxufVxuaW5pdEdhbWUoKTtcblxubGV0IHNjb3JlID0gMDtcbmxldCB0aW1lID0gMzU7XG5cblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4vLyBhZGQgYSBwb2ludFxuLy8gcHJpbnQgcG9pbnQgdG8gdGhlIHNjcmVlbiB1c2luZyBwIHRhZ2VcbmNvbnN0IHVzZXJDbGljayA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhZGRTY29yZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgICAgICAvL25leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgLy9tYWtlZHluYW1pYyhidXR0b25MZXZlbCwgcmVxdWlyZWVkU2NvcmUpO1xuICAgICAgICAgICAvLyBlbmRHYW1lKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIH0pO1xufVxuXG5cbi8vIDIuIGluY3JlYXNlIHNjb3JlIGFzIHVzZXIgY2xpY2tzXG4vLyBvbmNlIHVzZXIgcmVhY2hlcyByZXF1aXJlZCBzY29yZSxcbi8vIHNob3cgd2lubmluZyBwYW5lbFxuLy8gcHJpbnQgc2NvcmUgdG8gcGFnZVxuY29uc3QgYWRkU2NvcmUgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgaGlkZUVsZW1lbnQsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCwpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgICAgIGlmIChzY29yZSA+IDYpe1xuICAgICAgICAgICAgY29uc3QgbXllbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW4tZ2FtZS1wYW5lbFwiKVswXTtcbiAgICAgICAgICAgIG15ZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQm9hcmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICAgICAgc2NvcmVCb2FyZDEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRpbWUgPSBOYU47XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICBcbiAgICB9XG59XG5cbi8vIDMuIG9uIGNsaWNrIG9mIGFjY2VwdFxuLy8gaGlkZSB3aW5uaW5nIHBhbmVsXG4vLyBoaWRlIHByZXZpb3VzIGdhbWUgcGxheVxuLy8gc2hvdyBuZXcgbGV2ZWxcblxuZnVuY3Rpb24gbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LW9uZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNldFByb2dyZXNzKCk7XG4gICAgICAgIHNjb3JlID0gMDtcbiAgICAgICAgY29uc3Qgd2lubmluZ1BhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpO1xuICAgICAgICBjb25zdCBuZXh0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2aW91c0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0aW1lcigpIHtcbiAgICBjb25zdCBjb3VudGRvd24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW1lID0gdGltZSAtIDE7XG4gICAgICAgIGlmICh0aW1lIDw9IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd24pO1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKS50ZXh0Q29udGVudCA9IHRpbWU7XG4gICAgfSwgMTAwMCk7XG59XG5cbi8vIFByb2dyZXNzIEJhclxuXG5mdW5jdGlvbiBtYWtlZHluYW1pYyhidXR0b24sIHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgc3RlcHNpemUgPSAxMDAgLyByZXF1aXJlZWRTY29yZTtcbiAgICBsZXQgd2lkdGggPSBwcm9ncmVzcy5zdHlsZS53aWR0aC5yZXBsYWNlKFwiJVwiLCBcIlwiKTtcbiAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKSArIHN0ZXBzaXplO1xuICAgIGlmICh3aWR0aCA+PSAxMDApIHtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBzdGVwc2l6ZSA+IDEwID8gXCJZb3UgbWFkZSBpdCFcIiA6IFwib3VjaCwgbXkgZmluZ2VycnJyc1wiO1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHdpZHRoICsgXCIlXCI7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gXCJQcm9ncmVzczogXCIgKyB3aWR0aDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIGluZm8uaW5uZXJIVE1MID0gYFwiUHJvZ3Jlc3M6IDAlYDtcbn1cblxuLy8gaWYgdXNlciBjbGlja3Mgb24gXCJub1wiLCBzaG93IHRoZSB2aXNpdCBwYW5lbCBcbmZ1bmN0aW9uIHNob3dWaXNpdFBhbmVsKGVsZW1lbnRJRCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpc2l0LXBhbmVsXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZXZlbC1jb250YWluZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aW1lclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbn1cblxuLy8gcmVmcmVzaCB0aGUgcGFnZVxuZnVuY3Rpb24gcmVmcmVzaFBhZ2UocmVsb2FkQnV0dG9uKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZWxvYWRCdXR0b24pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpOyBcbiAgICB9KVxufTtcblxuLy8gZW5kIGdhbWUgZnVuY3Rpb25cbmZ1bmN0aW9uIGVuZEdhbWUoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsKXtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgaWYgKHNjb3JlID09PSByZXF1aXJlZWRTY29yZSkge1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29uc3Qgd2lubmluZ1BhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cbiJdfQ==
