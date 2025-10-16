import { useEffect, useState } from "react";
import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/TaskList";
function App(){
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  const addTask = (task) => {
    setTasks([...tasks,task]);

  }
  return (
    <div>
      <h1>Task Detail</h1>
      <p>Our friendly Task Manager</p>
      <Taskform addTask ={addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App;