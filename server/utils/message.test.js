var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');
describe('generateMessage', () => {
    it('Should create a correct message Object', () => {
        var from = 'Venkat';
        var text = 'Hi Hello How are You?';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });
    })
})

describe('generateLocationMessage', () => {
    it('should generate corect location object', () => {
        var from = 'Venkatesh';
        var lat = 1;
        var long = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var message = generateLocationMessage(from, lat, long);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, url });
    })
})