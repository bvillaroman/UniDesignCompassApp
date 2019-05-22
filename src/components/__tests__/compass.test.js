import React from "react"
import renderer from "react-test-renderer"
import Login from "../../pages/Login";
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {mountToJson} from 'enzyme-to-json';
import {Compass} from '../../components/Compass/index';
configure({adapter:new Adapter()});

const tree = shallow(<Compass />);

describe("Check Auto Generation of Compass", () => {
    it("Auto Generate", () => {
        tree.setState({compassName:"The Best Compass"});
        expect(tree.find('h1')).to.have.lengthOf(1);
    })
})


// describe("SignIn exceptions",() =>{
//      it("failed Log in",()=>{
//          console.log();
//         tree.find('[type="submit"]');
//      })
// })
