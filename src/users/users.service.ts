import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { hashPassword } from 'src/utils/hashPassword';

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
  async createUser(createUserDto: CreateUserDto) {
    // creating the user not async
    const userInDB = await this.userRepository.findBy({
      username: createUserDto.username,
    });
    console.log('user in data', userInDB);
    if (userInDB.length !== 0) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    } else {
      const hashedPassword = await hashPassword(createUserDto.password);
      const newUser = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
        //   createdAt: Date.now(),
      });
      //saving the user async methos
      return this.userRepository.save(newUser);
    }
  }

  //deleteUser
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  // delete all users
  deleteAllUsers() {
    return this.userRepository.clear();
  }

  findUserByUsername(username: string) {
    return this.userRepository.findBy({ username });
  }
}
