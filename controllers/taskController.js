const Task = require("../models/Task");
const sendEmail = require("../utils/sendEmail");

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    let filter = {
      user: req.user.id,
    };

    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.priority) {
         filter.priority = req.query.priority;
    }
    if (req.query.completed) {
         filter.completed = req.query.completed === "true";
    }
    if (req.query.dueDate) {
         filter.dueDate = new Date(req.query.dueDate);
    }
    if (req.query.search) {
         filter.title = {
                 $regex: req.query.search,
                 $options: "i",
       };
   }
     const page = Number(req.query.page) || 1;
     const limit = Number(req.query.limit) || 5;

    let query = Task.find(filter);

if (req.query.sort === "dueDate") {
  query = query.sort({ dueDate: 1 });
}

if (req.query.sort === "priority") {
  query = query.sort({ priority: 1 });
}

const tasks = await query
  .skip((page - 1) * limit)
  .limit(limit);

  
    const totalTasks = await Task.countDocuments(filter);

    res.json({
  currentPage: page,
  totalPages: Math.ceil(totalTasks / limit),
  totalTasks,
  tasks,
});

 } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    Object.assign(task, req.body);

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await task.deleteOne();

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTaskStats = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments({
      user: req.user.id,
    });

    const completedTasks = await Task.countDocuments({
      user: req.user.id,
      completed: true,
    });

    const pendingTasks = await Task.countDocuments({
      user: req.user.id,
      completed: false,
    });

    res.json({
      totalTasks,
      completedTasks,
      pendingTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const sendReminder = async (req, res) => {
  try {
    const { email } = req.body;

    await sendEmail(
      email,
      "Task Reminder",
      "Don't forget to complete your tasks today!"
    );

    res.json({
      message: "Reminder email sent",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskStats,
  sendReminder
};