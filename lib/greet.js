const getOptions = require('./parse-options');
const makeGreeting = require('./make-greeting');

const options = getOptions(process.argv.slice(2));

console.log(makeGreeting(options));
