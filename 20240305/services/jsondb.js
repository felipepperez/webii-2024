const JSONdb = require('simple-json-db');

const path = require('path');

const db = new JSONdb(path.resolve(__dirname,'..','storage.json'));

const uuid = require('uuid');

const create = ({ name }) => {
    const users = db.get('users');
    db.set('users', [...users, { id: uuid.v4(), name }]);
}

const update = ({ id, name }) => {
    const users = db.get('users');
    const userFinded = users.find((user) => user.id == id);

    if (userFinded) {
        userFinded.name = name;
        db.set('users', users);
        return true;
    }
    return false;
}

const read = () => {
    return db.get('users');
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

module.exports = { create, read, update, remove }