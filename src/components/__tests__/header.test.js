import React from "react";
// import renderer from "react-test-renderer";
// import {render, fireEvent, wait} from 'react-testing-library';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow, render} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Header from "../header";
import 'react-testing-library/cleanup-after-each';

configure({adapter:new Adapter()});
const tree = shallow(<Header siteTitle="Universal Compass Design"/>);

describe("Header", () => {
  it("Check Render",()=>{
      expect(shallowToJson(tree)).toMatchSnapshot();
  });
  it("Check Constructor Function",()=>{
    let func=jest.spyOn(tree.instance(),"constructor")
    expect(func).toHaveBeenCalledTimes(0);
})
});
