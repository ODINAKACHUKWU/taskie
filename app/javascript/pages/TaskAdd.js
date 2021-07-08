import React from "react";
import { useHistory } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import Dashboard from "../components/Dashboard";
import AddTaskForm from "../components/AddTaskForm";

function TaskAdd() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Dashboard title="Add Task" action={<HiHome onClick={handleClick} />}>
      <AddTaskForm />
    </Dashboard>
  );
}

export default TaskAdd;
