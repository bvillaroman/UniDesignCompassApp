import React from "react"
import renderer from "react-test-renderer"
import Login from "../../pages/Login";
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Compass from '../../pages/Compass';
configure({adapter:new Adapter()});

const tree = shallow(<Compass />);




// describe("SignIn exceptions",() =>{
//      it("failed Log in",()=>{
//          console.log();
//         tree.find('[type="submit"]');
//      })
// })
