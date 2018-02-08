(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function initGame() {
    document.getElementById("start-game-button").addEventListener("click", function () {
        // on click of start game button, run the following functions
        document.getElementById("game-start-panel").style.display = "none";
        document.querySelector(".level-container").style.display = "block";
        document.getElementById("level-one").style.display = "block";
        timer();
        userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
        // Level Two
        userClick("level-two-button", "score-level2", 50, "level-two", "level-three");
        showVisitPanel();
    });
}
initGame();

var score = 0;
var time = 5;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel, neededClicks) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel, currentLevel, nextGameLevel);
        //nextLevel(currentLevel, nextGameLevel);
        //makedynamic(buttonLevel, requireedScore);
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
function showVisitPanel() {
    document.getElementById("load-visit-panel").addEventListener("click", function () {
        document.getElementsByClassName("visit-panel")[0].style.display = "block";
        document.getElementsByClassName("level-container")[0].style.display = "none";
        document.getElementsByClassName("losing-panel-container")[0].style.display = "none";
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsUUFBVCxHQUFtQjtBQUNmLGFBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQVU7QUFDN0U7QUFDQSxpQkFBUyxjQUFULENBQXdCLGtCQUF4QixFQUE0QyxLQUE1QyxDQUFrRCxPQUFsRCxHQUEyRCxNQUEzRDtBQUNBLGlCQUFTLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTNDLENBQWlELE9BQWpELEdBQTJELE9BQTNEO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFyQyxDQUEyQyxPQUEzQyxHQUFvRCxPQUFwRDtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsQ0FBOUMsRUFBaUQsV0FBakQsRUFBOEQsV0FBOUQ7QUFDQTtBQUNBLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLEVBQTlDLEVBQWtELFdBQWxELEVBQStELGFBQS9EO0FBQ0E7QUFDSCxLQVZEO0FBV0g7QUFDRDs7QUFFQSxJQUFJLFFBQVEsQ0FBWjtBQUNBLElBQUksT0FBTyxDQUFYOztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixjQUEzQixFQUEyQyxZQUEzQyxFQUF5RCxhQUF6RCxFQUF3RSxZQUF4RSxFQUF5RjtBQUN2RyxhQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFDSyxnQkFETCxDQUNzQixPQUR0QixFQUMrQixVQUFVLEtBQVYsRUFBaUI7QUFDeEMsaUJBQVMsV0FBVCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxZQUFuRCxFQUFpRSxZQUFqRSxFQUErRSxhQUEvRTtBQUNBO0FBQ0E7QUFDSCxLQUxMO0FBTUgsQ0FQ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QWhDLEVBQTJELENBQTNELENBQVg7QUFDQSxXQUFHLEtBQUgsQ0FBUyxPQUFULEdBQW1CLE9BQW5CO0FBQ0gsS0FMRCxNQUtPO0FBQ0gsZ0JBQVEsUUFBUSxHQUFoQjtBQUNBLGlCQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLEtBQXZCO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLGVBQWUsS0FBaEM7QUFDSDtBQUNKOztBQUVELFNBQVMsYUFBVCxHQUF5QjtBQUNyQixRQUFJLFdBQVcsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxRQUFJLE9BQU8sU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQVg7QUFDQSxhQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLEdBQXZCO0FBQ0EsU0FBSyxTQUFMO0FBQ0g7O0FBRUQ7QUFDQSxTQUFTLGNBQVQsR0FBeUI7QUFDckIsYUFBUyxjQUFULENBQXdCLGtCQUF4QixFQUE0QyxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBVTtBQUM1RSxpQkFBUyxzQkFBVCxDQUFnQyxhQUFoQyxFQUErQyxDQUEvQyxFQUFrRCxLQUFsRCxDQUF3RCxPQUF4RCxHQUFrRSxPQUFsRTtBQUNBLGlCQUFTLHNCQUFULENBQWdDLGlCQUFoQyxFQUFtRCxDQUFuRCxFQUFzRCxLQUF0RCxDQUE0RCxPQUE1RCxHQUFzRSxNQUF0RTtBQUNBLGlCQUFTLHNCQUFULENBQWdDLHdCQUFoQyxFQUEwRCxDQUExRCxFQUE2RCxLQUE3RCxDQUFtRSxPQUFuRSxHQUE2RSxNQUE3RTtBQUNILEtBSkQ7QUFLSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmZ1bmN0aW9uIGluaXRHYW1lKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gb24gY2xpY2sgb2Ygc3RhcnQgZ2FtZSBidXR0b24sIHJ1biB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc3RhcnQtcGFuZWxcIikuc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtb25lXCIpLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIjtcbiAgICAgICAgdGltZXIoKTtcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtb25lLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMVwiLCA1LCBcImxldmVsLW9uZVwiLCBcImxldmVsLXR3b1wiKTtcbiAgICAgICAgLy8gTGV2ZWwgVHdvXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXR3by1idXR0b25cIiwgXCJzY29yZS1sZXZlbDJcIiwgNTAsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4gICAgICAgIHNob3dWaXNpdFBhbmVsKCk7XG4gICAgfSlcbn1cbmluaXRHYW1lKCk7XG5cbmxldCBzY29yZSA9IDA7XG5sZXQgdGltZSA9IDU7XG5cblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4vLyBhZGQgYSBwb2ludFxuLy8gcHJpbnQgcG9pbnQgdG8gdGhlIHNjcmVlbiB1c2luZyBwIHRhZ2VcbmNvbnN0IHVzZXJDbGljayA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwsIG5lZWRlZENsaWNrcykgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbkxldmVsKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFkZFNjb3JlKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgICAgIC8vbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgICAgICAvL21ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgICAgIH0pO1xufVxuXG5cbi8vIDIuIGluY3JlYXNlIHNjb3JlIGFzIHVzZXIgY2xpY2tzXG4vLyBvbmNlIHVzZXIgcmVhY2hlcyByZXF1aXJlZCBzY29yZSxcbi8vIHNob3cgd2lubmluZyBwYW5lbFxuLy8gcHJpbnQgc2NvcmUgdG8gcGFnZVxuY29uc3QgYWRkU2NvcmUgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgaGlkZUVsZW1lbnQsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCwpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgaWYgKHNjb3JlID09PSByZXF1aXJlZWRTY29yZSkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVswXTtcbiAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICBzY29yZSA9PT0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgIH1cbn1cblxuLy8gMy4gb24gY2xpY2sgb2YgYWNjZXB0XG4vLyBoaWRlIHdpbm5pbmcgcGFuZWxcbi8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4vLyBzaG93IG5ldyBsZXZlbFxuXG5mdW5jdGlvbiBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnN0IG5leHRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpbWVyKCkge1xuICAgIGNvbnN0IGNvdW50ZG93biA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWUgPSB0aW1lIC0gMTtcbiAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93bik7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb3NpbmctcGFuZWwtY29udGFpbmVyXCIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpLnRleHRDb250ZW50ID0gdGltZTtcbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gUHJvZ3Jlc3MgQmFyXG5cbmZ1bmN0aW9uIG1ha2VkeW5hbWljKGJ1dHRvbiwgcmVxdWlyZWVkU2NvcmUpIHtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBzdGVwc2l6ZSA9IDEwMCAvIHJlcXVpcmVlZFNjb3JlO1xuICAgIGxldCB3aWR0aCA9IHByb2dyZXNzLnN0eWxlLndpZHRoLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xuICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgc3RlcHNpemU7XG4gICAgaWYgKHdpZHRoID49IDEwMCkge1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9IHN0ZXBzaXplID4gMTAgPyBcIllvdSBtYWRlIGl0IVwiIDogXCJvdWNoLCBteSBmaW5nZXJycnJzXCI7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggKyBcIiVcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlByb2dyZXNzOiBcIiArIHdpZHRoO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9ncmVzcygpIHtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgaW5mby5pbm5lckhUTUwgPSBgXCJQcm9ncmVzczogMCVgO1xufVxuXG4vLyBpZiB1c2VyIGNsaWNrcyBvbiBcIm5vXCIsIHNob3cgdGhlIHZpc2l0IHBhbmVsIFxuZnVuY3Rpb24gc2hvd1Zpc2l0UGFuZWwoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWQtdmlzaXQtcGFuZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aXNpdC1wYW5lbFwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG59Il19
