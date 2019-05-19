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
  // it("renders correctly", () => {
  //   const tree = renderer
  //     .create(<Header siteTitle="Universal Design Compass" />)
  //     .toJSON()
  //   expect(tree).toMatchSnapshot();
  // });
  it("Check Render",()=>{
      expect(shallowToJson(tree)).toMatchSnapshot();
  });
  // it("select about", () => {
    // const { getByText, getByTestId, container } = render(<Header siteTitle="Universal Design Compass" />);
    // fireEvent.click(getByText("About Us"));
    // expect(container.firstchild).toMatchSnapshot();
    // const { getByText } = render(<Header siteTitle="Universal Design Compass" />);
    // const aboutButton = getByText("About Us");
    // const textAbout = aboutButton.textContent;
    // expect(textAbout).toBe("About Us");
    // aboutButton.click();
  // });
  // it("Check Navbar brand link",()=>{
  //     // expect(tree.find('#brand-link').text()).toEqual('Universal Compass Design');
  //     tree.find('Link#brand-link').simulate('click');
  //     expect('/').toHaveBeenCalled();
  // });
});
