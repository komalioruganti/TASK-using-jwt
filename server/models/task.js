const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      due_date: {
        type: Date,
        required: true,
      },
      priority: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3], 
      },
      status: {
        type: String,
        required: true,
        enum: ['TODO', 'IN_PROGRESS', 'DONE'],
        default: 'TODO',
      },
      deleted_at: {
        type: Date,
        default: null,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      subTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubTask' }],
    });
module.exports = mongoose.model("Task", TaskSchema);