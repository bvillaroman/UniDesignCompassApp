import React from "react"
import renderer from "react-test-renderer"
import Login from "../../pages/Login";
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
configure({adapter:new Adapter()});

const tree = shallow(<Login store={store} />).dive().dive();

describe("Check Login_Page", () => {
    it("render", () => {
        console.log(tree.instance());
        expect(shallowToJson(tree)).toMatchSnapshot()
    })
})
describe("Check Password", () => {
    it("render", () => {
        expect(shallowToJson(tree)).toMatchSnapshot()
    })
})
describe("Check verification page loads", () => {
    it("render", () => {
        expect(shallowToJson(tree)).toMatchSnapshot()
    })
})
describe("Check user signup page ", () => {
    it("render", () => {
        expect(shallowToJson(tree)).toMatchSnapshot()
    })
})
describe("", () => {
    it("render", () => {
        expect(shallowToJson(tree)).toMatchSnapshot()
    })
})

// describe("SignIn exceptions",() =>{
//      it("failed Log in",()=>{
//          console.log();
//         tree.find('[type="submit"]');
//      })
// })
