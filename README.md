# Node Users Courses CRUD

REST API for managing users and courses, built with Node.js, Express, and MongoDB Atlas (Mongoose).

## Features
- Full CRUD for users
- Full CRUD for courses
- MongoDB Atlas as the database

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas + Mongoose

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/laithmaher/node-users-courses-crud.git
cd node-users-courses-crud
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
```

### 4. Run the server
```bash
npm start
```

## API Endpoints

### Users
| Method | Endpoint         | Description     |
|--------|------------------|-----------------|
| GET    | /users       | Get all users   |
| GET    | /users/:id   | Get one user    |
| POST   | /users       | Create a user   |
| PATCH  | /users/:id   | Update a user   |
| DELETE | /users/:id   | Delete a user   |

### Courses
| Method | Endpoint           | Description       |
|--------|--------------------|-------------------|
| GET    | /courses       | Get all courses   |
| GET    | /courses/:id   | Get one course    |
| POST   | /courses       | Create a course   |
| PATCH  | /courses/:id   | Update a course   |
| DELETE | /courses/:id   | Delete a course   |
