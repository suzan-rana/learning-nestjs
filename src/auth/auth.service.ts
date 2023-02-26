import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    const UserDB = await this.userService.findUserByUsername(username);
    console.log('user database', UserDB);
    if (!UserDB) {
      throw new NotFoundException();
    }
    if (UserDB[0]?.password === password) return UserDB;
    return null;
  }
}
