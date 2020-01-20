import React from 'react';
import { GlobalContext } from "../context/context"
import { CompassContext } from "../context/CompassPage/context"
import { ReviewModalContext } from "../context/ReviewModal/context"
import { DashboardContext } from "../context/DashboardPage/context"
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// const renderIntegration = (initialPage = "") => {
//   return render( 
//     wrapPageElement({element : <App />, })    
//   )
// }

const renderUnit = (component, providerValues = {}) => {
  return render( 
    <GlobalContext.Provider value={providerValues.globalProps}>
      <CompassContext.Provider value={providerValues.compassProps}>
        <DashboardContext.Provider value={providerValues.dashboardProps}>
          <ReviewModalContext.Provider value={providerValues.reviewProps}>
            {component}          
          </ReviewModalContext.Provider>
        </DashboardContext.Provider>
      </CompassContext.Provider>
    </GlobalContext.Provider>
  )
}

const rerenderUnit = (component, providerValues = {}) => {
  return ( 
    <GlobalContext.Provider value={providerValues.CardDetailsProps}>
      <CompassContext.Provider value={providerValues.WalletDetailsProps}>
        <ReviewModalContext.Provider value={providerValues.NameDetailsProps}>
          {component}
        </ReviewModalContext.Provider>
      </CompassContext.Provider>
    </GlobalContext.Provider>            
  )
}

export {
  // renderIntegration,
  renderUnit,
  rerenderUnit,
}
