import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  title: "Taskie",
};

function Header({ title = defaultProps.title, action }) {
  return (
    <div className="header-container">
      <div className="title">{title}</div>
      <div className="action-button">{action}</div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.element,
};

export default Header;
