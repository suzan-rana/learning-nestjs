import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  // injecting a repository
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  //get all users{}
  getAllUsers() {
    // returns a promise
    return this.userRepository.find();
  }

  //creating a user
  createUser(createUserDto: CreateUserDto) {
    // creating the user not async
    const newUser = this.userRepository.create({
      ...createUserDto,
      //   createdAt: Date.now(),
    });
    //saving the user async methos
    return this.userRepository.save(newUser);
  }

  //deleteUser
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  // delete all users
  deleteAllUsers() {
    return this.userRepository.clear();
  }
}
