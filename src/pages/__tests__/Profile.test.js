import {Profile} from "../Profile"
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react"

configure({adapter:new Adapter()});
let props={user: {first_name:"test",last_name:"user",email:"email@email.com",phone_number:"000000000"}}
let profileWrapper=shallow(<Profile {...props}/>)

describe("Profile", () => {

it("Constructor",()=>{
    let constructor=jest.spyOn(profileWrapper.instance(),"constructor")
    expect(constructor).toHaveBeenCalledTimes(0);
});

it('render clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"render")
    expect(spy).toHaveBeenCalledTimes(0);
  });

it('submitPhoneNumber clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPhoneNumber")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('submitPhoneNumber test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPhoneNumber")
    expect(spy).toHaveBeenCalledTimes(0);
    spy()
    expect(spy).toHaveBeenCalledTimes(1);
});

it('componentDidMount clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"componentDidMount")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('componentDidMount test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"componentDidMount")
    expect(spy).toHaveBeenCalledTimes(0);
    profileWrapper.instance().componentDidMount()
    expect(spy).toHaveBeenCalledTimes(1);
});

it('handleChange clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handleChange")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('handleChange test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handleChange")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().handleChange(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('handlePasswordCode clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handlePasswordCode")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('handlePasswordCode test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"handlePasswordCode")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().handlePasswordCode(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('submitPassword clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPassword")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('submitPassword test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitPassword")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitPassword(e)
    expect(spy).toHaveBeenCalledTimes(1);
});


it('submitName clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitName")
    expect(spy).toHaveBeenCalledTimes(0);
});


it('submitName test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitName")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitName(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('submitVerify clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitVerify")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('submitVerify test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitVerify")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitVerify(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

it('showVerification clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"showVerification")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('submitEmail clean',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitEmail")
    expect(spy).toHaveBeenCalledTimes(0);
});

it('submitEmail test',() =>{
    let spy=jest.spyOn(profileWrapper.instance(),"submitEmail")
    expect(spy).toHaveBeenCalledTimes(0);
    let e={target:{value:"testing"}}
    profileWrapper.instance().submitEmail(e)
    expect(spy).toHaveBeenCalledTimes(1);
});

});
