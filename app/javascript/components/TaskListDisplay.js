import React, { Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";

function TaskListDisplay({ taskList }) {
  console.log("===== tasks", taskList);

  return (
    <Fragment>
      {taskList?.map((task, index) => (
        <div key={index} className="task-card">
          <div className="avatar-section">
            {task.avatar_url ? (
              <img
                src={task?.avatar_url}
                width="30"
                alt="Avatar"
                className="avatar"
              />
            ) : (
              <FaUserCircle />
            )}
          </div>
          <div className="task-details">
            <div className="task-title">{task?.title}</div>
            <div className="task-description">{task?.description}</div>
          </div>
          <div>
            {task.completed ? (
              <>{task?.updated_at}</>
            ) : (
              <input type="checkbox" />
            )}
          </div>
        </div>
      ))}
    </Fragment>
  );
}

TaskListDisplay.propTypes = {
  taskList: PropTypes.array.isRequired,
};

export default TaskListDisplay;
