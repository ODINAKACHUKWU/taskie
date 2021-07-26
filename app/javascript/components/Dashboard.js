import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import DefaultComponent from "./DefaultComponent";

const defaultProps = {
  children: <DefaultComponent />,
};

function Dashboard({ title, action, children = defaultProps.children }) {
  return (
    <div className="dashboard-container">
      <Header title={title} action={action} />
      <div className="main">{children}</div>
    </div>
  );
}

Dashboard.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.element,
  children: PropTypes.element.isRequired,
};

export default Dashboard;
