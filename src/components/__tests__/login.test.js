import React from "react"
import { Login } from "../../pages/Login";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import { ConsoleLogger } from "@aws-amplify/core";
configure({ adapter: new Adapter() });

describe("Login page tests", () => {
    const tree = shallow(<Login />)
    let state
    beforeEach(() => {

        state = {
            password: "",
            username: "",
            user: [],
            loading: false
        };

    });
    describe("Render Tests",()=>{
        it("Snapshot Test",()=>{
            expect(shallowToJson(tree)).toMatchSnapshot();
        });
        it("Check Form controls",()=>{
            expect(tree.find('FormControl').length).toEqual(2);

        })
        it("Check Buttons",()=>{
            expect(tree.find('Button').length).toEqual(2);
        })
    })
    describe("state tests", () => {
        it("Check Page with Blank State", () => {
            expect(tree.state()).toEqual(state)
        })
        
        it("Check input update with non blank State", () => {
            tree.find('FormControl').first().simulate('change',{target:{id:'username',value:'rdiaz002'}});
            tree.find('FormControl').last().simulate('change',{target:{id:'password',value:'rdiaz002'}});
            expect(tree.state().username).toEqual('rdiaz002');
            expect(tree.state().password).toEqual('rdiaz002');
        })
        it("Check loading wheel",()=>{
            tree.setState({loading:false});
            expect(tree.instance())
        })
    })
})

