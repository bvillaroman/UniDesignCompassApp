import React, { useEffect, useState } from 'react';
import {
  CompassSideBar,
  CompassText,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import {Compass, DocumentText, BarChart} from 'grommet-icons'
import { getCompass } from '../../utils/queries'


const CompassBar = ({compass}) => {
  const [title, setTitle] = useState({})

  // useEffect(() => {
  //   getCompass(compass)
  //     .then((res) => {
  //       setTitle(res.data.getCompass.name_of_compass)
  //     })
  // }, [])

  return (
    <CompassSideBar>
      {/* <CompassText>{title}</CompassText> */}
      <LinkContainer>
        <CompassLink to="/Compass"><Compass/>Compass</CompassLink>
        <CompassLink to="/Summary"><DocumentText/>Summary</CompassLink>
        <CompassLink to="/Analytics"><BarChart/>Analytics</CompassLink>
      </LinkContainer>
    </CompassSideBar>
  )
}
export default CompassBar;