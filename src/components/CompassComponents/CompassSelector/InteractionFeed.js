import React from "react";
import { 
  CSInteractions,
  CSTitle,
  CSInteractionsFeed
} from "../../../styles/CompassPage"
import Interaction from "./interaction"

const CompassSelector = ({interactions}) => {
  // getting the current session
  return (
    <CSInteractions 
      gridArea="interactions"
      rows={['100%']}
      fill
      columns={['25%', '75%']}
      areas={[
        { name: 'title', start: [0, 0], end: [0, 0] },
        { name: 'content', start: [1, 0], end: [1, 0] },
      ]}
    >
      <CSTitle gridArea="title">Recent Logs</CSTitle>
      <CSInteractionsFeed gridArea="content">
        {
          interactions ? interactions.map((item, key) => {
            if (item.step) return ( <Interaction interaction={item} isLastStep={key == interactions.length - 1}/> )
            return ''
          }
          ) : <p>There are no logs!</p>
        }
      </CSInteractionsFeed>
    </CSInteractions>
  )
};
export default CompassSelector;
