import React from "react";
import { useHistory } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import Dashboard from "../components/Dashboard";
import { tasks } from "../data/tasks";

// Styles
import "../../assets/stylesheets/pages/task-list.scss";
import TaskListDisplay from "../components/TaskListDisplay";

function TaskList() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/add-task");
  };

  return (
    <Dashboard title="Tasks" action={<GoPlus onClick={handleClick} />}>
      <TaskListDisplay taskList={tasks} />
    </Dashboard>
  );
}

export default TaskList;
