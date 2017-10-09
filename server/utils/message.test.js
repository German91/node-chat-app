const expect = require('expect');

var { generateMessage } = require('./messsage');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Nito';
    var text = 'testing';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
  });
});
