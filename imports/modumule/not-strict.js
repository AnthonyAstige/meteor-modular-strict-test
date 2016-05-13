// http://stackoverflow.com/a/10480227/4747661
var isStrict = (function() { return !this; })();
console.log('Inside not-strict.js:');
console.log(isStrict);
