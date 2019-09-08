import React, {useEffect,useState} from 'react';
import {
  CompassSideBar,
  CompassText,
  LinkContainer,
  CompassLink,
} from '../../styles/SideBar'
import {Compass, DocumentText, BarChart} from 'grommet-icons'
import {getCompass} from "../../utils/queries"

const CompassBar = ({id}) => {
  const [compass,setCompass] = useState('')

  useEffect(() => {
    getCompass(id)
      .then((res) => {
        setCompass(res.data.getCompass)
      })
  },[]); 

  return (
    <CompassSideBar>
      <CompassText>{compass.name_of_compass}</CompassText>
      <LinkContainer>
        <CompassLink to="/Compass"><Compass/> Compass</CompassLink>
        <CompassLink to="/Summary"><DocumentText/> Summary</CompassLink>
        <CompassLink to="/Analytics"><BarChart/> Analytics</CompassLink>
      </LinkContainer>
    </CompassSideBar>
  )
}
export default CompassBar;