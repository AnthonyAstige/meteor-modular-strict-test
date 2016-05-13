'use strict';
// http://stackoverflow.com/a/10480227/4747661
var isStrict = (function() { return !this; }());
console.log('packagejson/strict.js:' + (isStrict ? 'true' : 'false'));
