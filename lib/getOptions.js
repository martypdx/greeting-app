module.exports = 
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

};