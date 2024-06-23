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
  const [todos, setTodos] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadFromAPI, setLoadFromAPI] = useState<boolean>(false);

  useEffect(() => {
    if (loadFromAPI) {
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
    } else {
      setTodos(null);
    }
  }, [loadFromAPI]);

  const addTodo = () => {
    if (todo !== '') {
      setTodos((prevTodos) => (prevTodos ? [...prevTodos, todo] : [todo]));
      setTodo('');
    }
  };

  const complete = (text: string) => {
    const uncompletedTodos = todos?.filter((todo) => todo !== text) || [];
    setTodos(uncompletedTodos);
  };

  const handleToggle = () => {
    setLoadFromAPI(!loadFromAPI);
  };

  return (
    <div className="App">
      <img className="logo" src="/logo.png" alt="Techover Logo" width={300} />
      <div className="toggle-wrapper">
        <label htmlFor="toggle-api">Load from API</label>
        <input id="toggle-api" type="checkbox" checked={loadFromAPI} onChange={handleToggle} />
      </div>
      <Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
      <List todos={todos} complete={complete} loading={loading} />
    </div>
  );
}
