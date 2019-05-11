import React from "react"
import renderer from "react-test-renderer"
import { store } from "../../state/store";
import { Provider } from 'react-redux';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {CreatePage, DescribePhase, PhaseNumber, ChooseStructure, SubmitCompass } from '../Create';
configure({adapter:new Adapter()});

// const tree = shallow(<Provider store={store}><CreatePage /></Provider>).dive().dive();

describe("Testing Create Page",()=>{

    const DescribePhaseComponent = shallow(<DescribePhase debug/>)
    it("Check DescribePhase Render",()=>{
        expect(shallowToJson(DescribePhaseComponent)).toMatchSnapshot();
    });

    const PhaseNumberComponent = shallow(<PhaseNumber debug/>)
    it("Check PhaseNumber Render",()=>{
        expect(shallowToJson(PhaseNumberComponent)).toMatchSnapshot();
    });

    const ChooseStructureComponent = shallow(<ChooseStructure debug/>)
    it("Check ChooseStructure Render",()=>{
        expect(shallowToJson(ChooseStructureComponent)).toMatchSnapshot();
    });

    const SubmitCompassComponent = shallow(<SubmitCompass debug/>)
    it("Check SubmitCompass Render",()=>{
        expect(shallowToJson(SubmitCompassComponent)).toMatchSnapshot();
    });

    const CreatePageComponent = shallow(<CreatePage debug/>)
    it("Check DescribePhase Render",()=>{
        expect(shallowToJson(CreatePageComponent)).toMatchSnapshot();
    });

    // it("Check Components",()=>{
    //     expect(tree.find('Button')).toHaveLength(2);
    // })

})