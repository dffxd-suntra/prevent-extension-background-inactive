
let port;

function connectWithBackground() {
  port = chrome.runtime.connect();
}

setInterval(connectWithBackground, 3 * 60 * 1000);

connectWithBackground();




