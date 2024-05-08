import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/common/prisma.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository, JwtService],
})
export class UserModule {}
