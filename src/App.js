import React,{useState} from 'react'
import TodoList from './TodoList';
import './App.css'

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    if(task.length===0)
    {
      alert("Empty Task");
      return;
    }
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div className='container'>
      <center>
        
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form className='form' onSubmit={submitHandler}>
              <input className='text' type="text" name="task" value={task} onChange={changeHandler} />
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        
      </center>
    </div>
  )
}

export default App
