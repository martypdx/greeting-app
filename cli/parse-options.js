module.exports = function getOptions(args) {

    const options = args.reduce((options, a) => {
        const split = a.split(':');
        const name = split[0].replace('--', ''); // --name
        const value = split[1]; // martha
        options[name] = value;
        return options;
    }, {});

    const name = options.name || 'stranger';
    const plain = options.hasOwnProperty('plain');
    return { name, plain };

};