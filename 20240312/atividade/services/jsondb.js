const JSONdb = require('simple-json-db');
const bcrypt = require('bcryptjs');

const path = require('path');

const db = new JSONdb(path.resolve(__dirname, '..', 'storage.json'));

const uuid = require('uuid');

const create = ({ firstName, lastName, email, password }) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const token = uuid.v4();

    const users = db.get('users');
    db.set('users', [...users, { id: uuid.v4(), firstName, lastName, email, password: hash, token, active: false }]);

    return token;
}

const active = ({ token }) => {
    const users = db.get('users');
    const userFinded = users.find((user) => user.token == token);
    console.log(userFinded);

    if (userFinded) {
        userFinded.active = true;
        userFinded.token = undefined;
        db.set('users', users);
        return userFinded.email;
    }
    return false;
}

const update = ({ id, firstName, lastName, email }) => {
    const users = db.get('users');
    const userFinded = users.find((user) => user.id == id);

    if (userFinded) {
        userFinded.firstName = firstName;
        userFinded.lastName = lastName;
        userFinded.email = email;
        db.set('users', users);
        return true;
    }
    return false;
}

const read = () => {
    const users = db.get('users');
    for(let user of users){
        delete user.password;
    }
    return users;
}

const remove = ({ id }) => {
    const users = db.get('users');
    const userFiltered = users.filter((user) => user.id != id);

    if (userFiltered) {
        db.set('users', userFiltered);
        return true;
    }
    return false;
}

module.exports = { create, read, update, remove, active }