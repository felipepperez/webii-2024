import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbjsonService } from '../dbjson/dbjson.service';

@Injectable()
export class UserService {
  constructor(private dbJSON: DbjsonService){}
  create(createUserDto: CreateUserDto) {
    return this.dbJSON.create(createUserDto);;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
