import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ description: 'ФИО пользователя' })
    name: string;

    @ApiProperty({ description: 'Email' })
    email: string;

    @ApiProperty({ description: 'Пароль' })
    password: string;
}
