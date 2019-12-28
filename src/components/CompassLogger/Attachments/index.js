import React, {useState, useEffect, useContext }  from "react";
import styled from "styled-components"

import { SectionHeader } from "../style"
import { AttachmentButton } from "../../../styles/Modals"
import { Loader } from "../../../styles/layout"
import * as Mutation from '../../../utils/mutations'
import Attachment from "./Attachment"
import { Storage } from 'aws-amplify'
import uuid from 'uuid/v4'
import config from '../../../aws-exports'
import { CompassContext } from "../../../context/CompassPage/context"

const Attachments = (props) => {
  const {compass, session} = useContext(CompassContext);
  
  const [attachments,setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(session.hasOwnProperty("id")){
      let arrAttachment = []
      setLoading(false)
      if (session.attachments.items.length > 0) {  
        session.attachments.items.map((attachment, i) => {
          arrAttachment.push(attachment)
        })
      }

      setAttachments(arrAttachment)
    }

  // eslint-disable-next-line
  }, [session])
  
  // handle uploading an attachment
  const handleUpload = async (event) => { 
    event.preventDefault()
    const { target: { files } } = event
    const [image] = files || []
    if (image && session.hasOwnProperty("id") ) {
      const { name: fileName, type: mimeType } = image
      const fileForUpload = {
        bucket: config.aws_user_files_s3_bucket,
        key:  `${uuid()}${fileName}`,
        region: config.aws_user_files_s3_bucket_region,
        name: fileName,
        type: mimeType,
      }
    
      try {
        setLoading(true)
        await Storage.put(fileForUpload.key, image, { contentType: mimeType })
        Mutation.uploadAttachment({...fileForUpload,attachmentSessionId: session.id})
          .then((res) => {
            setLoading(false)
            setAttachments([res.data.createAttachment, ...attachments])
            
          })
      } catch (err) {
        setLoading(false)
        console.log('error cannot store file: ', err)
      }
    }
  };

  return (
    <AttachmentsContainer>
      <AttachmentsHeader>
        <SectionHeader> Attachments </SectionHeader>
        {
          compass.hasOwnProperty("id") && (
            <AttachmentButtonContainer >
              { loading ? <Loader/> : <AttachmentButton onChange={handleUpload} /> }
            </AttachmentButtonContainer>
          )
        }
      </AttachmentsHeader>
      <SessionAttachments>
        { 
          attachments.length > 0 && 
          attachments.map((item) => (
            <Attachment key={item.key} attachment={item}/>
          )) 
        }
      </SessionAttachments>
    </AttachmentsContainer>
  );
}

export default Attachments;

export const AttachmentsContainer = styled.div`
  width: 90%;
  height: 50%;
  margin: 0 auto;
`
export const AttachmentButtonContainer = styled.div`
  margin: 0.5rem 0;
  width: auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
`
export const SessionAttachments = styled.div`
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 12rem;
  overflow: scroll;
  border-top: 0.1rem solid rgba(0,0,0,0.2);
  @media (max-width: 767px){ 
    max-height: 8rem;
  }  
`
export const AttachmentsHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;