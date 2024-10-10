import { Document } from 'mongoose';

interface Task {
  _id?: string;
  description: string;
  completed: boolean;
}

export interface TodoList extends Document {
  title: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}
