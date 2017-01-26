const cowsay = require('cowsay');
const getOptions = require('./getOptions');

const options = getOptions(process.argv);

const name = options.name || 'stranger';
let greeting = `hello ${name}`;
if(!options.plain) greeting = cowsay.say({ text: greeting });

console.log(greeting);
