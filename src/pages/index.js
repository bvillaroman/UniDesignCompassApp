import React, {useContext, useEffect} from "react";
import Landing from "../components/LandingPageComponents"
import Dashboard from "../components/DashboardComponent"
import { GlobalContext } from "../context/context"
import { DashboardProvider } from "../context/DashboardPage/context"

const IndexPage = (props) => {
  const { user = {}, clearInteraction, clearSession } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      clearInteraction()
    }
  }, [])
  return (
    <>
      {
        user.hasOwnProperty("email") ? 
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider> 
          : <Landing path="/" />
      }
    </>
  )
}
export default IndexPage;
