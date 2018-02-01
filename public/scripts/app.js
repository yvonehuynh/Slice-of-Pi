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

progressBar();
function progressBar(e) {
    document.getElementById("level-one-button").addEventListener("click", function () {
        var progress = document.getElementById("progress");
        var currentWidth = progress.style.width = ("%", "");
        var otherWidth = document.getElementById("currentWidth");

        var totalCount = 5;
        currentWidth += totalCount;
        console.log(currentWidth);
    });
}
/*
Believe it or not, I still don't know how this script is making the progress bar work. I just coded any shit out ;)
*/

// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three");
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUE7QUFDSTtBQUNBO0FBQ0osSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQXlELGFBQXpELEVBQXlFO0FBQ3ZGLGFBQVMsY0FBVCxDQUF3QixXQUF4QixFQUNDLGdCQURELENBQ2tCLE9BRGxCLEVBQzJCLFVBQVUsS0FBVixFQUFpQjtBQUN4QyxpQkFBUyxXQUFULEVBQXNCLGNBQXRCO0FBQ0Esa0JBQVUsWUFBVixFQUF3QixhQUF4QjtBQUNBO0FBQ0gsS0FMRDtBQU1ILENBUEQ7O0FBU0E7QUFDSTtBQUNBO0FBQ0E7QUFDSixJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsV0FBRCxFQUFjLGNBQWQsRUFBaUM7QUFDOUM7QUFDQSxRQUFNLE9BQU8sU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxRQUFJLFVBQVUsY0FBZCxFQUE4QjtBQUMxQixZQUFNLEtBQUssU0FBUyxzQkFBVCxDQUFnQyx5QkFBaEMsRUFBMkQsQ0FBM0QsQ0FBWDtBQUNBLFdBQUcsS0FBSCxDQUFTLE9BQVQsR0FBbUIsT0FBbkI7QUFDQSxZQUFNLGFBQWEsU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFuQjtBQUNBLG1CQUFXLFdBQVgsR0FBeUIsS0FBekI7QUFDQSxnQkFBUSxDQUFSO0FBQ0g7QUFDSixDQVhEOztBQWFBO0FBQ0k7QUFDQTtBQUNBOztBQUVKLFNBQVMsU0FBVCxDQUFtQixZQUFuQixFQUFpQyxhQUFqQyxFQUFnRDtBQUM1QyxhQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVk7QUFDeEUsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQXJCO0FBQ0EsWUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixZQUF4QixDQUFyQjtBQUNBLFlBQU0sV0FBVyxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBakI7QUFDQSxxQkFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNBLGlCQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsTUFBMUI7QUFDSCxLQVBEO0FBUUg7O0FBRUQsU0FBUyxLQUFULEdBQWdCO0FBQ1osUUFBTSxZQUFZLE9BQU8sV0FBUCxDQUFtQixZQUFVO0FBQzNDO0FBQ0EsWUFBSSxRQUFRLENBQVosRUFBYztBQUNWLDBCQUFjLFNBQWQ7QUFDQSxxQkFBUyxhQUFULENBQXVCLGtCQUF2QixFQUEyQyxTQUEzQyxDQUFxRCxHQUFyRCxDQUF5RCxNQUF6RDtBQUNBLHFCQUFTLHNCQUFULENBQWdDLHdCQUFoQyxFQUEwRCxDQUExRCxFQUE2RCxTQUE3RCxDQUF1RSxNQUF2RSxDQUE4RSxNQUE5RTtBQUNIO0FBQ0QsaUJBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxXQUFqQyxHQUErQyxJQUEvQztBQUNILEtBUmlCLEVBUWYsSUFSZSxDQUFsQjtBQVNIOztBQUVEO0FBQ0EsU0FBUyxXQUFULENBQXFCLENBQXJCLEVBQXVCO0FBQ25CLGFBQVMsY0FBVCxDQUF3QixrQkFBeEIsRUFBNEMsZ0JBQTVDLENBQTZELE9BQTdELEVBQXNFLFlBQVU7QUFDNUUsWUFBTSxXQUFXLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLFlBQUksZUFBZSxTQUFTLEtBQVQsQ0FBZSxLQUFmLElBQXdCLEtBQUssRUFBN0IsQ0FBbkI7QUFDQSxZQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQW5COztBQUVBLFlBQU0sYUFBYSxDQUFuQjtBQUNBLHdCQUFnQixVQUFoQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0gsS0FSRDtBQVNIO0FBQ0M7Ozs7QUFJRjtBQUNBLFVBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsQ0FBOUMsRUFBaUQsV0FBakQsRUFBOEQsV0FBOUQ7QUFDQTtBQUNBLFVBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsRUFBOUMsRUFBa0QsV0FBbEQsRUFBK0QsYUFBL0Q7QUFDQTtBQUNBLFVBQVUsb0JBQVYsRUFBZ0MsY0FBaEMsRUFBZ0QsRUFBaEQsRUFBb0QsYUFBcEQsRUFBbUUsWUFBbkUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHNjb3JlID0gMDtcbmxldCB0aW1lID0gNDU7XG5cbi8vIDEuIG9uIGNsaWNrIG9mIGgzIENMaWNrIE1lIGJ1dHRvblxuICAgIC8vIGFkZCBhIHBvaW50XG4gICAgLy8gcHJpbnQgcG9pbnQgdG8gdGhlIHNjcmVlbiB1c2luZyBwIHRhZ2VcbmNvbnN0IHVzZXJDbGljayA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uTGV2ZWwpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGFkZFNjb3JlKHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSk7XG4gICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICB0aW1lcigpO1xuICAgIH0pO1xufVxuXG4vLyAyLiBpbmNyZWFzZSBzY29yZSBhcyB1c2VyIGNsaWNrc1xuICAgIC8vIG9uY2UgdXNlciByZWFjaGVzIHJlcXVpcmVkIHNjb3JlLFxuICAgIC8vIHNob3cgd2lubmluZyBwYW5lbFxuICAgIC8vIHByaW50IHNjb3JlIHRvIHBhZ2VcbmNvbnN0IGFkZFNjb3JlID0gKHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSkgPT4ge1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgaWYgKHNjb3JlID09PSByZXF1aXJlZWRTY29yZSkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVswXTtcbiAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbiAgICAvLyBoaWRlIHdpbm5pbmcgcGFuZWxcbiAgICAvLyBoaWRlIHByZXZpb3VzIGdhbWUgcGxheVxuICAgIC8vIHNob3cgbmV3IGxldmVsXG5cbmZ1bmN0aW9uIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1vbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd2lubmluZ1BhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpO1xuICAgICAgICBjb25zdCBuZXh0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2aW91c0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0aW1lcigpe1xuICAgIGNvbnN0IGNvdW50ZG93biA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICB0aW1lIC0tO1xuICAgICAgICBpZiAodGltZSA8PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKS50ZXh0Q29udGVudCA9IHRpbWU7XG4gICAgfSwgMTAwMCk7XG59XG5cbnByb2dyZXNzQmFyKCk7XG5mdW5jdGlvbiBwcm9ncmVzc0JhcihlKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsLW9uZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IHByb2dyZXNzLnN0eWxlLndpZHRoID0gKFwiJVwiLCBcIlwiKTtcbiAgICAgICAgY29uc3Qgb3RoZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFdpZHRoXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG90YWxDb3VudCA9IDU7XG4gICAgICAgIGN1cnJlbnRXaWR0aCArPSB0b3RhbENvdW50O1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V2lkdGgpO1xuICAgIH0pXG59XG4gIC8qXG5CZWxpZXZlIGl0IG9yIG5vdCwgSSBzdGlsbCBkb24ndCBrbm93IGhvdyB0aGlzIHNjcmlwdCBpcyBtYWtpbmcgdGhlIHByb2dyZXNzIGJhciB3b3JrLiBJIGp1c3QgY29kZWQgYW55IHNoaXQgb3V0IDspXG4qL1xuXG4vLyBMZXZlbCBPbmVcbnVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgNSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4vLyBMZXZlbCBUd29cbnVzZXJDbGljayhcImxldmVsLXR3by1idXR0b25cIiwgXCJzY29yZS1sZXZlbDJcIiwgMTUsIFwibGV2ZWwtdHdvXCIsIFwibGV2ZWwtdGhyZWVcIik7XG4vLyBMZXZlbCBUaHJlZVxudXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDIwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTsiXX0=
