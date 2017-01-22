import message = require('./message');
import requester = require('./requester');

module.exports = function () {
  requester.get('http://anglevisions.com', (err, res) => {
    if (err) {
      return console.log('Failed!');
    }
  
    const msg = message.hello();
    console.log(`${msg} - the body is: ${res}.`);
  });
};
