import { Module } from '@nestjs/common';

import { DynamooseModule } from 'nestjs-dynamoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';

@Module({
    imports: [
        DynamooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService,
    ],
})
export class UserModule {}
