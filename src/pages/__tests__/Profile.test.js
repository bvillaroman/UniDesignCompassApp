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

it('Profile submitPhoneNumber test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPhoneNumber")
    expect(spy).toHaveBeenCalledTimes(0);
    spy()
    expect(spy).toHaveBeenCalledTimes(1);
});

it('Profile componentDidMount clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"componentDidMount")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('Profile componentDidMount test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"componentDidMount")
    expect(spy).toHaveBeenCalledTimes(0);
    profileWrapper.instance().componentDidMount()
    expect(spy).toHaveBeenCalledTimes(1);
});

it('Profile handleChange clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handleChange")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('Profile handleChange test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handleChange")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().handleChange(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('Profile handlePasswordCode clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handlePasswordCode")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('Profile handlePasswordCode test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handlePasswordCode")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().handlePasswordCode(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('Profile submitPassword clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPassword")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('Profile submitPassword test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPassword")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitPassword(e)
    expect(spy).toHaveBeenCalledTimes(1);
});


it('Profile submitName clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitName")
    expect(spy).toHaveBeenCalledTimes(0);
});


it('Profile submitName test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitName")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitName(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('Profile submitVerify clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitVerify")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('Profile submitVerify test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitVerify")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitVerify(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('Profile showVerification clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"showVerification")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('Profile submitEmail clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitEmail")
    expect(spy).toHaveBeenCalledTimes(0);
});
