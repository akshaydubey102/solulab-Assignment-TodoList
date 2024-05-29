# Todo App Frontend

This is the frontend of a simple Todo application built using React and Bootstrap. The app allows users to create, list, and edit todo items.

## Features

- Create a new todo item with a title, start date, and end date.
- List all todo items.
- Edit an existing todo item.

## Technologies Used

- Frontend: React, Bootstrap

## Prerequisites

- Node.js (v12 or higher)
- NPM (Node Package Manager)

## Getting Started

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/akshaydubey102/solulab-Assignment-TodoList.git

   ```

## Getting Started

**Project Structure of frontend**

```bash
/todo-app-client
  /src
    /components
      InputField
        /InputField.jsx
      TodoForm
        /TodoForm.jsx
      TodoList
        /TodoList.jsx
    /pages
      HomePage.jsx
    App.jsx



```

**API Integration**

```sh
  The frontend communicates with the backend via the following API endpoints:

  GET /api/todos: Fetch all todo items.
  POST /api/todos: Create a new todo item.
  PUT /api/todos/:id: Update an existing todo item.

```
