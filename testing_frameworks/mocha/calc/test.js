const operations = require('./operations');
const assert = require('assert');

it('should return true', () => {
    assert.equal(operations.add(3, 1), 2);
});