import React from "react";
import { AttachmentItemButton } from "../../../styles/Modals"
import { Storage} from 'aws-amplify'

const Attachment = ({attachment, showAttachment}) => {
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
