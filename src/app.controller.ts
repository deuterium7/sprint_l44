import { Controller, Request, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { User } from './users/entities/user.entity';

@Controller()
export class AppController {
  constructor(
      private readonly usersService: UsersService,
      private authService: AuthService
  ) {}

  @Get()
  hello() {
    return 'Hello World!';
  }

  @UseGuards(AuthGuard('local'))
  @ApiTags('Auth')
  @ApiResponse({ status: 201, description: 'Успешная операция'})
  @ApiResponse({ status: 401, description: 'Не удалось авторизоваться'})
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiTags('Auth')
  @ApiResponse({ status: 201, description: 'Успешная операция', type: User })
  @Post('auth/register')
  register(@Body() data: CreateUserDto) {
    return this.usersService.register(data);
  }
}