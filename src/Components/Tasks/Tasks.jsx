import "./Tasks.css"

const Tasks = (props) => {
  const isChecked = props.isChecked;
  const taskName = props.taskName;

  return (
    <div className="container">
      <input type="checkbox" checked={isChecked}></input>
      <div>{taskName}</div>
    </div>
  );
};

export default Tasks;
