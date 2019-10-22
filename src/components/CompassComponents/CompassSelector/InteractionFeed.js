import React, {useContext} from "react";
import { 
  CSInteractions,
  InteractionsTitle,
  CSInteractionsFeed
} from "../../../styles/CompassPage"
import Interaction from "./interaction"
import { CompassContext } from "../../../context/CompassPage/context"

export default (props) => {
  const {interactions} = useContext(CompassContext)

  // getting the current session
  return (
    <CSInteractions >
      <InteractionsTitle> Recent Logs </InteractionsTitle>
      <CSInteractionsFeed>
        {
          interactions ? interactions.map((item, key) => {
            if (item.step) {
              return ( 
                <Interaction 
                  key={key}
                  interaction={item} 
                  isLastStep={key === interactions.length - 1} 
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