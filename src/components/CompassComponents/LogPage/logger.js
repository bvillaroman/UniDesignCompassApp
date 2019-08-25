import React,{ useState, useEffect} from "react";
import { 
  LoggerInput, 
  LoggerGrid, 
  LoggerTA, 
  LoggerNav, 
  StepName,
  LoggerInnerNav,
  CompassButton,
  AttachmentButton 
} from "../../../styles/CompassPage"
import {userLogger} from "../context"


const Logger = (props) => {
  const {setLog} = userLogger()
  const [value, setValue] = useState('');

  return (
    <LoggerGrid
      fill="vertical"
      rows={['8%', '95%']}
      columns={['fill']}
      gap="small"
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [0, 1], end: [1, 1] },
      ]}
    >
      <LoggerNav gridArea="header" >
        <LoggerInnerNav>
          <CompassButton />
          <StepName> Step Title </StepName>
          {/* <AttachmentButton/> */}
          
        </LoggerInnerNav>
      </LoggerNav>
      <LoggerTA gridArea="main" >
        <LoggerInput
          placeholder="Enter Log"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </LoggerTA>
    </LoggerGrid>
  );
}
export default Logger;
