import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, name, cpf } = createUserDto;

    const user = await this.userRepository.get({
      where: {
        email,
      },
    });

    if (user) throw new ConflictException('email duplicated');

    const passHashed = await hash(password, 10);

    const newUser = await this.userRepository.create({
      data: {
        email,
        password: passHashed,
        name,
        cpf
      },
    });

    const { password: clonePass, ...result } = newUser;

    return result;
  }

  async findByEmail(email: string) {
    return await this.userRepository.get({
      where: {
        email,
      },
    });
  }

  async findById(id: string) {
    return await this.userRepository.get({
      where: {
        id,
      },
    });
  }
}
