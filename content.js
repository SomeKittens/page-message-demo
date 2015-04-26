/**
 * This is the content script ( https://developer.chrome.com/extensions/content_scripts )
 * It is currently acting like a bridge between the extension proper and the page
 */
(function () {
  'use strict';

  console.log('content.js loaded');

  // This lets us communicate with our extension
  // https://developer.chrome.com/extensions/content_scripts
  var port = chrome.runtime.connect();
  // listen for data from the extention
  port.onMessage.addListener(function (message) {
    console.log('Extention sent message', message);
  });

  // Listen for data from the page
  window.addEventListener('message', function(event) {
    // We only accept messages from ourselves
    if (event.source !== window) {
      return;
    }

    if (event.data.type && event.data.type === 'FROM_PAGE') {
      console.log('Content script received: ' + event.data.text);
      port.postMessage(event.data.text);
    }
  }, false);

  // Write our script to the page
  // http://stackoverflow.com/a/9517879/1216976
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('web.js');
  // Clean up after ourselves
  s.onload = function () {
    this.parentNode.removeChild(this);
  };
  (document.head||document.documentElement).appendChild(s);
})();