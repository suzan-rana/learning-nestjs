import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'demodatabase',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [User],
  synchronize: true, //false for production
};
