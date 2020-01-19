import React, { useContext, useEffect, useState, Suspense } from "react";
import { CompassContext } from "../context/CompassPage/context"

import { MainView } from "../styles/CompassPage"
import { Loader, ErrorContainer } from "../styles/layout"
import CompassDetails from "../components/CompassDetails"

import queryStringParser from '../utils/queryStringParser'
import { getCompass } from '../utils/queries'

const CompassPage = (props) => {
  const { 
    compass,
    updateCompass, 
    clearCompass,

  } = useContext(CompassContext);

  const [loading, setLoading] = useState(true)


  const { compassID } = queryStringParser(props.location.search)
  
  // setting up the compass through the url
  useEffect(() => {
    if (compassID !== "") {
      setLoading(true)
      getCompass(compassID)
        .then((res) => {
          updateCompass(res.data.getCompass);
          setLoading(false)
        })
        .catch((err) => {          
          clearCompass();
          setLoading(false)
          console.log(err)
        })
    } else {
      clearCompass()      
    } 

  // eslint-disable-next-line
  }, [compassID])

  return (
    <MainView>
      {
        loading ? <Loader /> : (
          compass.hasOwnProperty("id") ? (            
            <Suspense fallback={<Loader/>}>
              <CompassDetails /> 
            </Suspense>
          ) : <ErrorContainer> Sorry, this Project does not exist !</ErrorContainer> 
        )  
      }
    </MainView>
  )
}
export default CompassPage;
