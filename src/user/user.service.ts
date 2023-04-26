import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UserRepository } from './user.repository';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userData: Omit<User, 'id'>) {
    const userId = uuid();
    const user: User = { id: userId, ...userData };
    return await this.userRepository.create(user);
  }

  async update(id: string, user: Partial<User>) {
    return await this.userRepository.update({ id }, user);
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ id });
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
}
