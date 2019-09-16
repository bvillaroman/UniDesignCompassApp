import React from "react";
import { 
  StepClock,
  SessionView, 
  SessionTitle, 
  SessionHeader, 
  SessionDescription ,
  SessionAttachments,
} from "../../../styles/CompassPage"
import Attachment from "../LogPage/Attachment"

const SessionBar = ({session, attachments, showAttachment}) => {

  return (
    <SessionView 
      rows={['20%', '20%', '60%']}
      columns={['fill']}
      fill
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'description', start: [0, 1], end: [0, 1] },
        { name: 'attachments', start: [0, 2], end: [0, 2] },
      ]}
      gridArea="session"
    >
      <SessionHeader gridArea="header">
        <SessionTitle>
          {session.name_of_session}
        </SessionTitle>
        <StepClock>
        </StepClock>
      </SessionHeader>
        <SessionDescription gridArea="description">
          {session.description_of_session}
        </SessionDescription>
        <SessionAttachments gridArea="attachments">
          <p>Attachments</p>
          { 
            attachments && 
            attachments.map((attachment) => (
              <Attachment attachment={attachment} showAttachment={showAttachment}/> 
            ))
          }
        </SessionAttachments>
    </SessionView>
  ) 
};
export default SessionBar;
