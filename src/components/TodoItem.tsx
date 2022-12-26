import React from "react";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
    
    // This is Max' solution
    return  <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>

    // This is my solution
    // React.FC<{id: string, text: string, onRemoveTodo: (id: string) => void}>
    /*
    const onClickHandler = () => {
        props.onRemoveTodo(props.id)
    }

    return  <li className={classes.item} key={props.id} onClick={onClickHandler}>{props.text}</li>
    */
    
}

export default TodoItem;