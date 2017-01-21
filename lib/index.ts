import message = require('./message');
import requester = require('./requester');

requester.get('http://anglevisions.com', (err, res) => {
  if (err) {
    return console.log('Failed!');
  }

  const msg = message.hello();
  console.log(msg);
  //console.log(`Body is ${res}.`);
});