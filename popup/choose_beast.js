document.addEventListener("DOMContentLoaded", runFunction)

function runFunction() {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener("click", clickFunction);
    }
}

function clickFunction() {
    var animal = event.target.innerText
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: animal})
    })
}