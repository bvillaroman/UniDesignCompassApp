import React, {useContext} from "react";
import { 
  CSInteractions,
  CSInteractionsTitle,
  CSInteractionsFeed
} from "../../../../styles/CompassPage"
import Interaction from "./interaction"
import { CompassContext } from "../../../../context/CompassPage/context"

const Interactions = (props) => {
  const {interactions} = useContext(CompassContext)

  // getting the current session
  return (
    <CSInteractions >
      <CSInteractionsTitle> Recent Logs </CSInteractionsTitle>
      <CSInteractionsFeed>
        {
          interactions ? interactions.map((item, key) => {
            if (item.step) {
              return ( 
                <Interaction 
                  key={key}
                  interaction={item} 
                  isLastStep={key === 0} 
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

export default Interactions;