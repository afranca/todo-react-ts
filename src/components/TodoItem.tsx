import React from "react";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{id: string, text: string}> = (props) => {
    
    return  <li className={classes.item} key={props.id}>{props.text}</li>
    
}

export default TodoItem;