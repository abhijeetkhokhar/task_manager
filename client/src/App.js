import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = "https://task-manager-bkss.onrender.com/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    try {
      const response = await axios.post(API_URL, { title, dueDate });
      setTasks([...tasks, response.data]);
      setTitle('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTaskStatus = async (id, status) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { status });
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="bg-blue-500 text-white p-5 text-center rounded-lg mb-6">
        <h1 className="text-2xl font-bold m-0">Task Manager</h1>
      </header>
      <main>
        <form onSubmit={addTask} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Task
          </button>
        </form>
        <ul className="list-none p-0">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`bg-white p-4 border border-gray-200 rounded-md mb-3 flex justify-between items-center ${task.status === 'completed' ? 'opacity-60' : ''}`}>
              <div className="flex flex-col">
                <span className={`font-bold ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </span>
                <span className="text-sm text-gray-500">Due : {task.dueDate}</span>
              </div>
              <div className="flex items-center gap-3">
                {task.status !== 'completed' && (
                  <button
                    onClick={() => updateTaskStatus(task.id, 'completed')}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Complete
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

