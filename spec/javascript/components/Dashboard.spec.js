import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Dashboard from "../../../app/javascript/components/Dashboard";
import DefaultComponent from "../../../app/javascript/components/DefaultComponent";
import Header from "../../../app/javascript/components/Header";

const defaultProps = {
  title: "Taskie",
  action: null,
  children: <DefaultComponent />,
};

describe("rendering Dashboard component", () => {
  it("renders Dashboard component without crashing", () => {
    shallow(
      <Dashboard title={defaultProps.title}>{defaultProps.children}</Dashboard>
    );
  });

  it("renders Header component", () => {
    const wrapper = mount(
      <Dashboard title={defaultProps.title}>{defaultProps.children}</Dashboard>
    );
    const header = <Header title={defaultProps.title} />;
    expect(wrapper.contains(header)).toEqual(true);
  });
});

describe("passing props", () => {
  it("accepts title, action and children props", () => {
    const wrapper = mount(
      <Dashboard title={defaultProps.title} action={defaultProps.action}>
        {defaultProps.children}
      </Dashboard>
    );

    expect(wrapper.props().title).toEqual(defaultProps.title);
    expect(wrapper.props().action).toEqual(null);
    expect(wrapper.props().children).toEqual(defaultProps.children);
  });
});

describe("snapshot", () => {
  it("Dashboard snapshot", () => {
    const tree = shallow(
      <Dashboard title={defaultProps.title}>{defaultProps.children}</Dashboard>
    );

    expect(toJSON(tree)).toMatchSnapshot();
  });
});
