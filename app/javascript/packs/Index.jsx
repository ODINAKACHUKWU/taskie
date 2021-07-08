import React from "react";
import ReactDOM from "react-dom";
import BaseRoute from "../routes/BaseRoute";

// Styles
import "../../assets/stylesheets/base.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BaseRoute />,
    document.body.appendChild(document.createElement("div"))
  );
});
