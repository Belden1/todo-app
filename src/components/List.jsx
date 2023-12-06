import Item from './Item';
const List = ({ todos, complete }) => {
	if (todos.length === 0) {
		return (
			<>
				<div className="empty">All tasks completed!</div>
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
