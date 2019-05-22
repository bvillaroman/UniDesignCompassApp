import Profile from "../Profile"
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react"

configure({adapter:new Adapter()});
let profileWrapper=shallow(<Profile/>)
it("Profile Constructor",()=>{
let constructor=jest.spyOn(profileWrapper.instance(),"constructor")
expect(constructor).toHaveBeenCalledTimes(0);
});