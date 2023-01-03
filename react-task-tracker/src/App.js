import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting with Advisor",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery Shopping",
      day: "Feb 8th at 3:00pm",
      reminder: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: !t.reminder } : t))
    )
  }

  //Toggle Show Task Form
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header onAdd={toggleShowAddTask} showAdd={showAddTask} />
      {showAddTask ? <AddTask onAdd={addTask} /> : null}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No Tasks To Show</p>
      )}
    </div>
  )
}

export default App
