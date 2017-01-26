module.exports = function getOptions(args) {

    const arg1 = args[0];
    const arg2 = args[1];

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

};