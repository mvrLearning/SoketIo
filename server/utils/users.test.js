const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Venkat',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Mvr',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Mareddy',
            room: 'Node Course'
        }]
    });
    it('Should add new User', () => {
        debugger;
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove User', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('Should find the User', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('Should not find the User', () => {
        var userId = '9';
        var user = users.getUser(userId);
        expect(user).toBeUndefined();
    });

    it('Should return names for Node Course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Venkat', 'Mareddy'])
    });

    it('Should return names for React Course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Mvr'])
    });
})