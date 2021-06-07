import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import MainView from "./MainView"
import {
  MainViewContainer,
  MainContent,
  AuthContainer,
  AboutContainer,
  ContactContainer,
} from "../../styles/LandingPage"
import Auth from "../../components/AuthComponent"

Enzyme.configure({ adapter: new Adapter() })

describe("<MainView />", () => {
  it("should contain MainView content", () => {
    const wrapper = shallow(<MainView />)

    const mainViewContainer = wrapper.find(MainViewContainer)
    expect(mainViewContainer).toHaveLength(1)

    const mainContent = wrapper.find(MainContent)
    expect(mainContent).toHaveLength(1)
    expect(mainContent.text()).toBe(
      "Log, Track and Visualize your Design Process."
    )

    const aboutContainer = wrapper.find(AboutContainer)
    expect(aboutContainer).toHaveLength(1)
    expect(aboutContainer.text()).toBe("About UDC")

    const contactContainer = wrapper.find(ContactContainer)
    expect(contactContainer).toHaveLength(1)
    expect(contactContainer.text()).toBe("Contact")

    const authContainer = wrapper.find(AuthContainer)
    expect(authContainer).toHaveLength(1)
    expect(authContainer.contains(<Auth />)).toBe(true)
  })
})
