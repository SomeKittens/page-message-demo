'use strict';

console.log('hint');

require('angular-hint');

document.querySelector('button').addEventListener('click', function () {
  console.log('btn click');
  window.postMessage({
    type: 'FROM_PAGE',
    text: 'Manley'
  }, '*');
});

console.log(angular.hint);