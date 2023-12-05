import { useState } from 'react';
import './App.css';
import Input from './Input';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (todo !== '') {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	return (
		<>
			<div className="App">
				<img className="logo" src="/logo.png" alt="Techover Logo" />
				<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
