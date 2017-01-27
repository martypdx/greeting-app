const cowsay = require('cowsay');

module.exports = function makeGreeting(options) {
    const name = options.name || 'stranger';
    const greeting = options.greeting || 'hello';
    let message = `${greeting} ${name}`;
    if(!options.plain) message = cowsay.say({ text: message });
    return message;
};
