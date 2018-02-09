(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var score = 0;
var time = 35;

var levels = document.getElementsByClassName("level-container")[0];
var levelForward = document.getElementsByClassName("next-level-panel")[0];
// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel, currentLevel, nextGameLevel);
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
        levels.style.display = "none";
        time = NaN;
        document.querySelector(".timer").style.display = "none";
    }
    if (score === requireedScore) {
        levelForward.style.display = "block";
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

var nextLevel = function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
        resetProgress();
        score = 0;
        var previousGame = document.getElementById(currentLevel);
        var nextGame = document.getElementById(nextGameLevel);
        levelForward.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    });
};

var timer = function timer() {
    var countdown = window.setInterval(function () {
        time = time - 1;
        if (time <= 0) {
            clearTimeout(countdown);
            window.setTimeout = function () {
                levels.style.display = "none";
                document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
            };
        }
        document.querySelector(".timer").textContent = "Timer: " + time;
    }, 1000);
};

// Progress Bar

var makedynamic = function makedynamic(button, requireedScore) {
    var info = document.getElementById("info");
    var progress = document.getElementById("progress");
    var stepsize = 100 / requireedScore;
    var width = progress.style.width.replace("%", "");
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
};

var resetProgress = function resetProgress() {
    var progress = document.getElementById("progress");
    var info = document.getElementById("info");
    progress.style.width = "0";
    info.innerHTML = "\"Progress: 0%";
};

// if user clicks on "no", show the visit panel 
var showVisitPanel = function showVisitPanel(elementID) {
    document.getElementById(elementID).addEventListener("click", function () {
        document.getElementsByClassName("visit-panel")[0].style.display = "block";
        levels.style.display = "none";
        document.getElementsByClassName("losing-panel-container")[0].style.display = "none";
        document.getElementsByClassName("timer")[0].style.display = "none";
    });
};

// refresh the page
var refreshPage = function refreshPage(reloadButton) {
    document.getElementById(reloadButton).addEventListener("click", function () {
        window.location.reload(true);
    });
};

// end game function
var endGame = function endGame(buttonLevel, scoreLevel1, requireedScore, currentLevel) {
    score++;
    var para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
    if (score === requireedScore) {
        var scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        levelForward.style.display = "none";
    }
};

var initGame = function initGame() {
    document.getElementById("start-game-button").addEventListener("click", function () {
        // on click of start game button, run the following functions
        var startGame = document.getElementById("game-start-panel");
        startGame.style.display = "none";
        levels.style.display = "block";
        var firstLevel = document.getElementById("level-one");
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
    });
};
initGame();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUEsSUFBTSxTQUFTLFNBQVMsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBQWY7QUFDQSxJQUFNLGVBQWUsU0FBUyxzQkFBVCxDQUFnQyxrQkFBaEMsRUFBb0QsQ0FBcEQsQ0FBckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsY0FBM0IsRUFBMkMsWUFBM0MsRUFBeUQsYUFBekQsRUFBMkU7QUFDekYsYUFBUyxjQUFULENBQXdCLFdBQXhCLEVBQ0ssZ0JBREwsQ0FDc0IsT0FEdEIsRUFDK0IsVUFBQyxLQUFELEVBQVM7QUFDaEMsaUJBQVMsV0FBVCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxZQUFuRCxFQUFpRSxZQUFqRSxFQUErRSxhQUEvRTtBQUNILEtBSEw7QUFJSCxDQUxEOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFdBQTNDLEVBQXdELFlBQXhELEVBQXNFLGFBQXRFLEVBQXdGO0FBQ3JHO0FBQ0EsUUFBTSxPQUFPLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsZ0JBQVksV0FBWixFQUF5QixjQUF6QjtBQUNJLFFBQUksUUFBUSxHQUFaLEVBQWdCO0FBQ1osWUFBTSxPQUFPLFNBQVMsc0JBQVQsQ0FBZ0Msb0JBQWhDLEVBQXNELENBQXRELENBQWI7QUFDQSxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0EsWUFBTSxjQUFjLFNB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QixFQUErQyxFQUEvQyxFQUFtRCxZQUFuRCxFQUFpRSxZQUFqRTtBQUNBO0FBQ0Esa0JBQVUsbUJBQVYsRUFBK0IsY0FBL0IsRUFBK0MsR0FBL0MsRUFBb0QsWUFBcEQsRUFBa0UsV0FBbEU7QUFDQTtBQUNBLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLEdBQTlDLEVBQW1ELFdBQW5EOztBQUVBLHVCQUFlLGtCQUFmO0FBQ0EsdUJBQWUsUUFBZjtBQUNBLG9CQUFZLGFBQVo7QUFDQSxvQkFBWSxjQUFaO0FBQ0Esb0JBQVksWUFBWjtBQUNILEtBMUJEO0FBMkJILENBNUJEO0FBNkJBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBzY29yZSA9IDA7XG5sZXQgdGltZSA9IDM1O1xuXG5jb25zdCBsZXZlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpWzBdO1xuY29uc3QgbGV2ZWxGb3J3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtbGV2ZWwtcGFuZWxcIilbMF07XG4vLyAxLiBvbiBjbGljayBvZiBoMyBDTGljayBNZSBidXR0b25cbi8vIGFkZCBhIHBvaW50XG4vLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbkxldmVsKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgICAgICBhZGRTY29yZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIH0pO1xufVxuXG5cbi8vIDIuIGluY3JlYXNlIHNjb3JlIGFzIHVzZXIgY2xpY2tzXG4vLyBvbmNlIHVzZXIgcmVhY2hlcyByZXF1aXJlZCBzY29yZSxcbi8vIHNob3cgd2lubmluZyBwYW5lbFxuLy8gcHJpbnQgc2NvcmUgdG8gcGFnZVxuY29uc3QgYWRkU2NvcmUgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgaGlkZUVsZW1lbnQsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkgPT4ge1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICAgICAgaWYgKHNjb3JlID4gMjAwKXtcbiAgICAgICAgICAgIGNvbnN0IG15ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1nYW1lLXBhbmVsXCIpWzBdO1xuICAgICAgICAgICAgbXllbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVCb2FyZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgICAgICBzY29yZUJvYXJkMS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGxldmVscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aW1lID0gTmFOO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjb3JlID09PSByZXF1aXJlZWRTY29yZSkge1xuICAgICAgICAgICAgbGV2ZWxGb3J3YXJkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgIH1cbn1cblxuLy8gMy4gb24gY2xpY2sgb2YgYWNjZXB0XG4vLyBoaWRlIHdpbm5pbmcgcGFuZWxcbi8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4vLyBzaG93IG5ldyBsZXZlbFxuXG5jb25zdCBuZXh0TGV2ZWw9KGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1vbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIHJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpO1xuICAgICAgICBjb25zdCBuZXh0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICBsZXZlbEZvcndhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2aW91c0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KVxufVxuXG5jb25zdCB0aW1lcj0oKT0+e1xuICAgIGNvbnN0IGNvdW50ZG93biA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWUgPSB0aW1lIC0gMTtcbiAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93bik7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dD0oKT0+e1xuICAgICAgICAgICAgICAgIGxldmVscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKS50ZXh0Q29udGVudCA9IGBUaW1lcjogJHt0aW1lfWA7XG4gICAgfSwgMTAwMCk7XG59XG5cbi8vIFByb2dyZXNzIEJhclxuXG5jb25zdCBtYWtlZHluYW1pYz0oYnV0dG9uLCByZXF1aXJlZWRTY29yZSk9PntcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBzdGVwc2l6ZSA9IDEwMCAvIHJlcXVpcmVlZFNjb3JlO1xuICAgIGxldCB3aWR0aCA9IHByb2dyZXNzLnN0eWxlLndpZHRoLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xuICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgc3RlcHNpemU7XG4gICAgaWYgKHdpZHRoID49IDEwMCkge1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9IHN0ZXBzaXplID4gMTAgPyBcIllvdSBtYWRlIGl0IVwiIDogXCJvdWNoLCBteSBmaW5nZXJycnJzXCI7XG4gICAgICAgIGxldmVsRm9yd2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggKyBcIiVcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlByb2dyZXNzOiBcIiArIHdpZHRoO1xuICAgIH1cbn1cblxuY29uc3QgcmVzZXRQcm9ncmVzcz0oKT0+e1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICBpbmZvLmlubmVySFRNTCA9IGBcIlByb2dyZXNzOiAwJWA7XG59XG5cbi8vIGlmIHVzZXIgY2xpY2tzIG9uIFwibm9cIiwgc2hvdyB0aGUgdmlzaXQgcGFuZWwgXG5jb25zdCBzaG93VmlzaXRQYW5lbD0oZWxlbWVudElEKT0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpc2l0LXBhbmVsXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGxldmVscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb3NpbmctcGFuZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpbWVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxufVxuXG4vLyByZWZyZXNoIHRoZSBwYWdlXG5jb25zdCByZWZyZXNoUGFnZT0ocmVsb2FkQnV0dG9uKT0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlbG9hZEJ1dHRvbikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7IFxuICAgIH0pXG59O1xuXG4vLyBlbmQgZ2FtZSBmdW5jdGlvblxuY29uc3QgZW5kR2FtZT0oYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsKT0+e1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBsZXZlbEZvcndhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cblxuXG5jb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIG9uIGNsaWNrIG9mIHN0YXJ0IGdhbWUgYnV0dG9uLCBydW4gdGhlIGZvbGxvd2luZyBmdW5jdGlvbnNcbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXN0YXJ0LXBhbmVsXCIpO1xuICAgICAgICBzdGFydEdhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBsZXZlbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29uc3QgZmlyc3RMZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtb25lXCIpO1xuICAgICAgICBmaXJzdExldmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHRpbWVyKCk7XG4gICAgICAgIC8vIExldmVsIE9uZVxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1vbmUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwxXCIsIDUsIFwibGV2ZWwtb25lXCIsIFwibGV2ZWwtdHdvXCIpO1xuICAgICAgICAvLyBMZXZlbCBUd29cbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtdHdvLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMlwiLCAyMCwgXCJsZXZlbC10d29cIiwgXCJsZXZlbC10aHJlZVwiKTtcbiAgICAgICAgLy8gTGV2ZWwgVGhyZWVcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDUwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTtcbiAgICAgICAgLy8gTGV2ZWwgRm91clxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1mb3VyLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsNFwiLCA3MCwgXCJsZXZlbC1mb3VyXCIsIFwibGV2ZWwtZml2ZVwiKTtcbiAgICAgICAgLy8gTGV2ZWwgRml2ZVxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1maXZlLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsNVwiLCAxMDAsIFwibGV2ZWwtZml2ZVwiLCBcImxldmVsLXNpeFwiKTtcbiAgICAgICAgLy8gTGV2ZWwgU2l4XG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXNpeC1idXR0b25cIiwgXCJzY29yZS1sZXZlbDZcIiwgMjAxLCBcImxldmVsLXNpeFwiKTtcblxuICAgICAgICBzaG93VmlzaXRQYW5lbChcImxvYWQtdmlzaXQtcGFuZWxcIik7XG4gICAgICAgIHNob3dWaXNpdFBhbmVsKFwicmVqZWN0XCIpO1xuICAgICAgICByZWZyZXNoUGFnZShcInJlbG9hZC1nYW1lXCIpO1xuICAgICAgICByZWZyZXNoUGFnZShcInJlbG9hZC1nYW1lMlwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJwbGF5LWFnYWluXCIpO1xuICAgIH0pXG59XG5pbml0R2FtZSgpOyJdfQ==
