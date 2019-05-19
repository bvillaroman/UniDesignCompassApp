import React from "react"
import { Login } from "../../pages/Login";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
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
    describe("state tests", () => {
        it("Check Page with Blank State", () => {
            expect(tree.state()).toEqual(state)
        })
    })
})

