const cowsay = require('cowsay');

const options = getOptions(process.argv);

const name = options.name || 'stranger';
let greeting = `hello ${name}`;
if(!options.plain) greeting = cowsay.say({ text: greeting });


// const name = name || 'stranger';
console.log(greeting);

function getOptions(args) {

    const arg1 = args[2];
    const arg2 = args[3];

    let name = '';
    let plain = false;

    if(arg1 === '--plain') {
        plain = true;
        name = arg2;
    }
    else if(arg2 === '--plain') {
        plain = true;
        name = arg1;
    }
    else {
        name = arg1;
    }

    return { name, plain };

}

