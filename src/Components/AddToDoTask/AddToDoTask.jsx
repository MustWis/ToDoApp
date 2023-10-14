import { useEffect, useState } from "react";
import Tasks from "../Tasks/Tasks";

const AddToDoTask = (props) => {
  const data = props.data;
  const AddNewData = props.AddNewData;

  const [newTaskName, setNewTaskName] = useState("");

  return (
    <div>
      <input
        placeholder="New Task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      ></input>
      <button onClick={() => AddNewData(newTaskName)}>Add</button>
      <div>
        {data.map((task) => {
          return <Tasks isChecked={task.isChecked} taskName={task.taskName} />;
        })}
      </div>
    </div>
  );
};

export default AddToDoTask;
