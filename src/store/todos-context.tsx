import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObjType = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObjType>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {

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
  
    const removeTodoHandler = (todoId: string) => {
      setTodos(
        (prev) => {
          return prev.filter(
            todo => todo.id !== todoId
          )
        }
      );
    } 

    const contextValue: TodosContextObjType = {
        items: todos,
        addTodo: addNewTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
}

export default TodosContextProvider;