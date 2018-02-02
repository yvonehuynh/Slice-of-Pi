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
        document.getElementById(hideElement).classList = "hide";
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
                document.querySelector(".level-container").classList.add("hide");
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

// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
// Level Two
userClick("level-two-button", "score-level2", 50, "level-two", "level-three");
// Level Three
// userClick("level-three-button", "score-level3", 50, "level-three", "level-four");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQXlELGFBQXpELEVBQXdFLFlBQXhFLEVBQXlGO0FBQ3ZHLGFBQVMsY0FBVCxDQUF3QixXQUF4QixFQUNLLGdCQURMLENBQ3NCLE9BRHRCLEVBQytCLFVBQVUsS0FBVixFQUFpQjtBQUN4QyxpQkFBUyxXQUFULEVBQXNCLFdBQXRCLEVBQW1DLGNBQW5DLEVBQW1ELFlBQW5ELEVBQWlFLFlBQWpFLEVBQStFLGFBQS9FO0FBQ0E7QUFDQTtBQUNILEtBTEw7QUFNSCxDQVBEOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFdBQTNDLEVBQXdELFlBQXhELEVBQXNFLGFBQXRFLEVBQXdGO0FBQ3JHO0FBQ0EsUUFBTSxPQUFPLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsZ0JBQVksV0FBWixFQUF5QixjQUF6QjtBQUNBLFFBQUksVUFBVSxjQUFkLEVBQThCO0FBQzFCLFlBQU0sS0FBSyxTQUFTLHNCQUFULENBQWdDLHlCQUFoQyxFQUEyRCxDQUEzRCxDQUFYO0FBQ0EsV0FBRyxLQUFILENBQVMsT0FBVCxHQUFtQixPQUFuQjtBQUNBLFlBQU0sYUFBYSxTQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQW5CO0FBQ0EsbUJBQVcsV0FBWCxHQUF5QixLQUF6QjtBQUNBLGtCQUFVLENBQVY7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a0QsV0FBbEQsRUFBK0QsYUFBL0Q7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBzY29yZSA9IDA7XG5sZXQgdGltZSA9IDE1XG5cbnRpbWVyKCk7XG5cbi8vIDEuIG9uIGNsaWNrIG9mIGgzIENMaWNrIE1lIGJ1dHRvblxuLy8gYWRkIGEgcG9pbnRcbi8vIHByaW50IHBvaW50IHRvIHRoZSBzY3JlZW4gdXNpbmcgcCB0YWdlXG5jb25zdCB1c2VyQ2xpY2sgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsLCBuZWVkZWRDbGlja3MpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhZGRTY29yZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgICAgICAvL25leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgLy9tYWtlZHluYW1pYyhidXR0b25MZXZlbCwgcmVxdWlyZWVkU2NvcmUpO1xuICAgICAgICB9KTtcbn1cblxuXG4vLyAyLiBpbmNyZWFzZSBzY29yZSBhcyB1c2VyIGNsaWNrc1xuLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4vLyBzaG93IHdpbm5pbmcgcGFuZWxcbi8vIHByaW50IHNjb3JlIHRvIHBhZ2VcbmNvbnN0IGFkZFNjb3JlID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGhpZGVFbGVtZW50LCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSlcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoaWRlRWxlbWVudCkuY2xhc3NMaXN0ID0gXCJoaWRlXCI7XG4gICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgIH1cbn1cblxuLy8gMy4gb24gY2xpY2sgb2YgYWNjZXB0XG4vLyBoaWRlIHdpbm5pbmcgcGFuZWxcbi8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4vLyBzaG93IG5ldyBsZXZlbFxuXG5mdW5jdGlvbiBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnN0IG5leHRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpbWVyKCkge1xuICAgIGNvbnN0IGNvdW50ZG93biA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWUgPSB0aW1lIC0gMTtcbiAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93bik7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikudGV4dENvbnRlbnQgPSB0aW1lO1xuICAgIH0sIDEwMDApO1xufVxuXG4vLyBQcm9ncmVzcyBCYXJcblxuZnVuY3Rpb24gbWFrZWR5bmFtaWMoYnV0dG9uLCByZXF1aXJlZWRTY29yZSkge1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IHN0ZXBzaXplID0gMTAwIC8gcmVxdWlyZWVkU2NvcmU7XG4gICAgbGV0IHdpZHRoID0gcHJvZ3Jlc3Muc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyBzdGVwc2l6ZTtcbiAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gc3RlcHNpemUgPiAxMCA/IFwiWW91IG1hZGUgaXQhXCIgOiBcIm91Y2gsIG15IGZpbmdlcnJycnNcIjtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB3aWR0aCArIFwiJVwiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiUHJvZ3Jlc3M6IFwiICsgd2lkdGg7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIGluZm8uaW5uZXJIVE1MID0gYFwiUHJvZ3Jlc3M6IDAlYDtcbn1cblxuXG4vLyBMZXZlbCBPbmVcbnVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgNSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4vLyBMZXZlbCBUd29cbnVzZXJDbGljayhcImxldmVsLXR3by1idXR0b25cIiwgXCJzY29yZS1sZXZlbDJcIiwgNTAsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4vLyBMZXZlbCBUaHJlZVxuLy8gdXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDUwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTsiXX0=
