if (process.env.NODE_ENV === 'production') {
	module.exports = require('./production.constant');
} else if (process.env.NODE_ENV === 'qa') {
	process.env.NODE_ENV = 'qa';
	console.log("process.env.ENV", process.env.NODE_ENV)
	module.exports = require('./qa.constant');

} else if (process.env.NODE_ENV === 'development') {

	process.env.NODE_ENV = 'development';
	console.log("process.env.ENV", process.env.NODE_ENV)
	module.exports = require('./develop.constant');

} else {
	process.env.NODE_ENV = 'local';
	console.log("process.env.ENV", process.env.NODE_ENV)
	module.exports = require('./local.constant');
}