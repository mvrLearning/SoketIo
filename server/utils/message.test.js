var expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage',()=>{
    it('Should create a correct message Object',()=>{
        var from = 'Venkat';
        var text = 'Hi Hello How are You?';
        var message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    })
})