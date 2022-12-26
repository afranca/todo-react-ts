import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addNewTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos( 
      (prev) => {
        //return prev.concat(newTodo);
        return [...prev, newTodo]; //prev.concat(newTodo);
      }
    );
  }

  return (
    <div>
      <NewTodo onAddTodo={addNewTodoHandler}/>
      <Todos items={todos} />            
    </div>
  );
}

export default App;
