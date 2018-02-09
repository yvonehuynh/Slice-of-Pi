(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var initGame = function initGame() {
    document.getElementById("start-game-button").addEventListener("click", function () {
        // on click of start game button, run the following functions
        var startGame = document.getElementById("game-start-panel");
        startGame.style.display = "none";
        var levels = document.querySelector(".level-container");
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

var nextLevel = function nextLevel(currentLevel, nextGameLevel) {
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
};

var timer = function timer() {
    var countdown = window.setInterval(function () {
        time = time - 1;
        if (time <= 0) {
            clearTimeout(countdown);
            window.setTimeout = function () {
                document.querySelector(".level-container").style.display = "none";
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
        var el = document.getElementsByClassName("next-level-panel")[0];
        el.style.display = "block";
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
        document.getElementsByClassName("level-container")[0].style.display = "none";
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
        var winningPanel = document.getElementsByClassName("next-level-panel")[0];
        winningPanel.style.display = "none";
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQU0sV0FBUyxTQUFULFFBQVMsR0FBSTtBQUNmLGFBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQUk7QUFDdkU7QUFDQSxZQUFNLFlBQVksU0FBUyxjQUFULENBQXdCLGtCQUF4QixDQUFsQjtBQUNBLGtCQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBeUIsTUFBekI7QUFDQSxZQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLGtCQUF2QixDQUFmO0FBQ0EsZUFBTyxLQUFQLENBQWEsT0FBYixHQUF1QixPQUF2QjtBQUNBLFlBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbkI7QUFDQSxtQkFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTBCLE9BQTFCO0FBQ0E7QUFDQTtBQUNBLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLENBQTlDLEVBQWlELFdBQWpELEVBQThELFdBQTlEO0FBQ0E7QUFDQSxrQkFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxFQUE5QyxFQUFrRCxXQUFsRCxFQUErRCxhQUEvRDtBQUNBO0FBQ0Esa0JBQVUsb0JBQVYsRUFBZ0MsY0FBaEMsRUFBZ0QsRUFBaEQsRUFBb0QsYUFBcEQsRUFBbUUsWUFBbkU7QUFDQTtBQUNBLGtCQUFVLG1CQUFWLEVBQStCLGNBQS9CLEVBQStDLEVBQS9DLEVBQW1ELFlBQW5ELEVBQWlFLFlBQWpFO0FBQ0E7QUFDQSxrQkFBVSxtQkFBVixFQUErQixjQUEvQixFQUErQyxHQUEvQyxFQUFvRCxZQUFwRCxFQUFrRSxXQUFsRTtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsR0FBOUMsRUFBbUQsV0FBbkQ7O0FBRUEsdUJBQWUsa0JBQWY7QUFDQSx1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QUFVO0FBQ3RFLGVBQU8sUUFBUCxDQUFnQixNQUFoQixDQUF1QixJQUF2QjtBQUNILEtBRkQ7QUFHSCxDQUpEOztBQU1BO0FBQ0EsSUFBTSxVQUFRLFNBQVIsT0FBUSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQTBEO0FBQ3BFO0FBQ0EsUUFBTSxPQUFPLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsZ0JBQVksV0FBWixFQUF5QixjQUF6QjtBQUNBLFFBQUksVUFBVSxjQUFkLEVBQThCO0FBQzFCLFlBQU0sYUFBYSxTQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQW5CO0FBQ0EsbUJBQVcsV0FBWCxHQUF5QixLQUF6QjtBQUNBLGtCQUFVLENBQVY7QUFDQSxpQkFBUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEdBQXNELE1BQXREO0FBQ0EsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0Msa0JBQWhDLEVBQW9ELENBQXBELENBQXJCO0FBQ0EscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNIO0FBQ0osQ0FiRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNvbnN0IGluaXRHYW1lPSgpPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgLy8gb24gY2xpY2sgb2Ygc3RhcnQgZ2FtZSBidXR0b24sIHJ1biB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uc1xuICAgICAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc3RhcnQtcGFuZWxcIik7XG4gICAgICAgIHN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5PSBcIm5vbmVcIjtcbiAgICAgICAgY29uc3QgbGV2ZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIik7XG4gICAgICAgIGxldmVscy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBmaXJzdExldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbC1vbmVcIik7XG4gICAgICAgIGZpcnN0TGV2ZWwuc3R5bGUuZGlzcGxheT0gXCJibG9ja1wiO1xuICAgICAgICB0aW1lcigpO1xuICAgICAgICAvLyBMZXZlbCBPbmVcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtb25lLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMVwiLCA1LCBcImxldmVsLW9uZVwiLCBcImxldmVsLXR3b1wiKTtcbiAgICAgICAgLy8gTGV2ZWwgVHdvXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXR3by1idXR0b25cIiwgXCJzY29yZS1sZXZlbDJcIiwgMjAsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4gICAgICAgIC8vIExldmVsIFRocmVlXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXRocmVlLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsM1wiLCA1MCwgXCJsZXZlbC10aHJlZVwiLCBcImxldmVsLWZvdXJcIik7XG4gICAgICAgIC8vIExldmVsIEZvdXJcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtZm91ci1idXR0b25cIiwgXCJzY29yZS1sZXZlbDRcIiwgNzAsIFwibGV2ZWwtZm91clwiLCBcImxldmVsLWZpdmVcIik7XG4gICAgICAgIC8vIExldmVsIEZpdmVcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtZml2ZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDVcIiwgMTAwLCBcImxldmVsLWZpdmVcIiwgXCJsZXZlbC1zaXhcIik7XG4gICAgICAgIC8vIExldmVsIFNpeFxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1zaXgtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWw2XCIsIDIwMSwgXCJsZXZlbC1zaXhcIik7XG5cbiAgICAgICAgc2hvd1Zpc2l0UGFuZWwoXCJsb2FkLXZpc2l0LXBhbmVsXCIpO1xuICAgICAgICBzaG93VmlzaXRQYW5lbChcInJlamVjdFwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJyZWxvYWQtZ2FtZVwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJyZWxvYWQtZ2FtZTJcIik7XG4gICAgICAgIHJlZnJlc2hQYWdlKFwicGxheS1hZ2FpblwiKTtcbiAgICB9KVxufVxuaW5pdEdhbWUoKTtcblxubGV0IHNjb3JlID0gMDtcbmxldCB0aW1lID0gMzU7XG5cblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4vLyBhZGQgYSBwb2ludFxuLy8gcHJpbnQgcG9pbnQgdG8gdGhlIHNjcmVlbiB1c2luZyBwIHRhZ2VcbmNvbnN0IHVzZXJDbGljayA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICAgICAgYWRkU2NvcmUoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgLy9uZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgICAgIC8vbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICAgICAgICAgLy8gZW5kR2FtZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwpO1xuICAgICAgICB9KTtcbn1cblxuXG4vLyAyLiBpbmNyZWFzZSBzY29yZSBhcyB1c2VyIGNsaWNrc1xuLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4vLyBzaG93IHdpbm5pbmcgcGFuZWxcbi8vIHByaW50IHNjb3JlIHRvIHBhZ2VcbmNvbnN0IGFkZFNjb3JlID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGhpZGVFbGVtZW50LCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgICAgIGlmIChzY29yZSA+IDIwMCl7XG4gICAgICAgICAgICBjb25zdCBteWVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctZ2FtZS1wYW5lbFwiKVswXTtcbiAgICAgICAgICAgIG15ZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQm9hcmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICAgICAgc2NvcmVCb2FyZDEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRpbWUgPSBOYU47XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWxldmVsLXBhbmVsXCIpWzBdO1xuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgICAgICBzY29yZSA9PT0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbi8vIGhpZGUgd2lubmluZyBwYW5lbFxuLy8gaGlkZSBwcmV2aW91cyBnYW1lIHBsYXlcbi8vIHNob3cgbmV3IGxldmVsXG5cbmNvbnN0IG5leHRMZXZlbD0oY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKT0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LW9uZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgcmVzZXRQcm9ncmVzcygpO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWxldmVsLXBhbmVsXCIpWzBdO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpO1xuICAgICAgICBjb25zdCBuZXh0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2aW91c0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KVxufVxuXG5jb25zdCB0aW1lcj0oKT0+e1xuICAgIGNvbnN0IGNvdW50ZG93biA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWUgPSB0aW1lIC0gMTtcbiAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93bik7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dD0oKT0+e1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpLnRleHRDb250ZW50ID0gYFRpbWVyOiAke3RpbWV9YDtcbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gUHJvZ3Jlc3MgQmFyXG5cbmNvbnN0IG1ha2VkeW5hbWljPShidXR0b24sIHJlcXVpcmVlZFNjb3JlKT0+e1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IHN0ZXBzaXplID0gMTAwIC8gcmVxdWlyZWVkU2NvcmU7XG4gICAgbGV0IHdpZHRoID0gcHJvZ3Jlc3Muc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyBzdGVwc2l6ZTtcbiAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gc3RlcHNpemUgPiAxMCA/IFwiWW91IG1hZGUgaXQhXCIgOiBcIm91Y2gsIG15IGZpbmdlcnJycnNcIjtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dC1sZXZlbC1wYW5lbFwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHdpZHRoICsgXCIlXCI7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gXCJQcm9ncmVzczogXCIgKyB3aWR0aDtcbiAgICB9XG59XG5cbmNvbnN0IHJlc2V0UHJvZ3Jlc3M9KCk9PntcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgaW5mby5pbm5lckhUTUwgPSBgXCJQcm9ncmVzczogMCVgO1xufVxuXG4vLyBpZiB1c2VyIGNsaWNrcyBvbiBcIm5vXCIsIHNob3cgdGhlIHZpc2l0IHBhbmVsIFxuY29uc3Qgc2hvd1Zpc2l0UGFuZWw9KGVsZW1lbnRJRCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aXNpdC1wYW5lbFwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGltZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG59XG5cbi8vIHJlZnJlc2ggdGhlIHBhZ2VcbmNvbnN0IHJlZnJlc2hQYWdlPShyZWxvYWRCdXR0b24pPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVsb2FkQnV0dG9uKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTsgXG4gICAgfSlcbn07XG5cbi8vIGVuZCBnYW1lIGZ1bmN0aW9uXG5jb25zdCBlbmRHYW1lPShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwpPT57XG4gICAgc2NvcmUrKztcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NvcmVMZXZlbDEpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICBtYWtlZHluYW1pYyhidXR0b25MZXZlbCwgcmVxdWlyZWVkU2NvcmUpO1xuICAgIGlmIChzY29yZSA9PT0gcmVxdWlyZWVkU2NvcmUpIHtcbiAgICAgICAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVswXTtcbiAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICBzY29yZSA9PT0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWxldmVsLXBhbmVsXCIpWzBdO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cbiJdfQ==
