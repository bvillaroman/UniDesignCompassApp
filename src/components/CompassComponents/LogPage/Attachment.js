import React from "react";
import { 
  AttachmentItemButton
} from "../../../styles/CompassPage"
import { Storage} from 'aws-amplify'

const Attachment = ({attachment, showAttachment}) => {
  console.log(attachment)
  const loadAttachment = (e) => {
    Storage.get(attachment.key)
      .then(result => {
        showAttachment(attachment,result);
      })
      .catch(err => {
        showAttachment('')
      });
    
  }
  return (
    <AttachmentItemButton  
      attachment={attachment} 
      onClick={loadAttachment} 
    />
  );
}
export default Attachment;
