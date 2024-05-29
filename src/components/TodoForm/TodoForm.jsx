// src/TodoForm.js
import style from "./TodoForm.module.css";
const TodoForm = ({ todo, handleInputChange, handleSubmit, buttonText }) => {
  return (
    <div className={style.mainDiv}>
      <h2>{buttonText === "Add" ? "Add New Todo" : "Edit Todo"}</h2>
      <input
        style={{
          width: "30%",
          height: "100%",
          borderRadius: "10px",
        }}
        type="text"
        name="title"
        placeholder="Title"
        value={todo.title}
        onChange={handleInputChange}
      />
      <input
        style={{ width: "30%", height: "100%", borderRadius: "10px" }}
        type="date"
        placeholder="startdate"
        name="startDate"
        value={todo.startDate}
        onChange={handleInputChange}
      />
      <input
        style={{ width: "30%", height: "100%", borderRadius: "10px" }}
        type="date"
        name="endDate"
        value={todo.endDate}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSubmit}
        className="btn btn-primary ml-2"
        style={{ width: "10%" }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TodoForm;
