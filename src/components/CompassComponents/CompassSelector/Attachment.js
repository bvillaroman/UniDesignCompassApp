import React,{ useEffect,useState} from "react";
import { AttachmentItemButton, AttachmentLinkStyle } from "../../../styles/Modals"
import { Storage} from 'aws-amplify'

const Attachment = ({attachment}) => {
  const [source, setSource] = useState("")
  
  useEffect(() => {
    Storage.get(attachment.key)
    .then(result => setSource(result))
    .catch(err =>  setSource(''));
  }, [])

  return (
    <AttachmentLinkStyle href={source} target="_blank" rel="noopener noreferrer">
      <AttachmentItemButton attachment={attachment}/>
    </AttachmentLinkStyle>
  );
}
export default Attachment;
