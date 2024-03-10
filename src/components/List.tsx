import React from 'react';
import Item from './Item';
import './List.css';

interface ListProps {
  todos: string[];
  complete: (text: string) => void;
  loading: boolean;
}

const List: React.FC<ListProps> = ({ todos, complete, loading }) => {
  const hasTodos = todos.length > 0;

  return (
    <div className="todo-list">
      {loading ? (
        [1, 2, 3, 4, 5].map((_, index) => <Item text={'Loading'} key={index} complete={complete} />)
      ) : !hasTodos ? (
        <div className="empty">All tasks completed!</div>
      ) : (
        todos.map((todo, index) => <Item text={todo} key={index} complete={complete} />)
      )}
    </div>
  );
};

export default List;
