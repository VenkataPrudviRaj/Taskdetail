import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/TaskList";

function App(){
  return (
    <div>
      <h1>Task Detail</h1>
      <p>Our friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App;