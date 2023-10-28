import Task from "../molecules/task";

function TasksGroup({taskList, onDeleteTask}) {
    return taskList.map((task, idx) => <Task key= {`task-${idx}`} taskText={task} onDeleteTask={onDeleteTask} />);
  }

export default TasksGroup;