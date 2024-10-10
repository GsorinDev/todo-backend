import * as mongoose from 'mongoose';

export const TodoListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Titre de la to-do list
    tasks: [
      {
        description: { type: String, required: true },
        completed: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true },
);
