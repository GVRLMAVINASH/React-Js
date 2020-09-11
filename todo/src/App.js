import React, {useEffect, useState} from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'
import './App.css';
import db from './firebase'
function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('');
  console.log(input);
  useEffect(() => {
    console.log("I ran when the component loaded");

    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);
  const addTodo=(Event)=>{
    
    //this will fire off when we click the Button
console.log('Iam working');
setTodos([...todos, input])
setInput('');
Event.preventDefault();
  }
  return (
    <div className="App">
      <h1>Todo App 🚀</h1>
      <form>
<FormControl>
  <InputLabel>
  👉👉 Write a Todo</InputLabel>
  <Input value={input} onChange={Event =>setInput(Event.target.value)}></Input>
</FormControl>

      <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo =>(
           <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
     
    </div>
  )
}
export default App
