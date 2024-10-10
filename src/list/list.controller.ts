import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ListService } from './list.service';
import { CreateTodoListDto } from './dto/createList.dto';
import { AddTaskDto } from './dto/addtask.dto';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  async createNewList(@Body() createTodoListDto: CreateTodoListDto) {
    return this.listService.createNewList(createTodoListDto);
  }

  @Post(':id')
  async addTasks(@Param('id') id: string, @Body() addTask: AddTaskDto) {
    return this.listService.addTasks(id, addTask);
  }

  @Delete(':id/task/:taskId')
  async removeTasks(@Param('id') id: string, @Param('taskId') taskId: string) {
    return this.listService.removeTasks(id, taskId);
  }

  @Put(':id/task/:taskId')
  async updateStateTask(
    @Param('id') id: string,
    @Param('taskId') taskId: string,
  ) {
    return this.listService.completeTask(id, taskId);
  }

  @Get()
  async getAllList() {
    return this.listService.getAllList();
  }

  @Get(':id')
  async getTaskList(@Param('id') id: string) {
    return this.listService.getAllTasks(id);
  }
}
