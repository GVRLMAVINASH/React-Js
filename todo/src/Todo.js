import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText} from '@material-ui/core';
function Todo(props) {
    return (
        <div className="Todo" >
            <List>
                <ListItem>
                    <ListItemText primary={props.text} secondary="Todo 😎😍">

                    </ListItemText>
                </ListItem>
            </List>
         
        </div>
    )
}
export default Todo
