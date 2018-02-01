(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var score = 0;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(index, param1, param2, index1, index2) {
    document.getElementsByClassName('click-button')[index].addEventListener('click', function (event) {
        addScore(param1, param2);
        nextLevel(index1, index2);
    });
};

// 2. increase score as user clicks
// once user reaches required score,
// show winning panel
// print score to page
var addScore = function addScore(index1, index2) {
    score++;
    var para = document.getElementsByClassName("score")[index1];
    para.textContent = score;
    if (score === 5) {
        var el = document.getElementsByClassName("winning-panel-container")[0];
        el.style.display = "block";
        var scoreBoard = document.getElementsByClassName("score")[index2];
        scoreBoard.textContent = score;
        score = 0;
    }
};

// 3. on click of accept
// hide winning panel
// hide previous game play
// show new level

function nextLevel(index1, index2) {
    document.getElementById("accept-one").addEventListener("click", function () {
        var winningPanel = document.getElementsByClassName("winning-panel-container")[0];
        var previousGame = document.getElementsByClassName("level-container")[index1];
        var nextGame = document.getElementsByClassName("level-container")[index2];
        winningPanel.style.display = "none";
        previousGame.style.display = "none";
        nextGame.classList.remove("hide");
    });
}

// first level
// 0 = index of h3 Click Button
// 2 = index of p score
// 0 = index of winning panel p score
userClick(0, 2, 0, 0, 1);
userClick(1, 3, 0, 1, 2);
userClick(2, 4, 0, 2, 3);
// 0 = index of current container
// 1 = index of next container
// nextLevel(0, 1);

// userClick(1, 3, 0);
// userClick(2, 4, 0);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaOztBQUVBO0FBQ0k7QUFDQTtBQUNKLElBQU0sWUFBVSxTQUFWLFNBQVUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixFQUF3QixNQUF4QixFQUFnQyxNQUFoQyxFQUF5QztBQUN6RCxhQUFTLHNCQUFULENBQWdDLGNBQWhDLEVBQWdELEtBQWhELEVBQ0ssZ0JBREwsQ0FDc0IsT0FEdEIsRUFDK0IsVUFBVSxLQUFWLEVBQWlCO0FBQ3hDLGlCQUFTLE1BQVQsRUFBaUIsTUFBakI7QUFDQSxrQkFBVSxNQUFWLEVBQWtCLE1BQWxCO0FBQ0gsS0FKTDtBQUtDLENBTkQ7O0FBUUE7QUFDSTtBQUNBO0FBQ0E7QUFDSixJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBb0I7QUFDakM7QUFDQSxRQUFNLE9BQU8sU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxNQUF6QyxDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsUUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDYixZQUFNLEtBQUssU0FBUyxzQkFBVCxDQUFnQyx5QkFBaEMsRUFBMkQsQ0FBM0QsQ0FBWDtBQUNBLFdBQUcsS0FBSCxDQUFTLE9BQVQsR0FBbUIsT0FBbkI7QUFDQSxZQUFNLGFBQWEsU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxNQUF6QyxDQUFuQjtBQUNBLG1CQUFXLFdBQVgsR0FBeUIsS0FBekI7QUFDQSxnQkFBUSxDQUFSO0FBQ0g7QUFDSixDQVhEOztBQWFBO0FBQ0k7QUFDQTtBQUNBOztBQUVKLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixNQUEzQixFQUFrQztBQUM5QixhQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVU7QUFDdEUsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQXJCO0FBQ0EsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELE1BQW5ELENBQXJCO0FBQ0EsWUFBTSxXQUFXLFNBQVMsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELE1BQW5ELENBQWpCO0FBQ0EscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNBLHFCQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQSxpQkFBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLE1BQTFCO0FBQ0gsS0FQRDtBQVFIOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBLFVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDQSxVQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHNjb3JlID0gMDtcblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4gICAgLy8gYWRkIGEgcG9pbnRcbiAgICAvLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrPShpbmRleCwgcGFyYW0xLCBwYXJhbTIsIGluZGV4MSwgaW5kZXgyKT0+e1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xpY2stYnV0dG9uJylbaW5kZXhdXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGFkZFNjb3JlKHBhcmFtMSwgcGFyYW0yKTtcbiAgICAgICAgbmV4dExldmVsKGluZGV4MSwgaW5kZXgyKTtcbiAgICB9KTtcbn1cblxuLy8gMi4gaW5jcmVhc2Ugc2NvcmUgYXMgdXNlciBjbGlja3NcbiAgICAvLyBvbmNlIHVzZXIgcmVhY2hlcyByZXF1aXJlZCBzY29yZSxcbiAgICAvLyBzaG93IHdpbm5pbmcgcGFuZWxcbiAgICAvLyBwcmludCBzY29yZSB0byBwYWdlXG5jb25zdCBhZGRTY29yZSA9IChpbmRleDEsIGluZGV4MikgPT4ge1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVtpbmRleDFdO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICBpZiAoc2NvcmUgPT09IDUpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbaW5kZXgyXTtcbiAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbiAgICAvLyBoaWRlIHdpbm5pbmcgcGFuZWxcbiAgICAvLyBoaWRlIHByZXZpb3VzIGdhbWUgcGxheVxuICAgIC8vIHNob3cgbmV3IGxldmVsXG5cbmZ1bmN0aW9uIG5leHRMZXZlbChpbmRleDEsIGluZGV4Mil7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZXZlbC1jb250YWluZXJcIilbaW5kZXgxXTtcbiAgICAgICAgY29uc3QgbmV4dEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGV2ZWwtY29udGFpbmVyXCIpW2luZGV4Ml07XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cblxuLy8gZmlyc3QgbGV2ZWxcbi8vIDAgPSBpbmRleCBvZiBoMyBDbGljayBCdXR0b25cbi8vIDIgPSBpbmRleCBvZiBwIHNjb3JlXG4vLyAwID0gaW5kZXggb2Ygd2lubmluZyBwYW5lbCBwIHNjb3JlXG51c2VyQ2xpY2soMCwgMiwgMCwgMCwgMSk7XG51c2VyQ2xpY2soMSwgMywgMCwgMSwgMik7XG51c2VyQ2xpY2soMiwgNCwgMCwgMiwgMyk7XG4vLyAwID0gaW5kZXggb2YgY3VycmVudCBjb250YWluZXJcbi8vIDEgPSBpbmRleCBvZiBuZXh0IGNvbnRhaW5lclxuLy8gbmV4dExldmVsKDAsIDEpO1xuXG4vLyB1c2VyQ2xpY2soMSwgMywgMCk7XG4vLyB1c2VyQ2xpY2soMiwgNCwgMCk7XG5cbiJdfQ==
