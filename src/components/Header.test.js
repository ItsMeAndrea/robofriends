import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";


const wrapper = shallow(<Header />);

it("expect to render Card component", () => {
  expect(wrapper).toMatchSnapshot();
});
