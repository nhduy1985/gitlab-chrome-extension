// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    var options = {};
    if (window.localStorage.liklab_options !== undefined) {
        options = JSON.parse(window.localStorage.liklab_options);
    }
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: request.type, options: options});
    });
    return true;
});
