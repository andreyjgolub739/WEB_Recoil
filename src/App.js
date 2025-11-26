import React from 'react';
import TodoList from './components/TodoForm';
import AddTodo from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Список завдань</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}



export default App;