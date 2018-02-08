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

        showVisitPanel("load-visit-panel");
        showVisitPanel("reject");
        refreshPage("reload-game");
        refreshPage("reload-game2");
    });
}
initGame();

var score = 0;
var time = 35;

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsUUFBVCxHQUFtQjtBQUNmLGFBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQVU7QUFDN0U7QUFDQSxpQkFBUyxjQUFULENBQXdCLGtCQUF4QixFQUE0QyxLQUE1QyxDQUFrRCxPQUFsRCxHQUEyRCxNQUEzRDtBQUNBLGlCQUFTLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTNDLENBQWlELE9BQWpELEdBQTJELE9BQTNEO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFyQyxDQUEyQyxPQUEzQyxHQUFvRCxPQUFwRDtBQUNBO0FBQ0E7QUFDQSxrQkFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxDQUE5QyxFQUFpRCxXQUFqRCxFQUE4RCxXQUE5RDtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsRUFBOUMsRUFBa0QsV0FBbEQsRUFBK0QsYUFBL0Q7QUFDQTtBQUNBLGtCQUFVLG9CQUFWLEVBQWdDLGNBQWhDLEVBQWdELEVBQWhELEVBQW9ELGFBQXBELEVBQW1FLFlBQW5FOztBQUVBLHVCQUFlLGtCQUFmO0FBQ0EsdUJBQWUsUUFBZjtBQUNBLG9CQUFZLGFBQVo7QUFDQSxvQkFBWSxjQUFaO0FBQ0gsS0FqQkQ7QUFrQkg7QUFDRDs7QUFFQSxJQUFJLFFBQVEsQ0FBWjtBQUNBLElBQUksT0FBTyxFQUFYOztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixjQUEzQixFQUEyQyxZQUEzQyxFQUF5RCxhQUF6RCxFQUF3RSxZQUF4RSxFQUF5RjtBQUN2RyxhQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFDSyxnQkFETCxD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O0FBTUg7O0FBRUQ7QUFDQSxTQUFTLFdBQVQsQ0FBcUIsWUFBckIsRUFBa0M7QUFDOUIsYUFBUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxZQUFVO0FBQ3RFLGVBQU8sUUFBUCxDQUFnQixNQUFoQixDQUF1QixJQUF2QjtBQUNILEtBRkQ7QUFHSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmZ1bmN0aW9uIGluaXRHYW1lKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gb24gY2xpY2sgb2Ygc3RhcnQgZ2FtZSBidXR0b24sIHJ1biB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc3RhcnQtcGFuZWxcIikuc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtb25lXCIpLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIjtcbiAgICAgICAgdGltZXIoKTtcbiAgICAgICAgLy8gTGV2ZWwgT25lXG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgNSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4gICAgICAgIC8vIExldmVsIFR3b1xuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC10d28tYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwyXCIsIDIwLCBcImxldmVsLXR3b1wiLCBcImxldmVsLXRocmVlXCIpO1xuICAgICAgICAvLyBMZXZlbCBUaHJlZVxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC10aHJlZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDNcIiwgNTAsIFwibGV2ZWwtdGhyZWVcIiwgXCJsZXZlbC1mb3VyXCIpO1xuXG4gICAgICAgIHNob3dWaXNpdFBhbmVsKFwibG9hZC12aXNpdC1wYW5lbFwiKTtcbiAgICAgICAgc2hvd1Zpc2l0UGFuZWwoXCJyZWplY3RcIik7XG4gICAgICAgIHJlZnJlc2hQYWdlKFwicmVsb2FkLWdhbWVcIik7XG4gICAgICAgIHJlZnJlc2hQYWdlKFwicmVsb2FkLWdhbWUyXCIpO1xuICAgIH0pXG59XG5pbml0R2FtZSgpO1xuXG5sZXQgc2NvcmUgPSAwO1xubGV0IHRpbWUgPSAzNTtcblxuXG4vLyAxLiBvbiBjbGljayBvZiBoMyBDTGljayBNZSBidXR0b25cbi8vIGFkZCBhIHBvaW50XG4vLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCwgbmVlZGVkQ2xpY2tzKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uTGV2ZWwpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgYWRkU2NvcmUoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgLy9uZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgICAgIC8vbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICAgICAgfSk7XG59XG5cblxuLy8gMi4gaW5jcmVhc2Ugc2NvcmUgYXMgdXNlciBjbGlja3Ncbi8vIG9uY2UgdXNlciByZWFjaGVzIHJlcXVpcmVkIHNjb3JlLFxuLy8gc2hvdyB3aW5uaW5nIHBhbmVsXG4vLyBwcmludCBzY29yZSB0byBwYWdlXG5jb25zdCBhZGRTY29yZSA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBoaWRlRWxlbWVudCwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsLCkgPT4ge1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbi8vIGhpZGUgd2lubmluZyBwYW5lbFxuLy8gaGlkZSBwcmV2aW91cyBnYW1lIHBsYXlcbi8vIHNob3cgbmV3IGxldmVsXG5cbmZ1bmN0aW9uIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1vbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzZXRQcm9ncmVzcygpO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKTtcbiAgICAgICAgY29uc3QgbmV4dEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgd2lubmluZ1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcHJldmlvdXNHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV4dEdhbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdGltZXIoKSB7XG4gICAgY29uc3QgY291bnRkb3duID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZSA9IHRpbWUgLSAxO1xuICAgICAgICBpZiAodGltZSA8PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxldmVsLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikudGV4dENvbnRlbnQgPSB0aW1lO1xuICAgIH0sIDEwMDApO1xufVxuXG4vLyBQcm9ncmVzcyBCYXJcblxuZnVuY3Rpb24gbWFrZWR5bmFtaWMoYnV0dG9uLCByZXF1aXJlZWRTY29yZSkge1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IHN0ZXBzaXplID0gMTAwIC8gcmVxdWlyZWVkU2NvcmU7XG4gICAgbGV0IHdpZHRoID0gcHJvZ3Jlc3Muc3R5bGUud2lkdGgucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyBzdGVwc2l6ZTtcbiAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gc3RlcHNpemUgPiAxMCA/IFwiWW91IG1hZGUgaXQhXCIgOiBcIm91Y2gsIG15IGZpbmdlcnJycnNcIjtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB3aWR0aCArIFwiJVwiO1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiUHJvZ3Jlc3M6IFwiICsgd2lkdGg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldFByb2dyZXNzKCkge1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICBpbmZvLmlubmVySFRNTCA9IGBcIlByb2dyZXNzOiAwJWA7XG59XG5cbi8vIGlmIHVzZXIgY2xpY2tzIG9uIFwibm9cIiwgc2hvdyB0aGUgdmlzaXQgcGFuZWwgXG5mdW5jdGlvbiBzaG93VmlzaXRQYW5lbChlbGVtZW50SUQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aXNpdC1wYW5lbFwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGltZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG59XG5cbi8vIHJlZnJlc2ggdGhlIHBhZ2VcbmZ1bmN0aW9uIHJlZnJlc2hQYWdlKHJlbG9hZEJ1dHRvbil7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVsb2FkQnV0dG9uKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTsgXG4gICAgfSlcbn07Il19
