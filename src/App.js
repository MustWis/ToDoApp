import logo from "./logo.svg";
import "./App.css";
import AddToDoTask from "./Components/AddToDoTask/AddToDoTask";
import { useEffect, useState } from "react";

function App() {
  const [DUMMY_DATA, setDUMMY_DATA] = useState([
    { isChecked: true, taskName: "First" },
    { isChecked: true, taskName: "Second" },
    { isChecked: false, taskName: "Third" },
  ]);

  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  const AddNewData = (newTaskName) => {
    // Use the setDUMMY_DATA function to update the state
    setDUMMY_DATA((prevData) => [
      { isChecked: false, taskName: newTaskName },
      ...prevData,
    ]);
  };

  useEffect(() => console.log(DUMMY_DATA), [DUMMY_DATA]);

  return (
    <div className="App">
      <header className="App-header">
        {isAddingNewTask === true ? (
          <AddToDoTask
            data={DUMMY_DATA}
            AddNewData={AddNewData}
            setIsAddingNewTask={setIsAddingNewTask}
          />
        ) : (
          <button onClick={() => setIsAddingNewTask(true)}>Add New Task</button>
        )}
      </header>
    </div>
  );
}

export default App;
