const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

// Get all tasks
app.get('/tasks', (req, res) => res.json(tasks));

// Add a new task
app.post('/addTask', (req, res) => {
  const task = req.body;
  task.id = Date.now();
  tasks.push(task);
  res.status(201).json(task);
});

// Delete a task by ID
app.delete('/deleteTask/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.status(200).json({ message: 'Task deleted successfully' });
});

// Start the server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
