const assert = require('assert');
const getOptions = require('../cli/parse-options');

describe('parse options', () => {

    it('--name:<name> --plain', () => {
        assert.deepEqual(
            getOptions(['--name:martha', '--plain']), 
            { name: 'martha', plain: true }
        );
    });

    it('--plain --name:<name>', () => {
        assert.deepEqual(
            getOptions(['--plain', '--name:martha']), 
            { name: 'martha', plain: true }
        );
    });

    it('--name:<name>', () => {
        assert.deepEqual(
            getOptions(['--name:martha']), 
            { name: 'martha' }
        );
    });

    it('--greeting:<greeting> --name:<name>', () => {
        assert.deepEqual(
            getOptions(['--greeting:hola', '--name:martha']), 
            { greeting: 'hola', name: 'martha' }
        );
    });
});
