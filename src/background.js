// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "likipe_liktime_set_setting":
            console.log(request);
        break;
        default:
            chrome.tabs.getSelected(null, function(tab){
                chrome.tabs.sendMessage(tab.id, {type: request.type});
            });
        break;
    }

    return true;
});
