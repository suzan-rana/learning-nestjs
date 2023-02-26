import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { isPasswordSame } from 'src/utils/hashPassword';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const UserDB = await this.userService.findUserByUsername(username);
    console.log('user database', UserDB);
    if (!UserDB) {
      throw new NotFoundException();
    }
    // if (UserDB[0]?.password === password) return UserDB;
    if (UserDB && isPasswordSame(UserDB[0]?.password, password)) {
      return UserDB;
    }
    return null;
  }

  async login(username: string) {
    //create a payload can be anything related to user like: userId, name,
    const payload = {
      username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
