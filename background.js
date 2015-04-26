'use strict';

console.log('background.js loaded');

// We need to add a listener to gain access to the `port` variable
chrome.runtime.onConnect.addListener(function (port) {
  console.log(port);
  port.postMessage({
    type: 'connect'
  });
  port.onMessage.addListener(function (data) {
    // This will be logged to the background page - not the page you're viewing
    // See the 'Viewing logs from background.js' section of README for more
    console.log('background.js got message: ', data);
  });
});
