const assert = require('assert');
const run = require('./run.js');
const cowsay = require('cowsay');

describe('greeting app', function() {

    describe('plain mode', () => {

        it('<name> --plain', function() {
            const output = run(['./lib/greet.js', 'marty', '--plain']);
            assert.equal(output, 'hello marty\n');
        });    
        
        it('--plain <name>', function() {
            const output = run(['./lib/greet.js', 'marty', '--plain']);
            assert.equal(output, 'hello marty\n');
        });

        it('"stranger" when no name ', function() {
            const output = run(['./lib/greet.js', '--plain']);
            assert.equal(output, 'hello stranger\n');
        });
    });

    describe('cowsay mode', () => {

        it('<name>', function() {
            const output = run(['./lib/greet.js', 'marty']);
            const expected = cowsay.say({
                text : 'hello marty'
            });
            assert.equal(output, expected + '\n');
        });    
        
        it('"stranger" when no name ', function() {
            const output = run(['./lib/greet.js']);
            const expected = cowsay.say({
                text : 'hello stranger'
            });
            assert.equal(output, expected + '\n');
        });
    });
});