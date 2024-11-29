const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

let tasks = [];

// Load tasks from file if exists
const loadTasks = () => {
  if (fs.existsSync('tasks.json')) {
    tasks = JSON.parse(fs.readFileSync('tasks.json'));
  }
};

// Save tasks to file
const saveTasks = () => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
};

loadTasks();

// Creating a Task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send({ error: 'Title and description are required' });
  }
  const newTask = { id: uuidv4(), title, description, status: 'pending' };
  tasks.push(newTask);
  saveTasks();
  res.status(201).send({ message: 'Task created successfully', task: newTask });
});

// Gettng All the Tasks
router.get('/', (req, res) => {
  res.status(200).send(tasks);
});

// Updating a Task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = tasks.find(task => task.id === id);
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  }
  if (!status) {
    return res.status(400).send({ error: 'Status is required' });
  }
  task.status = status;
  saveTasks();
  res.status(200).send({ message: 'Task updated successfully', task });
});

// Deleting a Task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).send({ error: 'Task not found' });
  }
  tasks.splice(taskIndex, 1);
  saveTasks();
  res.status(200).send({ message: 'Task deleted successfully' });
});

// Filtering the Tasks by Status
router.get('/status/:status', (req, res) => {
  const { status } = req.params;
  const filteredTasks = tasks.filter(task => task.status === status);
  res.status(200).send(filteredTasks);
});

module.exports = router;
