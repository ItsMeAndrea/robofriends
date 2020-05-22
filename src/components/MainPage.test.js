import React from "react";
import { mount } from "enzyme";
import MainPage, { filteredRobots } from "./MainPage";

let wrapper;
const robotsarray = [
  { name: "joe", email: "joe@gmail.com" },
  { name: "mark", email: "joe@gmail.com" },
  { name: "john", email: "joe@gmail.com" },
];

beforeEach(() => {
  const mockProps = {
    robots: [],
    search: "",
    onRequestRobots: jest.fn(),
    isPending: false,
  };
  wrapper = mount(<MainPage {...mockProps} />);
});

it("renders MainPage", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  expect(filteredRobots(robotsarray, "joe")).toEqual([
    {
      name: "joe",
      email: "joe@gmail.com",
    },
  ]);
});
