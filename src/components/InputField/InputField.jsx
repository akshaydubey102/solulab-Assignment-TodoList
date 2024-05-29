import "bootstrap/dist/css/bootstrap.min.css";
import style from "./InputField.module.css";

import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const InputField = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8080/api/todos");
    const data = await response.json();
    setTodos(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editTodo) {
      setEditTodo({
        ...editTodo,
        [name]: value,
      });
    } else {
      setNewTodo({
        ...newTodo,
        [name]: value,
      });
    }
  };

  const addTodo = async () => {
    const response = await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setTodos([...todos, data]);
    setNewTodo({ title: "", startDate: "", endDate: "" });
  };

  const updateTodo = async () => {
    const response = await fetch(
      `http://localhost:8080/api/todos/${editTodo._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editTodo),
      }
    );
    const data = await response.json();
    const updatedTodos = todos.map((todo) =>
      todo._id === editTodo._id ? data : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  return (
    <div className={style.MainDiv}>
      <h1 className={style.todohead}>Todo App</h1>
      <TodoForm
        todo={editTodo ? editTodo : newTodo}
        handleInputChange={handleInputChange}
        handleSubmit={editTodo ? updateTodo : addTodo}
        buttonText={editTodo ? "Save" : "Add"}
      />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        handleEditInputChange={handleInputChange}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default InputField;
