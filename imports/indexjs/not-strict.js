// http://stackoverflow.com/a/10480227/4747661
var isStrict = (function() { return !this; }());
console.log('indexjs/not-strict.js:' + (isStrict ? 'true' : 'false'));
