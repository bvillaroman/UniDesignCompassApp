import React from "react"
import renderer from "react-test-renderer"
import Login from "../../pages/Login";
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import HomePage from '../../pages/HomePage';
configure({adapter:new Adapter()});


const tree = shallow(<HomePage/>);


describe("Testing Home Page",()=>{
    it("Check Render",()=>{
        expect(shallowToJson(tree)).toMatchSnapshot();
    });
    it("Check main div",()=>{
        expect(tree.find('div')).toHaveLength(1);
    });
    it("Check Objective and Features" ,()=>{
        expect(tree.find('Card')).toHaveLength(2);
    });
    it("Check Begin Button" ,()=>{
        expect(tree.find('Button.presentation-button')).toHaveLength(1);
    });

})