import { useState } from "react";
import "./styles.css";

export default function TaskForm({ setTasks }) {
  const [inputText, setInputText] = useState("");

  const maxCharacters = 40;

  const getRandomColor = () => {
    const randomNumber = Math.random();
    return randomNumber < 0.5 ? "#fdfd86" : "#06ad89";
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      return;
    }

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = {
      nameTask: inputText,
      color: getRandomColor(),
    };

    const updatedTasks = [...storedTasks, newTask];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTasks(updatedTasks);
    setInputText("");
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxCharacters) {
      setInputText(text);
    }
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        maxLength={maxCharacters}
        autoComplete="off"
        placeholder="Add task"
        name="input"
        className="input"
      />

      <div className="count">
        <span>{maxCharacters - inputText.length}</span>
      </div>

      <button type="submit" className="add">
        Add
      </button>
    </form>
  );
}
