// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendMessage(tab.id, {type: request.type});
	});
	/*
    switch(request.type) {
        case "likipe_liktime_highlightCrs":
            chrome.tabs.getSelected(null, function(tab){
				chrome.tabs.sendMessage(tab.id, {type: request.type});
			});
        break;
        case "likipe_liktime_displayCrs":
            chrome.tabs.getSelected(null, function(tab){
				chrome.tabs.sendMessage(tab.id, {type: request.type});
			});
        break;
    }
    */
    return true;
});
