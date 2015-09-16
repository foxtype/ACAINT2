'use strict';

var prompt = require('prompt');
prompt.start();

//prompt.get(['name'], function(err, result) {
//	console.log('hello, ' + result['name'] + '!');
//});





prompt.get(['word'], function(err, result) {
var name = result.word[0];
var restWord = result.word.replace(name, '');
console.log(restWord + name + 'ay');
});