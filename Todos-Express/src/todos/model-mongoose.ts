import mongoose from 'mongoose';

const schemaTodo = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: Boolean,
});

export default mongoose.model('Todo', schemaTodo);
