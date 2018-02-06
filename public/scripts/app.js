(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function initGame() {
    document.getElementById("start-game-button").addEventListener("click", function () {
        // on click of start game button, run the following functions
        document.getElementById("game-start-panel").style.display = "none";
        document.getElementById("level-one").style.display = "block";
        console.log("hello");
        timer();
        userClick("level-one-button", "score-level1", 5, "level-one", "level-two");
        // Level Two
        userClick("level-two-button", "score-level2", 50, "level-two", "level-three");
    });
}
initGame();

var score = 0;
var time = 15;

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsUUFBVCxHQUFtQjtBQUNmLGFBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQVU7QUFDN0U7QUFDQSxpQkFBUyxjQUFULENBQXdCLGtCQUF4QixFQUE0QyxLQUE1QyxDQUFrRCxPQUFsRCxHQUEyRCxNQUEzRDtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBckMsQ0FBMkMsT0FBM0MsR0FBb0QsT0FBcEQ7QUFDQSxnQkFBUSxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsQ0FBOUMsRUFBaUQsV0FBakQsRUFBOEQsV0FBOUQ7QUFDQTtBQUNBLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLEVBQTlDLEVBQWtELFdBQWxELEVBQStELGFBQS9EO0FBQ0gsS0FURDtBQVVIO0FBQ0Q7O0FBRUEsSUFBSSxRQUFRLENBQVo7QUFDQSxJQUFJLE9BQU8sRUFBWDs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsY0FBM0IsRUFBMkMsWUFBM0MsRUFBeUQsYUFBekQsRUFBd0UsWUFBeEUsRUFBeUY7QUFDdkcsYUFBUyxjQUFULENBQXdCLFdBQXhCLEVBQ0ssZ0JBREwsQ0FDc0IsT0FEdEIsRUFDK0IsVUFBVSxLQUFWLEVBQWlCO0FBQ3hDLGlCQUFTLFdBQVQsRUFBc0IsV0FBdEIsRUFBbUMsY0FBbkMsRUFBbUQsWUFBbkQsRUFBaUUsWUFBakUsRUFBK0UsYUFBL0U7QUFDQTtBQUNBO0FBQ0gsS0FMTDtBQU1ILENBUEQ7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNLFdBQVcsU0FBWCxR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VCxHQUFtQixPQUFuQjtBQUNILEtBTEQsTUFLTztBQUNILGdCQUFRLFFBQVEsR0FBaEI7QUFDQSxpQkFBUyxLQUFULENBQWUsS0FBZixHQUF1QixLQUF2QjtBQUNBLGFBQUssU0FBTCxHQUFpQixlQUFlLEtBQWhDO0FBQ0g7QUFDSjs7QUFFRCxTQUFTLGFBQVQsR0FBeUI7QUFDckIsUUFBSSxXQUFXLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsUUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsYUFBUyxLQUFULENBQWUsS0FBZixHQUF1QixHQUF2QjtBQUNBLFNBQUssU0FBTDtBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuZnVuY3Rpb24gaW5pdEdhbWUoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAvLyBvbiBjbGljayBvZiBzdGFydCBnYW1lIGJ1dHRvbiwgcnVuIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1zdGFydC1wYW5lbFwiKS5zdHlsZS5kaXNwbGF5PSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbC1vbmVcIikuc3R5bGUuZGlzcGxheT0gXCJibG9ja1wiO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIHRpbWVyKCk7XG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLW9uZS1idXR0b25cIiwgXCJzY29yZS1sZXZlbDFcIiwgNSwgXCJsZXZlbC1vbmVcIiwgXCJsZXZlbC10d29cIik7XG4gICAgICAgIC8vIExldmVsIFR3b1xuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC10d28tYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwyXCIsIDUwLCBcImxldmVsLXR3b1wiLCBcImxldmVsLXRocmVlXCIpO1xuICAgIH0pXG59XG5pbml0R2FtZSgpO1xuXG5sZXQgc2NvcmUgPSAwO1xubGV0IHRpbWUgPSAxNVxuXG5cbi8vIDEuIG9uIGNsaWNrIG9mIGgzIENMaWNrIE1lIGJ1dHRvblxuLy8gYWRkIGEgcG9pbnRcbi8vIHByaW50IHBvaW50IHRvIHRoZSBzY3JlZW4gdXNpbmcgcCB0YWdlXG5jb25zdCB1c2VyQ2xpY2sgPSAoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsLCBuZWVkZWRDbGlja3MpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25MZXZlbClcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhZGRTY29yZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgICAgICAvL25leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICAgICAgLy9tYWtlZHluYW1pYyhidXR0b25MZXZlbCwgcmVxdWlyZWVkU2NvcmUpO1xuICAgICAgICB9KTtcbn1cblxuXG4vLyAyLiBpbmNyZWFzZSBzY29yZSBhcyB1c2VyIGNsaWNrc1xuLy8gb25jZSB1c2VyIHJlYWNoZXMgcmVxdWlyZWQgc2NvcmUsXG4vLyBzaG93IHdpbm5pbmcgcGFuZWxcbi8vIHByaW50IHNjb3JlIHRvIHBhZ2VcbmNvbnN0IGFkZFNjb3JlID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGhpZGVFbGVtZW50LCBjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpID0+IHtcbiAgICBzY29yZSsrO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY29yZUxldmVsMSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgIG1ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgaWYgKHNjb3JlID09PSByZXF1aXJlZWRTY29yZSkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aW5uaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVswXTtcbiAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICBzY29yZSA9PT0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpO1xuICAgIH1cbn1cblxuLy8gMy4gb24gY2xpY2sgb2YgYWNjZXB0XG4vLyBoaWRlIHdpbm5pbmcgcGFuZWxcbi8vIGhpZGUgcHJldmlvdXMgZ2FtZSBwbGF5XG4vLyBzaG93IG5ldyBsZXZlbFxuXG5mdW5jdGlvbiBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1wYW5lbC1jb250YWluZXJcIilbMF07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgIGNvbnN0IG5leHRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEdhbWVMZXZlbCk7XG4gICAgICAgIHdpbm5pbmdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByZXZpb3VzR2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5leHRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRpbWVyKCkge1xuICAgIGNvbnN0IGNvdW50ZG93biA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWUgPSB0aW1lIC0gMTtcbiAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93bik7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXZlbC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb3NpbmctcGFuZWwtY29udGFpbmVyXCIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpLnRleHRDb250ZW50ID0gdGltZTtcbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gUHJvZ3Jlc3MgQmFyXG5cbmZ1bmN0aW9uIG1ha2VkeW5hbWljKGJ1dHRvbiwgcmVxdWlyZWVkU2NvcmUpIHtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBzdGVwc2l6ZSA9IDEwMCAvIHJlcXVpcmVlZFNjb3JlO1xuICAgIGxldCB3aWR0aCA9IHByb2dyZXNzLnN0eWxlLndpZHRoLnJlcGxhY2UoXCIlXCIsIFwiXCIpO1xuICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgc3RlcHNpemU7XG4gICAgaWYgKHdpZHRoID49IDEwMCkge1xuICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9IHN0ZXBzaXplID4gMTAgPyBcIllvdSBtYWRlIGl0IVwiIDogXCJvdWNoLCBteSBmaW5nZXJycnJzXCI7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpbm5pbmctcGFuZWwtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggKyBcIiVcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlByb2dyZXNzOiBcIiArIHdpZHRoO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9ncmVzcygpIHtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgaW5mby5pbm5lckhUTUwgPSBgXCJQcm9ncmVzczogMCVgO1xufVxuIl19
