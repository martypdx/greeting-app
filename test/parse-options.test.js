const assert = require('assert');
const getOptions = require('../cli/parse-options');

describe('parse options', () => {

    it('<name> --plain', () => {
        assert.deepEqual(
            getOptions(['martha', '--plain']), 
            { name: 'martha', plain: true }
        );
    });

    it('--plain <name>', () => {
        assert.deepEqual(
            getOptions(['--plain', 'martha']), 
            { name: 'martha', plain: true }
        );
    });

    it('<name>', () => {
        assert.deepEqual(
            getOptions(['martha']), 
            { name: 'martha', plain: false }
        );
    });
});
