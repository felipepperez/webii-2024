import { Injectable } from '@nestjs/common';
import JSONdb = require('simple-json-db');
import bcrypt = require('bcryptjs');

import uuid = require('uuid');

import * as path from 'path';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class DbjsonService {
    db: JSONdb;
    constructor() {
        this.db = new JSONdb(path.resolve(__dirname, '..', '..', 'storage.json'))
    }

    create = (createUserDto: CreateUserDto) => {
        const { firstname, lastname, email, password } = createUserDto;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const token = uuid.v4();

        const users = this.db.get('users');
        console.log(users);
        this.db.set('users', [...users, { id: uuid.v4(), firstname, lastname, email, password: hash, token, active: false }]);

        return token;
    }
}
