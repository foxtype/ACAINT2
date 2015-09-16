'strict mode'; //disables certain Javascript functions which almost never get used intentionally

var prompt = require('prompt');

prompt.start()

prompt.get(['username', 'email'], function (error, result) {
	
	//console.log('First Input: ' + result['first']);
	//console.log('Second Input: ' + result['second']);

// 'hello <username>, your email is <email>''
	console.log('hello ' + result.username + ', your email is ' + result.email)
});	