import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { taskStatusEnum } from '../entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({ description: 'Заголовок' })
    title: string;

    @ApiProperty({ description: 'Описание задачи' })
    description: string;

    @ApiProperty({ description: 'Статус' })
    status: taskStatusEnum;
}
