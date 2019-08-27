import React from 'react';
import Layout from '../components/Layout'
import {NavBar, MainView} from '../components/LandingPageComponents'

class LandingPage extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar/>
        <MainView/>
      </Layout>
    )
  }
}

export default LandingPage