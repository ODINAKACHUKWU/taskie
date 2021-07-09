import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import axios from "axios";
import { format } from "../helpers/functions";

function Task({ task }) {
  const [isChecked, setIsChecked] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    setCurrentTask(task);
  }, []);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    axios
      .patch(`/api/v1/tasks/${task?.slug}`, { completed: e.target.checked })
      .then((res) => setCurrentTask(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="task-card">
      <div className="avatar-section">
        {task.avatar_url ? (
          <div className="avatar-container">
            <img src={task?.avatar_url} alt="Avatar" className="avatar" />
          </div>
        ) : (
          <FaUserCircle className="user-icon" />
        )}
      </div>
      <div className="task-details">
        <div className="task-title">{task?.title}</div>
        <div className="task-description">{task?.description}</div>
      </div>
      <div className="update-action">
        {currentTask.completed ? (
          <span className="time">{format(task?.updated_at)}</span>
        ) : (
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
