(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var score = 0;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(scoreLevel1, requireedScore);
        nextLevel(currentLevel, nextGameLevel);
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

// Level One
userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three");
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaOztBQUVBO0FBQ0k7QUFDQTtBQUNKLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixjQUEzQixFQUEyQyxZQUEzQyxFQUF5RCxhQUF6RCxFQUF5RTtBQUN2RixhQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFDQyxnQkFERCxDQUNrQixPQURsQixFQUMyQixVQUFVLEtBQVYsRUFBaUI7QUFDeEMsaUJBQVMsV0FBVCxFQUFzQixjQUF0QjtBQUNBLGtCQUFVLFlBQVYsRUFBd0IsYUFBeEI7QUFDSCxLQUpEO0FBS0gsQ0FORDs7QUFRQTtBQUNJO0FBQ0E7QUFDQTtBQUNKLElBQU0sV0FBVyxTQUFYLFFBQVcsQ0FBQyxXQUFELEVBQWMsY0FBZCxFQUFpQztBQUM5QztBQUNBLFFBQU0sT0FBTyxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixLQUFuQjtBQUNBLFFBQUksVUFBVSxjQUFkLEVBQThCO0FBQzFCLFlBQU0sS0FBSyxTQUFTLHNCQUFULENBQWdDLHlCQUFoQyxFQUEyRCxDQUEzRCxDQUFYO0FBQ0EsV0FBRyxLQUFILENBQVMsT0FBVCxHQUFtQixPQUFuQjtBQUNBLFlBQU0sYUFBYSxTQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQW5CO0FBQ0EsbUJBQVcsV0FBWCxHQUF5QixLQUF6QjtBQUNBLGdCQUFRLENBQVI7QUFDSDtBQUNKLENBWEQ7O0FBYUE7QUFDSTtBQUNBO0FBQ0E7O0FBRUosU0FBUyxTQUFULENBQW1CLFlBQW5CLEVBQWlDLGFBQWpDLEVBQWdEO0FBQzVDLGFBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0UsWUFBWTtBQUN4RSxZQUFNLGVBQWUsU0FBUyxzQkFBVCxDQUFnQyx5QkFBaEMsRUFBMkQsQ0FBM0QsQ0FBckI7QUFDQSxZQUFNLGVBQWUsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQXJCO0FBQ0EsWUFBTSxXQUFXLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFqQjtBQUNBLHFCQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQSxxQkFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EsaUJBQVMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixNQUExQjtBQUNILEtBUEQ7QUFRSDs7QUFFRDtBQUNBLFVBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsQ0FBOUMsRUFBaUQsV0FBakQsRUFBOEQsV0FBOUQ7QUFDQTtBQUNBLFVBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsRUFBOUMsRUFBa0QsV0FBbEQsRUFBK0QsYUFBL0Q7QUFDQTtBQUNBLFVBQVUsb0JBQVYsRUFBZ0MsY0FBaEMsRUFBZ0QsRUFBaEQsRUFBb0QsYUFBcEQsRUFBbUUsWUFBbkUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHNjb3JlID0gMDtcblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4gICAgLy8gYWRkIGEgcG9pbnRcbiAgICAvLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYWRkU2NvcmUoc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICAgICAgbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgfSk7XG59XG5cbi8vIDIuIGluY3JlYXNlIHNjb3JlIGFzIHVzZXIgY2xpY2tzXG4gICAgLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4gICAgLy8gc2hvdyB3aW5uaW5nIHBhbmVsXG4gICAgLy8gcHJpbnQgc2NvcmUgdG8gcGFnZVxuY29uc3QgYWRkU2NvcmUgPSAoc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlKSA9PiB7XG4gICAgc2NvcmUrKztcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NvcmVMZXZlbDEpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID0gMDtcbiAgICB9XG59XG5cbi8vIDMuIG9uIGNsaWNrIG9mIGFjY2VwdFxuICAgIC8vIGhpZGUgd2lubmluZyBwYW5lbFxuICAgIC8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4gICAgLy8gc2hvdyBuZXcgbGV2ZWxcblxuZnVuY3Rpb24gbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LW9uZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnN0IG5leHRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cbi8vIExldmVsIE9uZVxudXNlckNsaWNrKFwibGV2ZWwtb25lLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMVwiLCA1LCBcImxldmVsLW9uZVwiLCBcImxldmVsLXR3b1wiKTtcbi8vIExldmVsIFR3b1xudXNlckNsaWNrKFwibGV2ZWwtdHdvLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMlwiLCAxNSwgXCJsZXZlbC10d29cIiwgXCJsZXZlbC10aHJlZVwiKTtcbi8vIExldmVsIFRocmVlXG51c2VyQ2xpY2soXCJsZXZlbC10aHJlZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDNcIiwgMjAsIFwibGV2ZWwtdGhyZWVcIiwgXCJsZXZlbC1mb3VyXCIpO1xuIl19
