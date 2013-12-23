chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "likipe_liktime_highlightCrs":
            likipe_liktime_crs_hightlight();
            break;
        case "likipe_liktime_displayCrs":
            likipe_liktime_crs_display();
        break;
    }
});

var likipe_liktime_crs_hightlight = function() {
    var link = document.querySelectorAll("#comments_event_filter");
    if (link.length === 0) {
        return;
    }
    //else
    //If comments is not being loaded, then load it
    if(link.item(0).parentNode.classList.contains("inactive") === true) {
        link.item(0).click();
    }
    //High light event-item
    var items = document.querySelectorAll(".event-item .md");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.innerHTML.match(/CR/) !== null ) {
            //go upper to the 'event-item'
            item.parentNode.parentNode.parentNode.style.background = "#FFFF00";
        }
    }
    return;
};

var likipe_liktime_crs_display = function() {
    var link = document.querySelectorAll("#comments_event_filter");
    if (link.length === 0) {
        return;
    }
    //else
    //If comments is not being loaded, then load it
    if(link.item(0).parentNode.classList.contains("inactive") === true) {
        //link.item(0).click();
        link.item(0).dispatchEvent("click");
    }
    //Hide all event-item
    var items = document.querySelectorAll(".event-item");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.style.display = "none";
    }

    //Display CR item only
    items = document.querySelectorAll(".event-item .md");
    for (i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.innerHTML.match(/CR/) !== null ) {
            //go upper to the 'event-item'
            item.parentNode.parentNode.parentNode.style.display = "block";
        }
    }
    return;
};

document.querySelectorAll(".content_list").item(0).addEventListener("DOMNodeInserted", function (ev) {
    var displayType = "display-only";
    chrome.storage.local.get('likipe_gitlab_cr_displayed', function (result) {
        displayType = result.likipe_gitlab_cr_displayed;
    });
    var link = document.querySelectorAll("#comments_event_filter");
    if (link.length === 0) {
        return;
    }
    //else
    //If comments is not being loaded, then load it
    if(link.item(0).parentNode.classList.contains("inactive") === true) {
        link.item(0).click();
    }
    //High light event-item
    var items = document.querySelectorAll(".event-item .md");
    console.log(displayType);
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.innerHTML.match(/CR/) !== null ) {
            //go upper to the 'event-item'
            if (displayType === "highlight") {
                item.parentNode.parentNode.parentNode.style.background = "#FFFF00";
            }
            else {
                if (displayType === "display-only") {
                    item.parentNode.parentNode.parentNode.style.display = "block";
                }
            }
        }
        else {
            //go upper to the 'event-item'
            if (displayType === "highlight") {
                //Do nothing
            }
            else {
                if (displayType === "display-only") {
                    item.parentNode.parentNode.parentNode.style.display = "none";
                }
            }
        }
    }
    return;
}, false);