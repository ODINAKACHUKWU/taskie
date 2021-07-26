import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import DefaultComponent from "../../../app/javascript/components/DefaultComponent";

describe("rendering DefaultComponent component", () => {
  it("renders DefaultComponent component without crashing", () => {
    shallow(<DefaultComponent />);
  });

  it("renders header content", () => {
    const wrapper = shallow(<DefaultComponent />);
    const content = wrapper.find("h1").text();

    expect(content).toEqual("Welcome to the Taskie app!");
  });
});

describe("snapshot", () => {
  it("DefaultComponent snapshot", () => {
    const tree = shallow(<DefaultComponent />);

    expect(toJSON(tree)).toMatchSnapshot();
  });
});
