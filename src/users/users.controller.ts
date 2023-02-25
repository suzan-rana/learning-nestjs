import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Body, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';

@UseGuards(new AuthGuard())
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUsers() {
    return await this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }

  @Delete()
  deleteAllUser() {
    return this.userService.deleteAllUsers();
  }
}
