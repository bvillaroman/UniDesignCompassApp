import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NavBar from "../NavBar"
import {
  NavContainer,
  GatsbyLink,
  LinkContainer,
  LogoBox,
} from "../../../styles/LandingPage"

Enzyme.configure({ adapter: new Adapter() })

describe("<NavBar />", () => {
  it("should contain NavBar content", () => {
    const wrapper = shallow(<NavBar />)

    const navContainer = wrapper.find(NavContainer)
    expect(navContainer).toHaveLength(1)

    const logoBox = wrapper.find(LogoBox)
    expect(logoBox).toHaveLength(1)
    expect(logoBox.contains(<GatsbyLink to="/" label="UDCompass" />)).toBe(true)

    const linkContainer = wrapper.find(LinkContainer)
    expect(linkContainer).toHaveLength(1)
    expect(
      linkContainer.contains(<GatsbyLink to="/" label="About UDC" />)
    ).toBe(true)
    expect(linkContainer.contains(<GatsbyLink to="/" label="Contact" />)).toBe(
      true
    )
  })
})
