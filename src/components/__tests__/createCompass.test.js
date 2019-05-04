import React from "react"
import renderer from "react-test-renderer"
import Login from "../../pages/Login";
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import CreatePage from '../../pages/Create';
configure({adapter:new Adapter()});

const tree = shallow(<CreatePage />);

describe("Testing Create Page",()=>{
    it("Check Render",()=>{
        expect(shallowToJson(tree)).toMatchSnapshot();
    });

    it("Check Components",()=>{
        expect(tree.find('Button')).toHaveLength(2);
    })

})