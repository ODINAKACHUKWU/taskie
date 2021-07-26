import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const defaultProps = {
  taskList: [],
};

function TaskListDisplay({ taskList = defaultProps.taskList }) {
  return (
    <Fragment>
      {taskList?.map((task) => (
        <Task key={task.slug} task={task} />
      ))}
    </Fragment>
  );
}

TaskListDisplay.propTypes = {
  taskList: PropTypes.array.isRequired,
};

export default TaskListDisplay;
