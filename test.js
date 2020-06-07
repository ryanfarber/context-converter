var ContextBuilder = require('./index.js');

var data = {
	'username': 'johnsmith666',
	'user-id': '34325235'
};
var context = new ContextBuilder().TwitchContext(data)

console.log(context)