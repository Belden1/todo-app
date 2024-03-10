import React from 'react';
import './Input.css';

interface InputProps {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
  addTodo: () => void;
}

const Input: React.FC<InputProps> = ({ setTodo, todo, addTodo }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = () => {
    addTodo();
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input"
        name="todo"
        placeholder="Create a todo"
        onChange={handleChange}
        value={todo}
      />
      <button className="add-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Input;
