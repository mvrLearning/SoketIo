const _ = require('lodash');
//addUser(Id,name,room)
//removeUser(id);
//getUser(id)
//getUserList(room)

class Users {
    constructor() {
        this.users = [];
    }
    addUser(id, name, room) {
        var user = { id, name, room }
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        // _.pullAllBy(this.users, [id], id)
        // var user = this.users.filter((user) => user.id === id);
        return user;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}


module.exports = { Users }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription() {
//         return `${this.name} is ${this.age} old.`
//     }
// }

// var me = new Person('Venkat', 24)
// var desc = me.getUserDescription();
// console.log(desc);