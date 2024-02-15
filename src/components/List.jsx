import Item from './Item';
import './List.css';
let hidden = true;

const List = ({ todos, complete, loading }) => {
  if (loading) {
    return (
      <>
        <div className="todo-list">
          {[1, 2, 3, 4, 5].map((todo, index) => (
            <Item text={'Loading'} key={index} complete={complete} />
          ))}
        </div>
      </>
    );
  }

  if (todos.length > 0) {
    hidden = false;
  }

  if (hidden) {
    return (
      <>
        <div style={{ display: 'none' }} className="empty">
          All tasks completed!
        </div>
      </>
    );
  } else if (todos.length === 0) {
    return (
      <>
        <div style={{ display: 'block' }} className="empty">
          All tasks completed!
        </div>
      </>
    );
  }

  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Item text={todo} key={index} complete={complete} />
        ))}
      </div>
    </>
  );
};

export default List;
