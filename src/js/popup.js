// popup.js
window.onload = function() {
    document.getElementById("highlight-crs").onclick = function() {
        chrome.extension.sendMessage({type: "likipe_liktime_highlightCrs"});
    };
    document.getElementById("display-crs").onclick = function() {
        chrome.extension.sendMessage({type: "likipe_liktime_displayCrs"});
    };
    document.getElementById("settings").onclick = function() {
		chrome.extension.sendMessage({type: "likipe_liktime_settings"});
    };
};