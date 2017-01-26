const cowsay = require('cowsay');

module.exports = function makeGreeting(options) {
    const name = options.name || 'stranger';
    let greeting = `hello ${name}`;
    if(!options.plain) greeting = cowsay.say({ text: greeting });
    return greeting;
};
