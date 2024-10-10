import { Connection } from 'mongoose';
import { TodoListSchema } from '../schema/list.shema';

export const listProvider = [
  {
    provide: 'LIST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('List', TodoListSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
