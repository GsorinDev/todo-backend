import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';

const logger = new Logger();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      logger.log('Database connection started');
      return mongoose.connect(
        process.env.MONGO_URL || 'mongodb://localhost:27017/api-todo-backend',
      );
    },
  },
];
