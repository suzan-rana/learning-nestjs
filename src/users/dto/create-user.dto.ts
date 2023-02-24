import { IsAlphanumeric } from 'class-validator';
import { MaxLength } from 'class-validator/types/decorator/decorators';

// data transfer object =: schema rep of information
export class CreateUserDto {
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;
}
