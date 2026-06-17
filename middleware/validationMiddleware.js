const { body, validationResult } = require("express-validator");


const taskValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("category")
    .optional()
    .isIn(["Work", "Personal"])
    .withMessage("Category must be Work or Personal"),

  body("priority")
    .optional()
    .isIn(["Low", "Medium", "High"])
    .withMessage("Priority must be Low, Medium or High"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),

  body("dueDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid due date"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = taskValidation;