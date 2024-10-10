import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TodoList } from './model/list.model';
import { CreateTodoListDto } from './dto/createList.dto';
import { AddTaskDto } from './dto/addtask.dto';

@Injectable()
export class ListService {
  constructor(@Inject('LIST_MODEL') private listModel: Model<TodoList>) {}

  async createNewList(createTodoListDto: CreateTodoListDto) {
    const list = new this.listModel(createTodoListDto);
    return list.save();
  }

  async addTasks(id: string, addTask: AddTaskDto) {
    const todoList = await this.listModel.findById(id);
    if (!todoList) {
      throw new Error('Todo list not found');
    }

    todoList.tasks.push({ ...addTask, completed: false });
    return todoList.save();
  }

  async removeTasks(id: string, taskId: string) {
    const todoList = await this.listModel.findById(id);
    if (!todoList) {
      throw new Error('Todo list not found');
    }

    todoList.tasks = todoList.tasks.filter(
      (task) => taskId !== task._id.toString(),
    );

    return todoList.save();
  }

  async completeTask(id: string, idtask: string): Promise<TodoList> {
    const todoList = await this.listModel.findById(id);
    if (!todoList) {
      throw new Error('Todo list not found');
    }

    const task = todoList.tasks.find((task) => task._id.toString() === idtask);
    if (!task) {
      throw new Error('Task not found');
    }

    task.completed = !task.completed;

    return todoList.save();
  }

  async getAllList() {
    return this.listModel.find({}, { _id: 1, title: 1 });
  }

  async getAllTasks(id: string) {
    return this.listModel.findOne({ _id: id });
  }
}
