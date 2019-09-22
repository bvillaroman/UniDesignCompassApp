import React from "react";
import { 
  StepRow, 
  CSMain,
  CSTitle
} from "../../../styles/CompassPage"
import Step from "./Step"

const CompassWheel = ({compassSteps = [],interactions = [], selectStep}) => {
  // const [durations,setDurations] = useState(compassSteps)

  return (
    <CSMain 
      gridArea="main"
      rows={['3rem', '30rem']}
      columns={['15rem', 'fill']}
      fill
      areas={[
        { name: 'title', start: [0, 0], end: [0, 1] },
        { name: 'content', start: [0, 1], end: [1, 1] },
      ]}
    >
      <CSTitle gridArea="title">
        <span>Compass Steps</span>  
      </CSTitle>
      <StepRow gridArea="content" circleLength={compassSteps.length}>
        {
          compassSteps ? compassSteps.map((item,key) => {
            return (
              <Step 
                activeStep={item} 
                key={key} 
                selectStep={selectStep} 
                circleLength={compassSteps.length}
                rotateAngle={key*(360/(compassSteps.length))}
              />
            )
          }) : ''
        }
      </StepRow>
    </CSMain>
  )
};
export default CompassWheel;
