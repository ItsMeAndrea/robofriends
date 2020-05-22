import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

const mockRobots = [
  {
    id: 1,
    name: "John snow",
    username: "john",
    email: "john@gmail.com",
  },
];
const wrapper = shallow(<CardList robots={mockRobots} />);

it("expect to render Card component", () => {
  expect(wrapper).toMatchSnapshot();
});
