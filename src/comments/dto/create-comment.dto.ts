import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({ description: 'Сообщение' })
    message: string;

    @ApiProperty({
        description: 'ID пользователя',
        minimum: 1
    })
    userId: number;

    @ApiProperty({
        description: 'ID задачи',
        minimum: 1
    })
    taskId: number;
}
