import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbjsonService } from '../dbjson/dbjson.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DbjsonService],
})
export class UserModule { }
