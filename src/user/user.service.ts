import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { v4 as uuid } from 'uuid';

import { User } from './user.model';


@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<User, string>
    ) {}

    async getUsers() {
        return this.userModel.scan().exec();
    }

    async getUser(userId: string) {
        return this.userModel.get(userId);
    }

    async createUser(user: User): Promise<User> {
        user.id = uuid();
        return this.userModel.create(user);
    }
}
