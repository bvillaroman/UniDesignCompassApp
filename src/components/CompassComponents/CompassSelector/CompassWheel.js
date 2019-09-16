import React  from "react";
import { 
  StepRow, 
  CSMain,
  CSTitle
} from "../../../styles/CompassPage"
import Step from "./Step"

const CompassSelector = ({steps}) => {

  return (
    <CSMain 
      gridArea="main"
      rows={['10%', '90%']}
      columns={['30%', '70%']}
      fill
      areas={[
        { name: 'title', start: [0, 0], end: [0, 1] },
        { name: 'content', start: [0, 1], end: [1, 1] },
      ]}
    >
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
      <StepRow gridArea="content">
        {
          steps ? steps.map((item,key) => {
            return (<Step activeStep={item} rotateAngle={key*(360/steps.length)}/>)
          }) : ''
        }
      </StepRow>
    </CSMain>
  )
};
export default CompassSelector;
