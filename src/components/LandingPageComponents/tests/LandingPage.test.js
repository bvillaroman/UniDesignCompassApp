import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import LandingPage from "../LandingPage"
import { LandingPageContainer } from "../../../styles/LandingPage"
import NavBar from "../NavBar"
import MainView from "../MainView"

Enzyme.configure({ adapter: new Adapter() })

describe("<LandingPage />", () => {
  it("should contain Component: NavBar, MainView, landingPageContainer", () => {
    const wrapper = shallow(<LandingPage />)

    const landingPageContainer = wrapper.find(LandingPageContainer)
    expect(landingPageContainer).toHaveLength(1)

    expect(NavBar).toHaveLength(1)

    expect(MainView).toHaveLength(1)
  })
})
