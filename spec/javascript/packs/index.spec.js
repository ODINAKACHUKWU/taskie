import React from "react";
import { shallow } from "enzyme";
import BaseRoute from "../../../app/javascript/routes/BaseRoute";

describe("rendering BaseRoute component", () => {
  it("should render BaseRoute without crashing", () => {
    shallow(<BaseRoute />);
  });
});
