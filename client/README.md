<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 0afa6e4 (update)
