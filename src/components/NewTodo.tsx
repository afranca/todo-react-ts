import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = (props)  => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        
        if (enteredText.trim().length === 0 ){
            console.log("Text is mandatory");
            return;
        }
        todosCtx.addTodo(enteredText);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="text"> Todo Text</label>
        <input type='text' id="text" ref={todoTextInputRef}/>
        <button type="submit">Add</button>
    </form>
  )
}

export default NewTodo;
