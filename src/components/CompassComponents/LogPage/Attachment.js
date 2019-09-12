import React from "react";
import { 
  AttachmentItem,
} from "../../../styles/CompassPage"
import { Storage} from 'aws-amplify'
import { Image, Document, Multimedia } from 'grommet-icons';

const Attachment = ({attachment, showAttachment}) => {
  console.log(attachment)
  const loadAttachment = (e) => {
    Storage.get(attachment.key)
      .then(result => {
        showAttachment(result);
      })
      .catch(err => {
        showAttachment('')
      });
    
  }
  return (
    <AttachmentItem 
      icon={<Image color="#5567FD"/>} 
      label={attachment.key ? attachment.key.slice(36) : ''} 
      onClick={loadAttachment} 
    />
  );
}
export default Attachment;
