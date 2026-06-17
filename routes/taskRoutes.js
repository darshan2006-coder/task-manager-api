const express = require("express");
const { createTask,getTasks,updateTask,deleteTask,getTaskStats,sendReminder} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const taskValidation = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/", authMiddleware, taskValidation, createTask);
router.get("/", authMiddleware, getTasks);
router.get("/stats", authMiddleware, getTaskStats);
router.put("/:id", authMiddleware, taskValidation, updateTask);
router.delete("/:id", authMiddleware, deleteTask);
router.post("/reminder", authMiddleware, taskValidation, sendReminder);


module.exports = router;
