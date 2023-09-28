import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ description: 'Заголовок' })
    title: string;

    @ApiProperty({ description: 'Описание задачи' })
    description: string;
}
