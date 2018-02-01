(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var score = 0;
var time = 15;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel, neededClicks) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(scoreLevel1, requireedScore, currentLevel);
        nextLevel(currentLevel, nextGameLevel);
        makedynamic(buttonLevel, neededClicks);
        timer();
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
        resetProgress();
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
userClick("level-one-button", "score-level1", 5, "level-one", "level-two", 5);
// Level Two
userClick("level-two-button", "score-level2", 15, "level-two", "level-three", 15);
// Level Three
userClick("level-three-button", "score-level3", 20, "level-three", "level-four", 20);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxPQUFPLEVBQVg7O0FBRUE7QUFDSTtBQUNBO0FBQ0osSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLGNBQTNCLEVBQTJDLFlBQTNDLEVBQXlELGFBQXpELEVBQXdFLFlBQXhFLEVBQXVGO0FBQ3JHLGFBQVMsY0FBVCxDQUF3QixXQUF4QixFQUNDLGdCQURELENBQ2tCLE9BRGxCLEVBQzJCLFVBQVUsS0FBVixFQUFpQjtBQUN4QyxpQkFBUyxXQUFULEVBQXNCLGNBQXRCLEVBQXNDLFlBQXRDO0FBQ0Esa0JBQVUsWUFBVixFQUF3QixhQUF4QjtBQUNBLG9CQUFZLFdBQVosRUFBeUIsWUFBekI7QUFDQTtBQUNILEtBTkQ7QUFPSCxDQVJEOztBQVVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0osSUFBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLFdBQUQsRUFBYyxjQUFkLEVBQThCLFdBQTlCLEVBQThDO0FBQzNEO0FBQ0EsUUFBTSxPQUFPLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsUUFBSSxVQUFVLGNBQWQsRUFBOEI7QUFDMUIsWUFBTSxLQUFLLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQVg7QUFDQSxXQUFHLEtBQUgsQ0FBUyxPQUFULEdBQW1CLE9BQW5CO0FBQ0EsWUFBTSxhQUFhLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBbkI7QUFDQSxtQkFBVyxXQUFYLEdBQXlCLEtBQXpCO0FBQ0Esa0JBQVUsQ0FBVjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsU0FBckMsR0FBaUQsTUFBakQ7QUFD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QUFDQTtBQUNBLFVBQVUsb0JBQVYsRUFBZ0MsY0FBaEMsRUFBZ0QsRUFBaEQsRUFBb0QsYUFBcEQsRUFBbUUsWUFBbkUsRUFBaUYsRUFBakYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHNjb3JlID0gMDtcbmxldCB0aW1lID0gMTVcblxuLy8gMS4gb24gY2xpY2sgb2YgaDMgQ0xpY2sgTWUgYnV0dG9uXG4gICAgLy8gYWRkIGEgcG9pbnRcbiAgICAvLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCwgbmVlZGVkQ2xpY2tzKT0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbkxldmVsKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhZGRTY29yZShzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICBtYWtlZHluYW1pYyhidXR0b25MZXZlbCwgbmVlZGVkQ2xpY2tzKTtcbiAgICAgICAgdGltZXIoKTtcbiAgICB9KTtcbn1cblxuLy8gMi4gaW5jcmVhc2Ugc2NvcmUgYXMgdXNlciBjbGlja3NcbiAgICAvLyBvbmNlIHVzZXIgcmVhY2hlcyByZXF1aXJlZCBzY29yZSxcbiAgICAvLyBzaG93IHdpbm5pbmcgcGFuZWxcbiAgICAvLyBwcmludCBzY29yZSB0byBwYWdlXG5jb25zdCBhZGRTY29yZSA9IChzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGhpZGVFbGVtZW50KSA9PiB7XG4gICAgc2NvcmUrKztcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NvcmVMZXZlbDEpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlXCIpWzBdO1xuICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoaWRlRWxlbWVudCkuY2xhc3NMaXN0ID0gXCJoaWRlXCI7XG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbiAgICAvLyBoaWRlIHdpbm5pbmcgcGFuZWxcbiAgICAvLyBoaWRlIHByZXZpb3VzIGdhbWUgcGxheVxuICAgIC8vIHNob3cgbmV3IGxldmVsXG5cbmZ1bmN0aW9uIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1vbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzZXRQcm9ncmVzcygpO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIHJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKTtcbiAgICAgICAgY29uc3QgbmV4dEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgd2lubmluZ1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcHJldmlvdXNHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV4dEdhbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdGltZXIoKXtcbiAgICBjb25zdCBjb3VudGRvd24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgdGltZS0tO1xuICAgICAgICBpZiAodGltZSA8PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvc2luZy1wYW5lbC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikudGV4dENvbnRlbnQgPSB0aW1lO1xuICAgIH0sIDEwMDApO1xufVxuXG4vLyBQcm9ncmVzcyBCYXJcblxuZnVuY3Rpb24gbWFrZWR5bmFtaWMoYnV0dG9uLCBuZWVkZWRjbGlja3MpIHtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBzdGVwc2l6ZSA9IDEwMCAvIG5lZWRlZGNsaWNrcztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b24pLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHByb2dyZXNzLnN0eWxlLndpZHRoLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xuICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKSArIHN0ZXBzaXplO1xuICAgICAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBzdGVwc2l6ZSA+IDEwID8gXCJZb3UgbWFkZSBpdCFcIiA6IFwib3VjaCwgbXkgZmluZ2VycnJyc1wiO1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCArIFwiJVwiO1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGluZm8uaW5uZXJIVE1MID0gXCJQcm9ncmVzczogXCIgKyB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9ncmVzcygpe1xuICAgIGxldCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICBpbmZvLmlubmVySFRNTCA9IGBcIlByb2dyZXNzOiAwJWA7XG59XG5cblxuLy8gTGV2ZWwgT25lXG51c2VyQ2xpY2soXCJsZXZlbC1vbmUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwxXCIsIDUsIFwibGV2ZWwtb25lXCIsIFwibGV2ZWwtdHdvXCIsIDUpO1xuLy8gTGV2ZWwgVHdvXG51c2VyQ2xpY2soXCJsZXZlbC10d28tYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwyXCIsIDE1LCBcImxldmVsLXR3b1wiLCBcImxldmVsLXRocmVlXCIsIDE1KTtcbi8vIExldmVsIFRocmVlXG51c2VyQ2xpY2soXCJsZXZlbC10aHJlZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDNcIiwgMjAsIFwibGV2ZWwtdGhyZWVcIiwgXCJsZXZlbC1mb3VyXCIsIDIwKTsiXX0=
