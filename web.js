// Wrap everything in an IIFE to keep our stuff "private"
(function () {
  'use strict';

  console.log('web.js loaded');

  document.querySelector('button').addEventListener('click', function () {
    console.log('Button was clicked');
    // We can access JS variables declared from the page here
    window.postMessage({
      type: 'FROM_PAGE',
      text: message
    }, '*');
  });
})();