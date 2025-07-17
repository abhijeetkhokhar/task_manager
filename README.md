# Task Manager Web Application

This is a mini task management web application built with a React frontend and a Node.js (Express.js) backend. It uses a local JSON file for storing task data.

## Key Features

- **Add a task**: Users can add new tasks with a title and a due date.
- **View list of tasks**: All tasks are displayed in a clean and organized list.
- **Mark task as completed**: Users can mark tasks as completed, which visually distinguishes them from pending tasks.
- **Delete a task**: Tasks can be easily removed from the list.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: Local JSON file (`tasks.json`)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/abhijeetkhokhar/task_manager.git
    ```
2.  **Install backend dependencies**
    ```sh
    cd server
    npm install
    ```
3.  **Install frontend dependencies**
    ```sh
    cd ../client
    npm install
    ```

### Running the Application

1.  **Start the backend server** (from the `server` directory)
    ```sh
    node index.js
    ```
    The backend will be running on `http://localhost:5001`.

2.  **Start the frontend development server** (from the `client` directory)
    ```sh
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## Backend API Endpoints

- **GET `/tasks`**: Get all tasks.
- **POST `/tasks`**: Add a new task.
  - **Body**: `{ "title": "string", "dueDate": "string" }`
- **PUT `/tasks/:id`**: Update a task's status.
  - **Body**: `{ "status": "string" }`
- **DELETE `/tasks/:id`**: Delete a task.
