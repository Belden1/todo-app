import React from 'react';
import './Item.css';

interface ItemProps {
  text: string;
  complete: (text: string) => void;
}

const Item: React.FC<ItemProps> = ({ text, complete }) => {
  const handleComplete = () => {
    complete(text);
  };

  return (
    <div className="todo">
      <div className="todo-entry">{text}</div>
      <button className="complete-button" onClick={handleComplete}>
        Complete
      </button>
    </div>
  );
};

export default Item;
