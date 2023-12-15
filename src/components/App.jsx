import { useState, useEffect } from 'react';
import './App.css';
import Input from './Input';
import List from './List';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const incompletedTodos = data.filter((todo) => !todo.completed).map((todo) => todo.title);
				setTodos(incompletedTodos);
			});
	}, []);

	const addTodo = () => {
		if (todo !== '') {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text);
		setTodos(uncompletedTodos);
	};

	return (
		<>
			<div className="App">
				<img className="logo" src="/logo.png" alt="Techover Logo" width={300} />
				<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
				<List todos={todos} complete={complete} />
			</div>
		</>
	);
}

export default App;
