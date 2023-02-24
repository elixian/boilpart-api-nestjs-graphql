import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/models/user.model';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver],
})
export class UserModule {}
