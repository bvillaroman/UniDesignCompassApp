import React from "react";
import renderer from "react-test-renderer";
import {render, fireEvent, wait} from 'react-testing-library';
import Header from "../header";
import 'react-testing-library/cleanup-after-each';

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Universal Design Compass" />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
  it("select about", () => {
    // const { getByText, getByTestId, container } = render(<Header siteTitle="Universal Design Compass" />);
    // fireEvent.click(getByText("About Us"));
    // expect(container.firstchild).toMatchSnapshot();
    const { getByText } = render(<Header siteTitle="Universal Design Compass" />);
    const aboutButton = getByText("About Us");
    const textAbout = aboutButton.textContent;
    expect(textAbout).toBe("About Us");
    aboutButton.click();
  });
});
