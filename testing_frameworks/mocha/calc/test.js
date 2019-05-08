const operations = require('./operations');
const assert = require('assert');
const expect = require('chai').expect;

it('should return true', () => {
    assert.equal(operations.add(3, 1), 4);
});

it('should add negative number', () => {
    expect(operations.add(-2, -3)).to.be.equal(-5);
});

it('should be able to subtract two nums', () => {
    expect(operations.subtract(-9, -7)).to.be.equal(-2);
});