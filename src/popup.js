// popup.js
window.onload = function() {
    document.getElementById("highlight-crs").onclick = function() {
        chrome.extension.sendMessage({type: "likipe_liktime_set_setting", key: "cr_displayed", value: "highlight"});
    };
};
