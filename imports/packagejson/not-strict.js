// http://stackoverflow.com/a/10480227/4747661
var isStrict = (function() { return !this; }());
console.log('packagejson/not-strict.js is ' + (isStrict ? 'STRICT' : 'NOT-STRICT'));
