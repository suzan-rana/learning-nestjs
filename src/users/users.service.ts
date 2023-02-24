import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private userArray: IResponse[] = [
    {
      id: 90,
      name: 'eh',
    },
    {
      id: 0,
      name: 'eh',
    },
    {
      id: 9210,
      name: 'eh',
    },
    {
      id: 9210,
      name: 'eh',
    },
    {
      id: 9210,
      name: 'eh',
    },
    {
      id: 9210,
      name: 'eh',
    },
    {
      id: 920,
      name: 'suzan ranaeh',
    },
    {
      id: 90,
      name: 'eh',
    },
    {
      id: 90,
      name: 'eh',
    },
    {
      id: 90,
      name: 'eh',
    },
    {
      id: 90,
      name: 'eh',
    },
  ];

  findAll(): IResponse[] {
    return this.userArray;
  }
  findById(userId: number): IResponse {
    return this.userArray.find((user: IResponse) => user.id === userId);
  }

  createUserInArray(body: CreateUserDto): IResponse[] {
    const newUser = { id: Date.now(), ...body };
    this.userArray.push(newUser);
    return this.userArray;
  }
}

interface IResponse {
  id: number;
  name: string;
}
