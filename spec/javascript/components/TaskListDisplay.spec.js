import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import TaskListDisplay from "../../../app/javascript/components/TaskListDisplay";

const tasks = [
  {
    title: "Task 1",
    description: "This is task 1",
    avatar_url: "",
    slug: "task-1-1",
  },
  {
    title: "Task 2",
    description: "This is task 2",
    avatar_url: "",
    slug: "task-2-2",
  },
];

describe("rendering TaskListDisplay component", () => {
  it("renders TaskListDisplay component without crashing", () => {
    shallow(<TaskListDisplay taskList={tasks} />);
  });

  it("renders all passed Task components without crashing", () => {
    const wrapper = mount(<TaskListDisplay taskList={tasks} />);
    const cards = wrapper.find(".task-card");

    expect(cards.length).toEqual(tasks.length);
  });
});

describe("passing props", () => {
  it("accepts taskList prop", () => {
    const wrapper = mount(<TaskListDisplay taskList={tasks} />);

    expect(wrapper.props().taskList).toEqual(tasks);
  });
});

describe("snapshot", () => {
  it("TaskListDisplay snapshot", () => {
    const tree = shallow(<TaskListDisplay taskList={tasks} />);

    expect(toJSON(tree)).toMatchSnapshot();
  });
});
