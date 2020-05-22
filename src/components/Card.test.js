import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Card from "./Card";

const wrapper = shallow(<Card />);

it("expect to render Card component", () => {
  expect(renderer.wrapper).toMatchSnapshot();
});
