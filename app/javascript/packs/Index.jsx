import React from "react";
import ReactDOM from "react-dom";
import BaseRoute from "../routes/BaseRoute";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BaseRoute />,
    document.body.appendChild(document.createElement("div"))
  );
});

export default BaseRoute;
