// popup.js
window.onload = function() {
    document.getElementById("highlight-crs").onclick = function() {
        chrome.extension.sendMessage({type: "likipe_liktime_highlightCrs"});
    };
    document.getElementById("display-crs").onclick = function() {
        chrome.extension.sendMessage({type: "likipe_liktime_displayCrs"});
    };
    document.getElementById("settings").onclick = function() {
		var optionsUrl = chrome.extension.getURL('options.html');

		chrome.tabs.query({url: optionsUrl}, function(tabs) {
		if (tabs.length) {
			chrome.tabs.update(tabs[0].id, {active: true});
		} else {
			chrome.tabs.create({url: optionsUrl});
		}
		});
    };
};