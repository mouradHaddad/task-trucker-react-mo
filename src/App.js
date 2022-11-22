import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask ] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'Jan 18th at 3:00pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'the Gym',
        day: 'Dec 9th at 1:00pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Ammani birthday',
        day: 'Nov 19th at 0:00am',
        reminder: true,
    }
])
//Add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }

  setTasks([...tasks, newTask]) 
}
//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//set Reminder
const setReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task , reminder : !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={setReminder}/> : `there is no tasks to show`}
    </div>
  );
}

export default App;





