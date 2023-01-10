
let mainPort;
let num = 0;

chrome.runtime.onConnect.addListener((port) => {
  console.log("Background alived:" + num * 3 +  " minutes.");
  mainPort = port;
  num++;
});


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});