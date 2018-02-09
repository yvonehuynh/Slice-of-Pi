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
        // Level Four
        userClick("level-four-button", "score-level4", 70, "level-four", "level-five");
        // Level Five
        userClick("level-five-button", "score-level5", 100, "level-five", "level-six");
        // Level Six
        userClick("level-six-button", "score-level6", 201, "level-six");

        showVisitPanel("load-visit-panel");
        showVisitPanel("reject");
        refreshPage("reload-game");
        refreshPage("reload-game2");
        refreshPage("play-again");
    });
}
initGame();

var score = 0;
var time = 35;

// 1. on click of h3 CLick Me button
// add a point
// print point to the screen using p tage
var userClick = function userClick(buttonLevel, scoreLevel1, requireedScore, currentLevel, nextGameLevel) {
    document.getElementById(buttonLevel).addEventListener('click', function (event) {
        addScore(buttonLevel, scoreLevel1, requireedScore, currentLevel, currentLevel, nextGameLevel);
        //nextLevel(currentLevel, nextGameLevel);
        //makedynamic(buttonLevel, requireedScore);
        // endGame(buttonLevel, scoreLevel1, requireedScore, currentLevel);
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
    if (score > 200) {
        var myel = document.getElementsByClassName("winning-game-panel")[0];
        myel.style.display = "block";
        var scoreBoard1 = document.getElementsByClassName("score")[0];
        scoreBoard1.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        document.getElementsByClassName("level-container")[0].style.display = "none";
        time = NaN;
        document.querySelector(".timer").style.display = "none";
    }
    if (score === requireedScore) {
        var el = document.getElementsByClassName("next-level-panel")[0];
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
        var winningPanel = document.getElementsByClassName("next-level-panel")[0];
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
        document.querySelector(".timer").textContent = "Timer: " + time;
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
        var el = document.getElementsByClassName("next-level-panel")[0];
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

// end game function
function endGame(buttonLevel, scoreLevel1, requireedScore, currentLevel) {
    score++;
    var para = document.getElementById(scoreLevel1);
    para.textContent = score;
    makedynamic(buttonLevel, requireedScore);
    if (score === requireedScore) {
        var scoreBoard = document.getElementsByClassName("score")[0];
        scoreBoard.textContent = score;
        score === 0;
        document.getElementById(currentLevel).style.display = "none";
        var winningPanel = document.getElementsByClassName("next-level-panel")[0];
        winningPanel.style.display = "none";
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQVMsUUFBVCxHQUFtQjtBQUNmLGFBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQVU7QUFDN0U7QUFDQSxpQkFBUyxjQUFULENBQXdCLGtCQUF4QixFQUE0QyxLQUE1QyxDQUFrRCxPQUFsRCxHQUEyRCxNQUEzRDtBQUNBLGlCQUFTLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTNDLENBQWlELE9BQWpELEdBQTJELE9BQTNEO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFyQyxDQUEyQyxPQUEzQyxHQUFvRCxPQUFwRDtBQUNBO0FBQ0E7QUFDQSxrQkFBVSxrQkFBVixFQUE4QixjQUE5QixFQUE4QyxDQUE5QyxFQUFpRCxXQUFqRCxFQUE4RCxXQUE5RDtBQUNBO0FBQ0Esa0JBQVUsa0JBQVYsRUFBOEIsY0FBOUIsRUFBOEMsRUFBOUMsRUFBa0QsV0FBbEQsRUFBK0QsYUFBL0Q7QUFDQTtBQUNBLGtCQUFVLG9CQUFWLEVBQWdDLGNBQWhDLEVBQWdELEVBQWhELEVBQW9ELGFBQXBELEVBQW1FLFlBQW5FO0FBQ0E7QUFDQSxrQkFBVSxtQkFBVixFQUErQixjQUEvQixFQUErQyxFQUEvQyxFQUFtRCxZQUFuRCxFQUFpRSxZQUFqRTtBQUNBO0FBQ0Esa0JBQVUsbUJBQVYsRUFBK0IsY0FBL0IsRUFBK0MsR0FBL0MsRUFBb0QsWUFBcEQsRUFBa0UsV0FBbEU7QUFDQTtBQUNBLGtCQUFVLGtCQUFWLEVBQThCLGNBQTlCLEVBQThDLEdBQTlDLEVBQW1ELFdBQW5EOztBQUVBLHVCQUFlLGtCQUFmO0FBQ0EsdUJBQWUsUUFBZjtBQUNBLG9CQUFZLGFBQVo7QUFDQSxvQkFBWSxjQUFaO0FBQ0Esb0JBQVksWUFBWjtBQUNI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Q0EsUUFBTSxPQUFPLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsZ0JBQVksV0FBWixFQUF5QixjQUF6QjtBQUNBLFFBQUksVUFBVSxjQUFkLEVBQThCO0FBQzFCLFlBQU0sYUFBYSxTQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQW5CO0FBQ0EsbUJBQVcsV0FBWCxHQUF5QixLQUF6QjtBQUNBLGtCQUFVLENBQVY7QUFDQSxpQkFBUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEdBQXNELE1BQXREO0FBQ0EsWUFBTSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0Msa0JBQWhDLEVBQW9ELENBQXBELENBQXJCO0FBQ0EscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNIO0FBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5mdW5jdGlvbiBpbml0R2FtZSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIG9uIGNsaWNrIG9mIHN0YXJ0IGdhbWUgYnV0dG9uLCBydW4gdGhlIGZvbGxvd2luZyBmdW5jdGlvbnNcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXN0YXJ0LXBhbmVsXCIpLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxldmVsLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsLW9uZVwiKS5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCI7XG4gICAgICAgIHRpbWVyKCk7XG4gICAgICAgIC8vIExldmVsIE9uZVxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1vbmUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwxXCIsIDUsIFwibGV2ZWwtb25lXCIsIFwibGV2ZWwtdHdvXCIpO1xuICAgICAgICAvLyBMZXZlbCBUd29cbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtdHdvLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsMlwiLCAyMCwgXCJsZXZlbC10d29cIiwgXCJsZXZlbC10aHJlZVwiKTtcbiAgICAgICAgLy8gTGV2ZWwgVGhyZWVcbiAgICAgICAgdXNlckNsaWNrKFwibGV2ZWwtdGhyZWUtYnV0dG9uXCIsIFwic2NvcmUtbGV2ZWwzXCIsIDUwLCBcImxldmVsLXRocmVlXCIsIFwibGV2ZWwtZm91clwiKTtcbiAgICAgICAgLy8gTGV2ZWwgRm91clxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1mb3VyLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsNFwiLCA3MCwgXCJsZXZlbC1mb3VyXCIsIFwibGV2ZWwtZml2ZVwiKTtcbiAgICAgICAgLy8gTGV2ZWwgRml2ZVxuICAgICAgICB1c2VyQ2xpY2soXCJsZXZlbC1maXZlLWJ1dHRvblwiLCBcInNjb3JlLWxldmVsNVwiLCAxMDAsIFwibGV2ZWwtZml2ZVwiLCBcImxldmVsLXNpeFwiKTtcbiAgICAgICAgLy8gTGV2ZWwgU2l4XG4gICAgICAgIHVzZXJDbGljayhcImxldmVsLXNpeC1idXR0b25cIiwgXCJzY29yZS1sZXZlbDZcIiwgMjAxLCBcImxldmVsLXNpeFwiKTtcblxuICAgICAgICBzaG93VmlzaXRQYW5lbChcImxvYWQtdmlzaXQtcGFuZWxcIik7XG4gICAgICAgIHNob3dWaXNpdFBhbmVsKFwicmVqZWN0XCIpO1xuICAgICAgICByZWZyZXNoUGFnZShcInJlbG9hZC1nYW1lXCIpO1xuICAgICAgICByZWZyZXNoUGFnZShcInJlbG9hZC1nYW1lMlwiKTtcbiAgICAgICAgcmVmcmVzaFBhZ2UoXCJwbGF5LWFnYWluXCIpO1xuICAgIH0pXG59XG5pbml0R2FtZSgpO1xuXG5sZXQgc2NvcmUgPSAwO1xubGV0IHRpbWUgPSAzNTtcblxuXG4vLyAxLiBvbiBjbGljayBvZiBoMyBDTGljayBNZSBidXR0b25cbi8vIGFkZCBhIHBvaW50XG4vLyBwcmludCBwb2ludCB0byB0aGUgc2NyZWVuIHVzaW5nIHAgdGFnZVxuY29uc3QgdXNlckNsaWNrID0gKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbkxldmVsKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFkZFNjb3JlKGJ1dHRvbkxldmVsLCBzY29yZUxldmVsMSwgcmVxdWlyZWVkU2NvcmUsIGN1cnJlbnRMZXZlbCwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgICAgIC8vbmV4dExldmVsKGN1cnJlbnRMZXZlbCwgbmV4dEdhbWVMZXZlbCk7XG4gICAgICAgICAgICAvL21ha2VkeW5hbWljKGJ1dHRvbkxldmVsLCByZXF1aXJlZWRTY29yZSk7XG4gICAgICAgICAgIC8vIGVuZEdhbWUoYnV0dG9uTGV2ZWwsIHNjb3JlTGV2ZWwxLCByZXF1aXJlZWRTY29yZSwgY3VycmVudExldmVsKTtcbiAgICAgICAgfSk7XG59XG5cblxuLy8gMi4gaW5jcmVhc2Ugc2NvcmUgYXMgdXNlciBjbGlja3Ncbi8vIG9uY2UgdXNlciByZWFjaGVzIHJlcXVpcmVkIHNjb3JlLFxuLy8gc2hvdyB3aW5uaW5nIHBhbmVsXG4vLyBwcmludCBzY29yZSB0byBwYWdlXG5jb25zdCBhZGRTY29yZSA9IChidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBoaWRlRWxlbWVudCwgY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsLCkgPT4ge1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICAgICAgaWYgKHNjb3JlID4gMjAwKXtcbiAgICAgICAgICAgIGNvbnN0IG15ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lubmluZy1nYW1lLXBhbmVsXCIpWzBdO1xuICAgICAgICAgICAgbXllbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVCb2FyZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgICAgICBzY29yZUJvYXJkMS50ZXh0Q29udGVudCA9IHNjb3JlO1xuICAgICAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZXZlbC1jb250YWluZXJcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGltZSA9IE5hTjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY29yZSA9PT0gcmVxdWlyZWVkU2NvcmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtbGV2ZWwtcGFuZWxcIilbMF07XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZVwiKVswXTtcbiAgICAgICAgICAgIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgICAgIHNjb3JlID09PSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudExldmVsKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBuZXh0TGV2ZWwoY3VycmVudExldmVsLCBuZXh0R2FtZUxldmVsKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG4vLyAzLiBvbiBjbGljayBvZiBhY2NlcHRcbi8vIGhpZGUgd2lubmluZyBwYW5lbFxuLy8gaGlkZSBwcmV2aW91cyBnYW1lIHBsYXlcbi8vIHNob3cgbmV3IGxldmVsXG5cbmZ1bmN0aW9uIG5leHRMZXZlbChjdXJyZW50TGV2ZWwsIG5leHRHYW1lTGV2ZWwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1vbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzZXRQcm9ncmVzcygpO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWxldmVsLXBhbmVsXCIpWzBdO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TGV2ZWwpO1xuICAgICAgICBjb25zdCBuZXh0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRHYW1lTGV2ZWwpO1xuICAgICAgICB3aW5uaW5nUGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2aW91c0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXh0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0aW1lcigpIHtcbiAgICBjb25zdCBjb3VudGRvd24gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW1lID0gdGltZSAtIDE7XG4gICAgICAgIGlmICh0aW1lIDw9IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd24pO1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV2ZWwtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9zaW5nLXBhbmVsLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKS50ZXh0Q29udGVudCA9IGBUaW1lcjogJHt0aW1lfWA7XG4gICAgfSwgMTAwMCk7XG59XG5cbi8vIFByb2dyZXNzIEJhclxuXG5mdW5jdGlvbiBtYWtlZHluYW1pYyhidXR0b24sIHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgbGV0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICBsZXQgc3RlcHNpemUgPSAxMDAgLyByZXF1aXJlZWRTY29yZTtcbiAgICBsZXQgd2lkdGggPSBwcm9ncmVzcy5zdHlsZS53aWR0aC5yZXBsYWNlKFwiJVwiLCBcIlwiKTtcbiAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKSArIHN0ZXBzaXplO1xuICAgIGlmICh3aWR0aCA+PSAxMDApIHtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBzdGVwc2l6ZSA+IDEwID8gXCJZb3UgbWFkZSBpdCFcIiA6IFwib3VjaCwgbXkgZmluZ2VycnJyc1wiO1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWxldmVsLXBhbmVsXCIpWzBdO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggKyBcIiVcIjtcbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlByb2dyZXNzOiBcIiArIHdpZHRoO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9ncmVzcygpIHtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgaW5mby5pbm5lckhUTUwgPSBgXCJQcm9ncmVzczogMCVgO1xufVxuXG4vLyBpZiB1c2VyIGNsaWNrcyBvbiBcIm5vXCIsIHNob3cgdGhlIHZpc2l0IHBhbmVsIFxuZnVuY3Rpb24gc2hvd1Zpc2l0UGFuZWwoZWxlbWVudElEKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElEKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidmlzaXQtcGFuZWxcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxldmVsLWNvbnRhaW5lclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb3NpbmctcGFuZWwtY29udGFpbmVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpbWVyXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxufVxuXG4vLyByZWZyZXNoIHRoZSBwYWdlXG5mdW5jdGlvbiByZWZyZXNoUGFnZShyZWxvYWRCdXR0b24pe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlbG9hZEJ1dHRvbikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7IFxuICAgIH0pXG59O1xuXG4vLyBlbmQgZ2FtZSBmdW5jdGlvblxuZnVuY3Rpb24gZW5kR2FtZShidXR0b25MZXZlbCwgc2NvcmVMZXZlbDEsIHJlcXVpcmVlZFNjb3JlLCBjdXJyZW50TGV2ZWwpe1xuICAgIHNjb3JlKys7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjb3JlTGV2ZWwxKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gc2NvcmU7XG4gICAgbWFrZWR5bmFtaWMoYnV0dG9uTGV2ZWwsIHJlcXVpcmVlZFNjb3JlKTtcbiAgICBpZiAoc2NvcmUgPT09IHJlcXVpcmVlZFNjb3JlKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmVcIilbMF07XG4gICAgICAgIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgICAgICAgc2NvcmUgPT09IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRMZXZlbCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCB3aW5uaW5nUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dC1sZXZlbC1wYW5lbFwiKVswXTtcbiAgICAgICAgd2lubmluZ1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59XG4iXX0=
