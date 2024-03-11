import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonData: Todo[] = await data.json();
      const incompletedTodos: string[] = jsonData.filter((todo) => !todo.completed).map((todo) => todo.title);
      setTimeout(() => {
        setTodos(incompletedTodos);
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, []);

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const complete = (text: string) => {
    const uncompletedTodos = todos.filter((todo) => todo !== text);
    setTodos(uncompletedTodos);
  };

  return (
    <div className="App">
      <img className="logo" src="/logo.png" alt="Techover Logo" width={300} />
      <Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
      <List todos={todos} complete={complete} loading={loading} />
    </div>
  );
}
