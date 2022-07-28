import mongoose, { mongo } from "mongoose";

interface ITodo {
  title: string;
  description: string;
}

interface todoModelInterface extends mongoose.Model<any> {
  build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
})

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr);
}

const Todo = mongoose.model<any, todoModelInterface>('Todo', todoSchema);

Todo.build({
  title: 'Some title',
  description: 'Some description'
});

export { Todo }