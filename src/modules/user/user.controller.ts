import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: UserService) {}
}
