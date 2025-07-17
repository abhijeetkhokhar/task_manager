const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const tasksFilePath = path.join(__dirname, 'tasks.json');

const readTasks = () => {
  const tasksData = fs.readFileSync(tasksFilePath);
  return JSON.parse(tasksData);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

app.get('/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    dueDate: req.body.dueDate,
    status: 'pending',
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].status = req.body.status;
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  let tasks = readTasks();
  const taskId = parseInt(req.params.id, 10);
  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  if (tasks.length !== updatedTasks.length) {
    writeTasks(updatedTasks);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
