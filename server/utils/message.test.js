const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./messsage');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Nito';
    var text = 'testing';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Nito';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, url });
  });
});
