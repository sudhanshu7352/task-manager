# TaskFlow - Task Management API

TaskFlow is a basic task management API built using Node.js and Express.js. It allows users to create, update, delete, and retrieve tasks. Each task has a title, description, and status (either "pending" or "completed"). The tasks are stored in memory or a JSON file to persist data between server restarts.

## Features
- **Create a Task**: Add a new task with a title and description.
- **Get All Tasks**: Retrieve all tasks.
- **Update a Task**: Update the status of a task (either "pending" or "completed").
- **Delete a Task**: Delete a task by its ID.
- **Filter Tasks by Status**: Retrieve tasks filtered by their status (either "pending" or "completed").
- **Data Persistence** (Bonus): Tasks are saved in a `tasks.json` file to ensure data is retained between server restarts.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the source code.

   ```bash
   git clone https://github.com/sudhanshu7352/taskflow.git
   cd taskflow
   
2. Install the dependencies.
   
  ```bash 
  npm install

3. Start the server.

  ```bash
  node index.js


The server will be running on http://localhost:3000.
