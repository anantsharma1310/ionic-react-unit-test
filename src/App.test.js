/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
import 'jsdom-global/register';
import React from "react";
import {configure, mount } from "enzyme";
import {expect} from "chai";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({
   adapter: new Adapter()
});

describe("Testing <App/> Component", () => {
   it("App renders a message", () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('p[data-testid="message"]')).to.be.exist;
   });
});