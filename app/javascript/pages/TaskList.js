import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { GoPlus } from "react-icons/go";
import Dashboard from "../components/Dashboard";
import TaskListDisplay from "../components/TaskListDisplay";

function TaskList() {
  const history = useHistory();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  }, [tasks.length]);

  const handleClick = () => {
    history.push("/add-task");
  };

  return (
    <Dashboard title="Tasks" action={<GoPlus onClick={handleClick} />}>
      {tasks.length === 0 ? (
        <div>No task created yet</div>
      ) : (
        <TaskListDisplay taskList={tasks} />
      )}
    </Dashboard>
  );
}

export default TaskList;
