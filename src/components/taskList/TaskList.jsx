import TaskDelete from "../taskDelete/TaskDelete";
import "./styles.css";

export default function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i} className={task.color === "#fdfd86" ? "yellow" : "blue"}>
          <p className="task">{task.nameTask}</p>
          <TaskDelete tasks={tasks} setTasks={setTasks} index={i} />
        </li>
      ))}
    </ul>
  );
}
