import React, { useReducer, createContext} from "react";
import ReviewModalReducer, { 
  UPDATE_INTERACTION,
  UPDATE_SHOW_MODAL,
  CLEAR_INTERACTION,
} from "./reducers"

// CONTEXT
export const ReviewModalContext = createContext();

export const initialState = {
  interaction: {},
  showModal: false
}

export const ReviewModalProvider = ({children}) => {
  const [ReviewModalState,dispatch] = useReducer(ReviewModalReducer,initialState)
  return (
    <ReviewModalContext.Provider 
      value={{
        updateShowModal: (showModalBool) => dispatch({type: UPDATE_SHOW_MODAL, payload: showModalBool}),
        updateInteraction: (interaction) => dispatch({type: UPDATE_INTERACTION, payload: interaction}),
        clearInteraction: () => dispatch({type: CLEAR_INTERACTION}),
        ...ReviewModalState
      }}
    >
      {children}
    </ReviewModalContext.Provider>
  )
}


