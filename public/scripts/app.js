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
        addScore(scoreLevel1, requireedScore, currentLevel);
        nextLevel(currentLevel, nextGameLevel);
        makedynamic(buttonLevel, requireedScore);
    });
};

// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
var addScore = function addScore(scoreLevel1, requireedScore, hideElement) {
    score++;
    var para = document.getElementById(scoreLevel1);
    para.textContent = score;
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
    document.getElementById(button).onclick = function () {
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
    };
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
userClick("level-two-button", "score-level2", 25, "level-two", "level-three");
// Level Three
userClick("level-three-button", "score-level3", 50, "level-three", "level-four");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUE7O0FBRUE7QUFDSTtBQUNBO0FBQ0osSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQXlELGFBQXpELEVBQXdFLFlBQXhFLEVBQXVGO0FBQ3JHLGFBQVMsY0FBVCxDQUF3QixXQUF4QixFQUNLLGdCQURMLENBQ3NCLE9BRHRCLEVBQytCLFVBQVUsS0FBVixFQUFpQjtBQUM1QyxpQkFBUyxXQUFULEVBQXNCLGNBQXRCLEVBQXNDLFlBQXRDO0FBQ0Esa0JBQVUsWUFBVixFQUF3QixhQUF4QjtBQUNJLG9CQUFZLFdBQVosRUFBeUIsY0FBekI7QUFDUCxLQUxEO0FBTUgsQ0FQRDs7QUFVQTtBQUNJO0FBQ0E7QUFDQTtBQUNKLElBQU0sV0FBVyxTQUFYLFFBQVcsQ0FBQyxXQUFELEVBQWMsY0FBZCxFQUE4QixXQUE5QixFQUE4QztBQUMzRDtBQUNBLFFBQU0sT0FBTyxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixLQUFuQjtBQUNBLFFBQUksVUFBVSxjQUFkLEVBQThCO0FBQzFCLFlBQU0sS0FBSyxTQUFTLHNCQUFULENBQWdDLHlCQUFoQyxFQUEyRCxDQUEzRCxDQUFYO0FBQ0EsV0FBRyxLQUFILENBQVMsT0FBVCxHQUFtQixPQUFuQjtBQUNBLFlBQU0sYUFBYSxTQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQW5CO0FBQ0EsbUJBQVcsV0FBWCxHQUF5QixLQUF6QjtBQUNBLGtCQUFVLENBQVY7QUFDQSxpQkFBUyxjQUFULENBQXdCLFdBQXhCLEVBQXFDLFNBQXJDLEdBQWlELE1BQWpEO0FB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VSxvQkFBVixFQUFnQyxjQUFoQyxFQUFnRCxFQUFoRCxFQUFvRCxhQUFwRCxFQUFtRSxZQUFuRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc2NvcmUgPSAwO1xubGV0IHRpbWUgPSAxNVxuXG50aW1lcigpO1xuXG4vLyAxLiBvbiBjbGljayBvZiBoMyBDTGljayBNZSBidXR0b25cbiAgICAvLyBhZGQgYSBwb2ludFxuICAgIC8vIHByaW50IHBvaW50IHRvIHRoZSBzY3JlZW4gdXNpbmcgcCB0YWdlXG5jb25zdCB1c2VyQ2xpY2sgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsLCBuZWVkZWRDbGlja3MpPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uTGV2ZWwpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhZGRTY29yZShzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICB9KTtcbn1cblxuXG4vLyAyLiBpbmNyZWFzZSBzY29yZSBhcyB1c2VyIGNsaWNrc1xuICAgIC8vIG9uY2UgdXNlciByZWFjaGVzIHJlcXVpcmVkIHNjb3JlLFxuICAgIC8vIHNob3cgd2lubmluZyBwYW5lbFxuICAgIC8vIHByaW50IHNjb3JlIHRvIHBhZ2VcbmNvbnN0IGFkZFNjb3JlID0gKHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgaGlkZUVsZW1lbnQpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIGlmIChzY29yZSA9PT0gcmVxdWlyZWVkU2NvcmUpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhpZGVFbGVtZW50KS5jbGFzc0xpc3QgPSBcImhpZGVcIjtcbiAgICB9XG59XG5cbi8vIDMuIG9uIGNsaWNrIG9mIGFjY2VwdFxuICAgIC8vIGhpZGUgd2lubmluZyBwYW5lbFxuICAgIC8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4gICAgLy8gc2hvdyBuZXcgbGV2ZWxcblxuZnVuY3Rpb24gbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LW9uZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNldFByb2dyZXNzKCk7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKTtcbiAgICAgICAgY29uc3QgbmV4dEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgd2lubmluZ1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcHJldmlvdXNHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV4dEdhbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdGltZXIoKXtcbiAgICBjb25zdCBjb3VudGRvd24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgdGltZSA9IHRpbWUgLSAxO1xuICAgICAgICBpZiAodGltZSA8PSAwKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd24pO1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxldmVsLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKS50ZXh0Q29udGVudCA9IHRpbWU7XG4gICAgfSwgMTAwMCk7XG59XG5cbi8vIFByb2dyZXNzIEJhclxuXG5mdW5jdGlvbiBtYWtlZHluYW1pYyhidXR0b24sIG5lZWRlZGNsaWNrcykge1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IHN0ZXBzaXplID0gMTAwIC8gbmVlZGVkY2xpY2tzO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gcHJvZ3Jlc3Muc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgc3RlcHNpemU7XG4gICAgICAgIGlmICh3aWR0aCA+PSAxMDApIHtcbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBpbmZvLmlubmVySFRNTCA9IHN0ZXBzaXplID4gMTAgPyBcIllvdSBtYWRlIGl0IVwiIDogXCJvdWNoLCBteSBmaW5nZXJycnJzXCI7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoICsgXCIlXCI7XG4gICAgICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlByb2dyZXNzOiBcIiArIHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldFByb2dyZXNzKCl7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIGluZm8uaW5uZXJIVE1MID0gYFwiUHJvZ3Jlc3M6IDAlYDtcbn1cblxuXG4vLyBMZXZlbCBPbmVcbnVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgNSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4vLyBMZXZlbCBUd29cbnVzZXJDbGljayhcImxldmVsLXR3by1idXR0b25cIiwgXCJzY29yZS1sZXZlbDJcIiwgMjUsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4vLyBMZXZlbCBUaHJlZVxudXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDUwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTsiXX0=
