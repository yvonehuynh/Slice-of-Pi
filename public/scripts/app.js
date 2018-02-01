(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var score = 0;
var time = 15;

timer();

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel, neededClicks) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel);
        nextLevel(currentLevel, nextGameLevel);
        //makedynamic(buttonLevel, requireedScore);
    });
};

// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
var addScore = function addScore(buttonLevel, scoreLevel1, requireedScore, hideElement) {
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
        document.getElementById(hideElement).classList = "hide";
    }
};

// 3. on click of accept
// hide winning panel
// hide previous game play
// show new level

function nextLevel(currentLevel, nextGameLevel) {
    document.getElementById("accept-one").addEventListener("click", function () {
        resetProgress();
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
                document.querySelector(".level-container").classList.add("hide");
                document.getElementsByClassName("losing-panel-container")[0].classList.remove("hide");
            });
        }
        document.querySelector(".timer").textContent = time;
    }, 1000);
}

// Progress Bar

function makedynamic(button, neededclicks) {
    var info = document.getElementById("info");
    var progress = document.getElementById("progress");
    var stepsize = 100 / neededclicks;
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

// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three");
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUE7O0FBRUE7QUFDSTtBQUNBO0FBQ0osSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQXlELGFBQXpELEVBQXdFLFlBQXhFLEVBQXVGO0FBQ3JHLGFBQVMsY0FBVCxDQUF3QixXQUF4QixFQUNLLGdCQURMLENBQ3NCLE9BRHRCLEVBQytCLFVBQVUsS0FBVixFQUFpQjtBQUM1QyxpQkFBUyxXQUFULEVBQXNCLFdBQXRCLEVBQW1DLGNBQW5DLEVBQW1ELFlBQW5EO0FBQ0Esa0JBQVUsWUFBVixFQUF3QixhQUF4QjtBQUNBO0FBQ0gsS0FMRDtBQU1ILENBUEQ7O0FBVUE7QUFDSTtBQUNBO0FBQ0E7QUFDSixJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsY0FBM0IsRUFBMkMsV0FBM0MsRUFBMkQ7QUFDeEU7QUFDQSxRQUFNLE9BQU8sU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxnQkFBWSxXQUFaLEVBQXlCLGNBQXpCO0FBQ0EsUUFBSSxVQUFVLGNBQWQsRUFBOEI7QUFDMUIsWUFBTSxLQUFLLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQVg7QUFDQSxXQUFHLEtBQUgsQ0FBUyxPQUFULEdBQW1CLE9BQW5CO0FBQ0EsWUFBTSxhQUFhLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBbkI7QUFDQSxtQkFBVyxXQUFYLEdBQXlCLEtBQXpCO0FBQ0Esa0JBQVUsQ0FBVjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsV0FB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RCxhQUFwRCxFQUFtRSxZQUFuRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc2NvcmUgPSAwO1xubGV0IHRpbWUgPSAxNVxuXG50aW1lcigpO1xuXG4vLyAxLiBvbiBjbGljayBvZiBoMyBDTGljayBNZSBidXR0b25cbiAgICAvLyBhZGQgYSBwb2ludFxuICAgIC8vIHByaW50IHBvaW50IHRvIHRoZSBzY3JlZW4gdXNpbmcgcCB0YWdlXG5jb25zdCB1c2VyQ2xpY2sgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsLCBuZWVkZWRDbGlja3MpPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uTGV2ZWwpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhZGRTY29yZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwpO1xuICAgICAgICBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgLy9tYWtlZHluYW1pYyhidXR0b25MZXZlbCwgcmVxdWlyZWVkU2NvcmUpO1xuICAgIH0pO1xufVxuXG5cbi8vIDIuIGluY3JlYXNlIHNjb3JlIGFzIHVzZXIgY2xpY2tzXG4gICAgLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4gICAgLy8gc2hvdyB3aW5uaW5nIHBhbmVsXG4gICAgLy8gcHJpbnQgc2NvcmUgdG8gcGFnZVxuY29uc3QgYWRkU2NvcmUgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgaGlkZUVsZW1lbnQpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSlcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoaWRlRWxlbWVudCkuY2xhc3NMaXN0ID0gXCJoaWRlXCI7XG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbiAgICAvLyBoaWRlIHdpbm5pbmcgcGFuZWxcbiAgICAvLyBoaWRlIHByZXZpb3VzIGdhbWUgcGxheVxuICAgIC8vIHNob3cgbmV3IGxldmVsXG5cbmZ1bmN0aW9uIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1vbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzZXRQcm9ncmVzcygpO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnN0IG5leHRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpbWVyKCl7XG4gICAgY29uc3QgY291bnRkb3duID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRpbWUgPSB0aW1lIC0gMTtcbiAgICAgICAgaWYgKHRpbWUgPD0gMCl7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikudGV4dENvbnRlbnQgPSB0aW1lO1xuICAgIH0sIDEwMDApO1xufVxuXG4vLyBQcm9ncmVzcyBCYXJcblxuZnVuY3Rpb24gbWFrZWR5bmFtaWMoYnV0dG9uLCBuZWVkZWRjbGlja3MpIHtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBzdGVwc2l6ZSA9IDEwMCAvIG5lZWRlZGNsaWNrcztcbiAgICAgICAgbGV0IHdpZHRoID0gcHJvZ3Jlc3Muc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgc3RlcHNpemU7XG4gICAgICAgIGlmICh3aWR0aCA+PSAxMDApIHtcbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBpbmZvLmlubmVySFRNTCA9IHN0ZXBzaXplID4gMTAgPyBcIllvdSBtYWRlIGl0IVwiIDogXCJvdWNoLCBteSBmaW5nZXJycnJzXCI7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoICsgXCIlXCI7XG4gICAgICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlByb2dyZXNzOiBcIiArIHdpZHRoO1xuICAgICAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3MoKXtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgaW5mby5pbm5lckhUTUwgPSBgXCJQcm9ncmVzczogMCVgO1xufVxuXG5cbi8vIExldmVsIE9uZVxudXNlckNsaWNrKFwibGV2ZWwtb25lLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMVwiLCA1LCBcImxldmVsLW9uZVwiLCBcImxldmVsLXR3b1wiKTtcbi8vIExldmVsIFR3b1xudXNlckNsaWNrKFwibGV2ZWwtdHdvLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMlwiLCAxNSwgXCJsZXZlbC10d29cIiwgXCJsZXZlbC10aHJlZVwiKTtcbi8vIExldmVsIFRocmVlXG51c2VyQ2xpY2soXCJsZXZlbC10aHJlZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDNcIiwgMjAsIFwibGV2ZWwtdGhyZWVcIiwgXCJsZXZlbC1mb3VyXCIpOyJdfQ==
