import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Task from "../../../app/javascript/components/Task";

const task = {
  title: "Task 1",
  description: "This is task 1",
  avatar_url: "",
};

describe("rendering Task component", () => {
  it("renders Task component without crashing", () => {
    shallow(<Task task={task} />);
  });

  it("renders avatar section without crashing", () => {
    const wrapper = shallow(<Task task={task} />);
    const avatar = wrapper.find(".avatar-section");

    expect(avatar.exists()).toEqual(true);
    expect(avatar.type()).toEqual("div");
  });

  it("renders task details without crashing", () => {
    const wrapper = shallow(<Task task={task} />);
    const taskDetails = wrapper.find(".task-details");
    const taskTitle = wrapper.find(".task-title");
    const taskDescription = wrapper.find(".task-description");

    expect(taskDetails.exists()).toEqual(true);
    expect(taskDetails.type()).toEqual("div");
    expect(taskTitle.exists()).toEqual(true);
    expect(taskTitle.type()).toEqual("div");
    expect(taskDescription.exists()).toEqual(true);
    expect(taskDescription.type()).toEqual("div");
  });

  it("renders update action without crashing", () => {
    const wrapper = shallow(<Task task={task} />);
    const updateAction = wrapper.find(".update-action");

    expect(updateAction.exists()).toEqual(true);
    expect(updateAction.type()).toEqual("div");
  });
});

describe("passing props", () => {
  it("accepts task prop", () => {
    const wrapper = mount(<Task task={task} />);

    expect(wrapper.props().task).toEqual(task);
  });
});

describe("snapshot", () => {
  it("Task snapshot", () => {
    const tree = shallow(<Task task={task} />);

    expect(toJSON(tree)).toMatchSnapshot();
  });
});
