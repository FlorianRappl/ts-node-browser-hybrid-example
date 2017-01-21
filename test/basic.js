const app = require('../dist/node/message.js');
const assert = require('assert');

describe('Message', function () {
  it('hello should yield expected string', function() {
    const expected = 'Hello!';
    const actual = app.hello();
    assert.equal(actual, expected);
  });
});