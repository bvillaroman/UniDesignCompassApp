import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LogLinkArray from "./LogLinkArray";
import LogLink from "./LogLink"

Enzyme.configure({ adapter: new Adapter() });

describe("<LogLinkArray />", () => {
  it("should check if the object has items and pass the mapped objects to another component", () => {
    const wrapper = shallow(<LogLinkArray items={[{
      bucket: "unidesigncompassapp38d5a61bf2244355a49f78f038a747ef-dev",
      key: "ad5dfb89-ea76-4bc6-b15e-285121c6cb52image_test.png",
      name: "image_test.png",
      region: "us-east-1",
      type: "image/png",
    }]} />);

    expect(wrapper.find(LogLink)).toHaveLength(1);
  });
});
