import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import AddTaskForm from "../../../app/javascript/components/AddTaskForm";

const api = {
  addTask: () => ({
    title: "Title",
    description: "Description",
    avatar_url: "",
  }),
};

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue },
  });

  return wrapper.find(inputSelector);
};

describe("rendering AddTaskForm component", () => {
  it("renders AddTaskForm component without crashing", () => {
    shallow(<AddTaskForm />);
  });

  it("renders AddTaskForm as a form element", () => {
    const wrapper = shallow(<AddTaskForm />);

    expect(wrapper.find("#add-task-form").type()).toEqual("form");
  });

  it("renders input fields without crashing", () => {
    const wrapper = mount(<AddTaskForm />);
    const inputs = wrapper.find("input");

    expect(inputs.length).toEqual(3);
  });

  it("renders Add button", () => {
    const wrapper = shallow(<AddTaskForm />);
    const label = wrapper.find("#add-button");

    expect(label.type()).toEqual("button");
    expect(label.text()).toEqual("Add");
  });
});

describe("filling form", () => {
  beforeEach(() => jest.resetAllMocks());

  it("lets user fill out the form with values", () => {
    const wrapper = shallow(<AddTaskForm />);

    const titleInput = simulateChangeOnInput(wrapper, "#title-input", "Title");
    const descriptionInput = simulateChangeOnInput(
      wrapper,
      "#description-input",
      "Description"
    );
    const avatarInput = simulateChangeOnInput(
      wrapper,
      "#avatar-url-input",
      "Avatar URL"
    );

    expect(titleInput.props().value).toEqual("Title");
    expect(descriptionInput.props().value).toEqual("Description");
    expect(avatarInput.props().value).toEqual("Avatar URL");
  });

  it("it submits the form to the API", () => {
    document.body.innerHTML =
      "<input name='csrf-token' value='gibhayuvh7wbihh' />";
    jest.spyOn(api, "addTask").mockImplementation(() =>
      Promise.resolve({
        title: "Title",
        description: "Description",
        avatar_url: "",
      })
    );

    const wrapper = mount(<AddTaskForm />);
    const titleInput = simulateChangeOnInput(wrapper, "#title-input", "Title");
    const descriptionInput = simulateChangeOnInput(
      wrapper,
      "#description-input",
      "Description"
    );
    const avatarInput = simulateChangeOnInput(
      wrapper,
      "#avatar-url-input",
      "Avatar URL"
    );

    wrapper.find("form#add-task-form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(api.addTask).toHaveBeenCalled();
  });
});

describe("snapshot", () => {
  it("AddTaskForm snapshot", () => {
    const tree = shallow(<AddTaskForm />);

    expect(toJSON(tree)).toMatchSnapshot();
  });
});
