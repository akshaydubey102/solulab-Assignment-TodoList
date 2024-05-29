// src/TodoList.js
import React from "react";

const TodoList = ({
  todos,
  editTodo,
  setEditTodo,
  handleEditInputChange,
  updateTodo,
}) => {
  return (
    <div style={{ backgroundColor: "" }}>
      <h2 style={{ color: "white", margin: "30px" }}>Todo List</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo._id} className="list-group-item">
            {editTodo && editTodo._id === todo._id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={editTodo.title}
                  onChange={handleEditInputChange}
                />
                <input
                  type="date"
                  name="startDate"
                  value={editTodo.startDate}
                  onChange={handleEditInputChange}
                />
                <input
                  type="date"
                  name="endDate"
                  value={editTodo.endDate}
                  onChange={handleEditInputChange}
                />
                <button onClick={updateTodo} className="btn btn-success ml-2">
                  Save
                </button>
              </div>
            ) : (
              <div>
                <span>{todo.title}</span>
                <span>
                  {" "}
                  (Start: {new Date(todo.startdate).toLocaleDateString()}, End:{" "}
                  {new Date(todo.enddate).toLocaleDateString()})
                </span>
                <button
                  onClick={() => setEditTodo(todo)}
                  className="btn btn-warning"
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
