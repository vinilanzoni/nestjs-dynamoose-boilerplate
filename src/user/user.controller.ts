import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param() params) {
        return this.userService.getUser(params.id);
    }

    @Post()
    createUser(@Body() user: User) {
        this.userService.createUser(user);
        return user;
    }
}
