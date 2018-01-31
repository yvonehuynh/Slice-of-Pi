(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var score = 0;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(index) {
    document.getElementsByClassName('click-button')[index].addEventListener('click', function (event) {
        addScore();
    });
};

// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
var addScore = function addScore() {
    score++;
    var para = document.getElementsByClassName("score")[2];
    para.textContent = score;
    if (score === 5) {
        var el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        var scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
    }
};

// 3. on click of accept
// hide winning panel
// hide previous game play
// show new level

function nextLevel(e) {
    document.getElementById("accept-one").addEventListener("click", function () {
        var winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        var previousGame = document.getElementById("level-one");
        var nextGame = document.getElementById("level-two");
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    });
}

nextLevel();

userClick(0);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaOztBQUVBO0FBQ0k7QUFDQTtBQUNKLElBQU0sWUFBVSxTQUFWLFNBQVUsQ0FBQyxLQUFELEVBQVM7QUFDekIsYUFBUyxzQkFBVCxDQUFnQyxjQUFoQyxFQUFnRCxLQUFoRCxFQUNLLGdCQURMLENBQ3NCLE9BRHRCLEVBQytCLFVBQVUsS0FBVixFQUFpQjtBQUN4QztBQUNILEtBSEw7QUFJQyxDQUxEOztBQU9BO0FBQ0k7QUFDQTtBQUNBO0FBQ0osSUFBTSxXQUFXLFNBQVgsUUFBVyxHQUFNO0FBQ25CO0FBQ0EsUUFBTSxPQUFPLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixLQUFuQjtBQUNBLFFBQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2IsWUFBTSxLQUFLLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQVg7QUFDQSxXQUFHLEtBQUgsQ0FBUyxPQUFULEdBQW1CLE9BQW5CO0FBQ0EsWUFBTSxhQUFhLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBbkI7QUFDQSxtQkFBVyxXQUFYLEdBQXlCLEtBQXpCO0FBQ0g7QUFDSixDQVZEOztBQVlBO0FBQ0k7QUFDQTtBQUNBOztBQUVKLFNBQVMsU0FBVCxDQUFtQixDQUFuQixFQUFxQjtBQUNqQixhQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVU7QUFDdEUsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQXJCO0FBQ0EsWUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFlBQU0sV0FBVyxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBakI7QUFDQSxxQkFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0EscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNBLGlCQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsTUFBMUI7QUFDSCxLQVBEO0FBUUg7O0FBRUQ7O0FBRUEsVUFBVSxDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBzY29yZSA9IDA7XG5cbi8vIDEuIG9uIGNsaWNrIG9mIGgzIENMaWNrIE1lIGJ1dHRvblxuICAgIC8vIGFkZCBhIHBvaW50XG4gICAgLy8gcHJpbnQgcG9pbnQgdG8gdGhlIHNjcmVlbiB1c2luZyBwIHRhZ2VcbmNvbnN0IHVzZXJDbGljaz0oaW5kZXgpPT57XG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbGljay1idXR0b24nKVtpbmRleF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYWRkU2NvcmUoKTtcbiAgICB9KTtcbn1cblxuLy8gMi4gaW5jcmVhc2Ugc2NvcmUgYXMgdXNlciBjbGlja3NcbiAgICAvLyBvbmNlIHVzZXIgcmVhY2hlcyByZXF1aXJlZCBzY29yZSxcbiAgICAvLyBzaG93IHdpbm5pbmcgcGFuZWxcbiAgICAvLyBwcmludCBzY29yZSB0byBwYWdlXG5jb25zdCBhZGRTY29yZSA9ICgpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMl07XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIGlmIChzY29yZSA9PT0gNSkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVswXTtcbiAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIH1cbn1cblxuLy8gMy4gb24gY2xpY2sgb2YgYWNjZXB0XG4gICAgLy8gaGlkZSB3aW5uaW5nIHBhbmVsXG4gICAgLy8gaGlkZSBwcmV2aW91cyBnYW1lIHBsYXlcbiAgICAvLyBzaG93IG5ldyBsZXZlbFxuXG5mdW5jdGlvbiBuZXh0TGV2ZWwoZSl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtb25lXCIpO1xuICAgICAgICBjb25zdCBuZXh0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtdHdvXCIpO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2aW91c0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KVxufVxuXG5uZXh0TGV2ZWwoKTtcblxudXNlckNsaWNrKDApO1xuXG5cbiJdfQ==
