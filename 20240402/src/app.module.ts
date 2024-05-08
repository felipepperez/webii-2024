import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DbjsonService } from './dbjson/dbjson.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, DbjsonService],
})
export class AppModule {}
