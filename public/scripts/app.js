(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var score = 0;
var time = 45;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(scoreLevel1, requireedScore);
        nextLevel(currentLevel, nextGameLevel);
        timer();
    });
};

// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
var addScore = function addScore(scoreLevel1, requireedScore) {
    score++;
    var para = document.getElementById(scoreLevel1);
    para.textContent = score;
    if (score === requireedScore) {
        var el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        var scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score = 0;
    }
};

// 3. on click of accept
// hide winning panel
// hide previous game play
// show new level

function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
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
        time--;
        if (time <= 0) {
            clearInterval(countdown);
            document.querySelector(".level-container").classList.add("hide");
            document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
        }
        document.querySelector(".timer").textContent = time;
    }, 1000);
}

// Progress Bar

function makedynamic(button, neededclicks) {
    var info = document.getElementById("info");
    var progress = document.getElementById("progress");
    var stepsize = 100 / neededclicks;
    document.getElementById(button).onclick = function () {
        var width = progress.style.width.replace("%", "");
        width = parseInt(width) + stepsize;
        if (width >= 100) {
            progress.style.width = "100%";
            info.innerHTML = stepsize > 10 ? "You made it!" : "ouch, my fingerrrrs";
        } else {
            width = width + "%";
            progress.style.width = width;
            info.innerHTML = "Progress: " + width;
        }
    };
}

makedynamic("level-one-button", 5);
makedynamic("level-one-button", 15);
makedynamic("level-one-button", 20);

// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three");
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUE7QUFDSTtBQUNBO0FBQ0osSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQXlELGFBQXpELEVBQXlFO0FBQ3ZGLGFBQVMsY0FBVCxDQUF3QixXQUF4QixFQUNDLGdCQURELENBQ2tCLE9BRGxCLEVBQzJCLFVBQVUsS0FBVixFQUFpQjtBQUN4QyxpQkFBUyxXQUFULEVBQXNCLGNBQXRCO0FBQ0Esa0JBQVUsWUFBVixFQUF3QixhQUF4QjtBQUNBO0FBQ0gsS0FMRDtBQU1ILENBUEQ7O0FBU0E7QUFDSTtBQUNBO0FBQ0E7QUFDSixJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsV0FBRCxFQUFjLGNBQWQsRUFBaUM7QUFDOUM7QUFDQSxRQUFNLE9BQU8sU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxRQUFJLFVBQVUsY0FBZCxFQUE4QjtBQUMxQixZQUFNLEtBQUssU0FBUyxzQkFBVCxDQUFnQyx5QkFBaEMsRUFBMkQsQ0FBM0QsQ0FBWDtBQUNBLFdBQUcsS0FBSCxDQUFTLE9BQVQsR0FBbUIsT0FBbkI7QUFDQSxZQUFNLGFBQWEsU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFuQjtBQUNBLG1CQUFXLFdBQVgsR0FBeUIsS0FBekI7QUFDQSxnQkFBUSxDQUFSO0FBQ0g7QUFDSixDQVhEOztBQWFBO0FBQ0k7QUFDQTtBQUNBOztBQUVKLFNBQVMsU0FBVCxDQUFtQixZQUFuQixFQUFpQyxhQUFqQyxFQUFnRDtBQUM1QyxhQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVk7QUFDeEUsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQXJCO0FBQ0EsWUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixZQUF4QixDQUFyQjtBQUNBLFlBQU0sV0FBVyxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBakI7QUFDQSxxQkFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNBLGlCQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsTUFBMUI7QUFDSCxLQVBEO0FBUUg7O0FBRUQsU0FBUyxLQUFULEdBQWdCO0FBQ1osUUFBTSxZQUFZLE9BQU8sV0FBUCxDQUFtQixZQUFVO0FBQzNDO0FBQ0EsWUFBSSxRQUFRLENBQVosRUFBYztBQUNWLDBCQUFjLFNBQWQ7QUFDQSxxQkFBUyxhQUFULENBQXVCLGtCQUF2QixFQUEyQyxTQUEzQyxDQUFxRCxHQUFyRCxDQUF5RCxNQUF6RDtBQUNBLHFCQUFTLHNCQUFULENBQWdDLHdCQUFoQyxFQUEwRCxDQUExRCxFQUE2RCxTQUE3RCxDQUF1RSxNQUF2RSxDQUE4RSxNQUE5RTtBQUNIO0FBQ0QsaUJBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxXQUFqQyxHQUErQyxJQUEvQztBQUNILEtBUmlCLEVBUWYsSUFSZSxDQUFsQjtBQVNIOztBQUVEOztBQUVBLFNBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixZQUE3QixFQUEyQztBQUN2QyxRQUFJLE9BQU8sU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQVg7QUFDQSxRQUFJLFdBQVcsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxRQUFJLFdBQVcsTUFBTSxZQUFyQjtBQUNBLGFBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxPQUFoQyxHQUEwQyxZQUFZO0FBQ2xELFlBQUksUUFBUSxTQUFTLEtBQVQsQ0FBZSxLQUFmLENBQXFCLE9BQXJCLENBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLENBQVo7QUFDQSxnQkFBUSxTQUFTLEtBQVQsSUFBa0IsUUFBMUI7QUFDQSxZQUFJLFNBQVMsR0FBYixFQUFrQjtBQUNkLHFCQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLE1BQXZCO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixXQUFXLEVBQVgsR0FBZ0IsY0FBaEIsR0FBaUMscUJBQWxEO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsb0JBQVEsUUFBUSxHQUFoQjtBQUNBLHFCQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLEtBQXZCO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixlQUFlLEtBQWhDO0FBQ0g7QUFDSixLQVhEO0FBWUg7O0FBRUQsWUFBWSxrQkFBWixFQUFnQyxDQUFoQztBQUNBLFlBQVksa0JBQVosRUFBZ0MsRUFBaEM7QUFDQSxZQUFZLGtCQUFaLEVBQWdDLEVBQWhDOztBQUVBO0FBQ0EsVUFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxDQUE5QyxFQUFpRCxXQUFqRCxFQUE4RCxXQUE5RDtBQUNBO0FBQ0EsVUFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxFQUE5QyxFQUFrRCxXQUFsRCxFQUErRCxhQUEvRDtBQUNBO0FBQ0EsVUFBVSxvQkFBVixFQUFnQyxjQUFoQyxFQUFnRCxFQUFoRCxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc2NvcmUgPSAwO1xubGV0IHRpbWUgPSA0NTtcblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4gICAgLy8gYWRkIGEgcG9pbnRcbiAgICAvLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYWRkU2NvcmUoc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICAgICAgbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHRpbWVyKCk7XG4gICAgfSk7XG59XG5cbi8vIDIuIGluY3JlYXNlIHNjb3JlIGFzIHVzZXIgY2xpY2tzXG4gICAgLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4gICAgLy8gc2hvdyB3aW5uaW5nIHBhbmVsXG4gICAgLy8gcHJpbnQgc2NvcmUgdG8gcGFnZVxuY29uc3QgYWRkU2NvcmUgPSAoc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlKSA9PiB7XG4gICAgc2NvcmUrKztcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NvcmVMZXZlbDEpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID0gMDtcbiAgICB9XG59XG5cbi8vIDMuIG9uIGNsaWNrIG9mIGFjY2VwdFxuICAgIC8vIGhpZGUgd2lubmluZyBwYW5lbFxuICAgIC8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4gICAgLy8gc2hvdyBuZXcgbGV2ZWxcblxuZnVuY3Rpb24gbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LW9uZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnN0IG5leHRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpbWVyKCl7XG4gICAgY29uc3QgY291bnRkb3duID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRpbWUgLS07XG4gICAgICAgIGlmICh0aW1lIDw9IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpLnRleHRDb250ZW50ID0gdGltZTtcbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gUHJvZ3Jlc3MgQmFyXG5cbmZ1bmN0aW9uIG1ha2VkeW5hbWljKGJ1dHRvbiwgbmVlZGVkY2xpY2tzKSB7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgc3RlcHNpemUgPSAxMDAgLyBuZWVkZWRjbGlja3M7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd2lkdGggPSBwcm9ncmVzcy5zdHlsZS53aWR0aC5yZXBsYWNlKFwiJVwiLCBcIlwiKTtcbiAgICAgICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyBzdGVwc2l6ZTtcbiAgICAgICAgaWYgKHdpZHRoID49IDEwMCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIGluZm8uaW5uZXJIVE1MID0gc3RlcHNpemUgPiAxMCA/IFwiWW91IG1hZGUgaXQhXCIgOiBcIm91Y2gsIG15IGZpbmdlcnJycnNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggKyBcIiVcIjtcbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiUHJvZ3Jlc3M6IFwiICsgd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1ha2VkeW5hbWljKFwibGV2ZWwtb25lLWJ1dHRvblwiLCA1KTtcbm1ha2VkeW5hbWljKFwibGV2ZWwtb25lLWJ1dHRvblwiLCAxNSk7XG5tYWtlZHluYW1pYyhcImxldmVsLW9uZS1idXR0b25cIiwgMjApO1xuXG4vLyBMZXZlbCBPbmVcbnVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgNSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4vLyBMZXZlbCBUd29cbnVzZXJDbGljayhcImxldmVsLXR3by1idXR0b25cIiwgXCJzY29yZS1sZXZlbDJcIiwgMTUsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4vLyBMZXZlbCBUaHJlZVxudXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDIwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTsiXX0=
