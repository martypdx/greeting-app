const assert = require('assert');
const makeGreeting = require('../lib/make-greeting');
const cowsay = require('cowsay');

describe('make greeting', function() {

    it('plain name', function() {
        const greeting = makeGreeting({ name: 'marty', plain: true });
        assert.equal(greeting, 'hello marty');
    });    

    it('cowsay name', function() {
        const greeting = makeGreeting({ name: 'marty' });
        const expected = cowsay.say({ text : 'hello marty' });
        assert.equal(greeting, expected);
    });    
    
    it('stranger is default', function() {
        const greeting = makeGreeting({ plain: true });
        assert.equal(greeting, 'hello stranger');
    });

    it('has custom greeting', () => {
        const greeting = makeGreeting({ greeting: 'hola', plain:true });
        assert.equal(greeting, 'hola stranger');
    });
});