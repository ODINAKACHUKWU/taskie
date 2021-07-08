import React from "react";
import PropTypes from "prop-types";

// Styles
import "../../assets/stylesheets/components/header.scss";

function Header({ title, action }) {
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
