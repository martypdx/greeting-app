const assert = require('assert');
const child_process = require('child_process');

describe('greeting app', function() {

    describe('plain mode', () => {

        it('--name:<name> --plain', function() {
            const output = child_process.execFileSync(
                'node',
                ['./cli/greet.js', '--name:marty', '--plain'],
                { encoding: 'utf8' }
            );
            assert.equal(output, 'hello marty\n');
        });

    });

});