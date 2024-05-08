import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);

    const payload = {
      username: user.email,
      sub: {
        name: user.name,
      },
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '20s',
          secret: process.env.SECRET_KEY,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.REFRESH_TOKEN_KEY,
        }),
      },
    };
  }

  protected async validateUser(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.userService.findByEmail(username);

    if (user && (await compare(password, user.password))) {
      const { password: passHash, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('Username or Password are not correct');
  }

  async refreshToken(user: any) {
    const payload = {
      username: user.username,
      sub: user.sub,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
        secret: process.env.SECRET_KEY,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.REFRESH_TOKEN_KEY,
      }),
    };
  }
}
