import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/common/prisma.service';
import { UserRepository } from 'src/user/user.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    PrismaService,
    UserRepository,
    JwtService,
  ],
})
export class AuthModule {}
