# 🚀 Task Manager API

A secure and feature-rich RESTful Task Manager API built using Node.js, Express.js, and MongoDB Atlas. This project enables users to securely manage their tasks with authentication, authorization, filtering, searching, sorting, pagination, statistics, email reminders, and input validation.

---

## 📌 Project Overview

This project demonstrates the development of a production-style backend REST API using the MERN backend stack. It provides secure user authentication, task management, advanced query features, and email reminder functionality while following a clean MVC architecture.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt

### 📝 Task Management

- Create Task
- Get All Tasks
- Update Task
- Delete Task

### 🔒 Security

- Protected Routes
- User-specific Authorization
- Secure Task Update
- Secure Task Delete

### 🔍 Filtering

- Filter by Category
- Filter by Priority
- Filter by Status
- Filter by Due Date

### 🔎 Search

- Search Tasks by Title

### 📊 Sorting

- Sort by Due Date
- Sort by Priority

### 📄 Pagination

- Page-wise Task Retrieval
- Pagination Metadata

### 📈 Statistics

- Total Tasks
- Completed Tasks
- Pending Tasks

### 📧 Email Reminder

- Send Reminder Emails using Nodemailer

### ✅ Validation

- Request Validation using express-validator

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Nodemailer
- express-validator
- dotenv
- CORS

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Task-Manager-API.git
```

### Navigate to the project

```bash
cd Task-Manager-API
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_gmail_app_password
```

### Run the project

```bash
node server.js
```

The server will start on:

```
http://localhost:5000
```

---

## 📮 API Endpoints

### Authentication

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| POST   | `/api/auth/register` | Register a User |
| POST   | `/api/auth/login`    | Login User      |

### Tasks

| Method | Endpoint         | Description |
| ------ | ---------------- | ----------- |
| POST   | `/api/tasks`     | Create Task |
| GET    | `/api/tasks`     | Get Tasks   |
| PUT    | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |

### Advanced Features

```
GET /api/tasks?category=Work

GET /api/tasks?priority=High

GET /api/tasks?completed=true

GET /api/tasks?dueDate=2026-06-15

GET /api/tasks?search=report

GET /api/tasks?sort=dueDate

GET /api/tasks?sort=priority

GET /api/tasks?page=1&limit=5

GET /api/tasks/stats

POST /api/tasks/reminder
```

---

## 🎯 Key Highlights

- Secure JWT Authentication
- User-specific Authorization
- RESTful API Design
- CRUD Operations
- Advanced Filtering & Search
- Sorting & Pagination
- Task Statistics
- Email Reminders with Nodemailer
- Input Validation using express-validator
- MongoDB Atlas Integration
- MVC Architecture

---

## 🚀 Future Enhancements

- Swagger API Documentation
- Docker Support
- Redis Caching
- Role-Based Access Control (RBAC)
- Unit Testing
- API Deployment
