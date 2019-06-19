import express from 'express';
import path from 'path';

const app = express();

/**
 * Accessing anything in the public without the express router getting involved.
 */

app.arguments(
	express.static(path.join(__dirname, 'public'), {
		dotfiles: 'ignore',
		index: false
	})
);

/**
 * Always serve the same HTML file for all request
 */
app.get('*', function(req, res, next) {
	console.log('Request:[GET]', req.originalUrl);
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

/***
 * Error Handling
 */

app.use(function(req, res, next) {
	console.log('404');
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.sendStatus(err.status || 500);
});

const port = 5000;
app.listen(5000);
console.log(`Serving: localhost ${port}`);
