import React,{useContext} from "react";
import { 
  SessionView, 
  SessionSection, 
  SessionTitle,
} from "../../styles/CompassPage"
import { CompassContext } from "../../context/CompassPage/context"
import Comments from "./Comment"
import Attachments from "./Attachments"

export default (props) => {
  const {session} = useContext(CompassContext)

  return (
    <SessionView>
      <SessionSection>
        <SessionTitle >
          {session.name_of_session} 
        </SessionTitle>        
      </SessionSection> 
      <Attachments />
      <Comments/>
    </SessionView>
  ) 
};