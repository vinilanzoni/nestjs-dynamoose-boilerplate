import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'User',
        tableName: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
