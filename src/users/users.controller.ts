import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  //dependency injection => inject UsersService
  constructor(private userService: UsersService) {}
  @Get()
  getHelloWorld(): IResponse[] {
    // return 'Hello world';
    return this.userService.findAll();
  }

  @Get(':id')
  findByUserId(@Param('id') id: string): IResponse {
    return this.userService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.createUser(body);
  }
}
// decorator('something) method/propertyName: type
interface IResponse {
  id: number;
  name: string;
}
