/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/styles/global.css"
// You can delete this file if you're not using it
import React from "react"
import { GlobalProvider } from "./src/context/context"
import Layout from "./src/components/layout"
import { Grommet } from 'grommet';

export const wrapRootElement = ({ element }) => (
  <Grommet 
    theme={
      {
        global: { 
          colors: { primary: '#5361FF', secondary: '#F2F2F2',fore: '#FEFFFE', focus: "transparent"  } 
        } ,
        button: {
          color: 'white', 
          primary : {color: '#5361FF'},
          border : {color: '#5361FF'}
        },
        accordion: {
          border: {
            color: "transparent"
          },
          icons: {
            color: '#5361FF'
          }
        },
        formField: {
          border: {
            color: "transparent"
          }
        }
      }
    }
  >
    <GlobalProvider>
      {element}
    </GlobalProvider>
  </Grommet>
)

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

// export const onClientEntry = () => {
//   localStorage.removeItem('compass')
//   localStorage.removeItem('session')
// }
