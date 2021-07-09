import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function Dashboard({ title, action, children }) {
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
