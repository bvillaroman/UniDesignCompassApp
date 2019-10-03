import React from "react";
import BlankBar from "./BlankBar"
import Loadable from "react-loadable"

export default Loadable.Map({
  loader: {
    CompassBar: () => import("./CompassBar"),
    AccountBar: () => import("./AccountBar"),
  },
  loading: () => <BlankBar/>,
  render(loaded, {user, compass, title}) {
    let CompassBar = loaded.CompassBar.default;
    let AccountBar = loaded.AccountBar.default;
    return  (
      <> 
      { 
        user.email ? 
          (compass !== '' && title !== '') ? <CompassBar title={title}/> 
                                          :  compass !== '' ? <BlankBar/> : <AccountBar/>
        : null
      }
      </>
    )
  }
});