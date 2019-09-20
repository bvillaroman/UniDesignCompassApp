import React from "react";
import { 
  CSInteractions,
  InteractionsTitle,
  CSInteractionsFeed
} from "../../../styles/CompassPage"
import Interaction from "./interaction"

const InteractionFeed = ({interactions, goToInteraction}) => {
  // getting the current session
  return (
    <CSInteractions >
      <InteractionsTitle >Recent Logs</InteractionsTitle>
      <CSInteractionsFeed>
        {
          interactions ? interactions.map((item, key) => {
            if (item.step) {
              return ( 
                <Interaction 
                  key={key}
                  interaction={item} 
                  isLastStep={key == interactions.length - 1} 
                  goToInteraction={goToInteraction}
                /> 
              )
            }
            return ''
          }
          ) : <p>There are no logs!</p>
        }
      </CSInteractionsFeed>
    </CSInteractions>
  )
};
export default InteractionFeed;
