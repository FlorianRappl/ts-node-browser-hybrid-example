const nock = require('nock');
const assert = require('assert');
const requests = [];
const requester = require('../dist/node/requester.js');

const scope = nock('http://www.google.de')
  .persist()
  .log(req => requests.push(req))
  .get('/')
  .reply(200, 'This is a mocked response');

describe('Application', function () {
  it('should trigger nock on the right URL', function() {
    const expected = requests.length + 1;
    requester.get('http://www.google.de/', (err, res) => {});
    const actual = requests.length;
    assert.equal(actual, expected);
  });
});

describe('Application', function () {
  it('should not trigger nock on the wrong URL', function() {
    const expected = requests.length;
    requester.get('http://www.bing.com/', (err, res) => {});
    const actual = requests.length;
    assert.equal(actual, expected);
  });
});
