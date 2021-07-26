import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../../app/javascript/components/Header";

const defaultProps = {
  title: "Taskie",
  action: null,
};

describe("rendering Header component", () => {
  it("renders Header component without crashing", () => {
    shallow(<Header title={defaultProps.title} />);
  });

  it("renders title and action button", () => {
    const wrapper = mount(
      <Header title={defaultProps.title} action={defaultProps.action} />
    );
    const title = wrapper.find(".title").text();

    expect(wrapper.contains(title)).toEqual(true);
    expect(title).toEqual(defaultProps.title);
    expect(wrapper.exists(".action-button")).toEqual(true);
  });
});

describe("passing props", () => {
  it("accepts title and action props", () => {
    const wrapper = mount(
      <Header title={defaultProps.title} action={defaultProps.action} />
    );

    expect(wrapper.props().title).toEqual(defaultProps.title);
    expect(wrapper.props().action).toEqual(null);
  });
});

describe("snapshot", () => {
  it("Header snapshot", () => {
    const tree = shallow(<Header title={defaultProps.title} />);

    expect(toJSON(tree)).toMatchSnapshot();
  });
});
