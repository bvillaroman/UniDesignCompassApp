import {Profile} from "../Profile"
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react"

configure({adapter:new Adapter()});
let props={user: {first_name:"test",last_name:"user",email:"email@email.com",phone_number:"000000000"}}
let profileWrapper=shallow(<Profile {...props}/>)

it("Profile Constructor",()=>{
    let constructor=jest.spyOn(profileWrapper.instance(),"constructor")
    expect(constructor).toHaveBeenCalledTimes(0);
});

it('Profile render clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"render")
    expect(spy).toHaveBeenCalledTimes(0);
  });

it('Profile submitPhoneNumber clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPhoneNumber")
    expect(spy).toHaveBeenCalledTimes(0);
});

