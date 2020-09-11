import React, {useState} from 'react'
import './App.css';
function App() {
  const [todos, setTodos]=useState([""]);
  return (
    <div className="App">
      <h1>Todo App 🚀</h1>
      <input/>
      <button>Add Todo</button>
      <ul>
        <li>cool Bro</li>
        <li>Chill Bro</li>
      </ul>
    </div>
  )
}

export default App
