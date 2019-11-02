import React, { useState } from 'react';
import { Storage } from 'aws-amplify';
import { LogAttachments } from '../../../styles/SummaryPage'
import { AttachmentItem, AttachmentPreviewContainer, AttachmentPhotoStyle } from '../../../styles/Modals'
import { Edit, Attachment, Close, Download, Image, Document, Multimedia, Video } from 'grommet-icons';


const LogLink = ({ item }) => {
  const { key, name, type } = item;
  const [link, setLink] = useState(undefined)
  //console.log({ key })

  Storage.get(key)
    .then(res => setLink(res))
    // .then(res => console.log(res))
    .catch(err => console.log('You have no attachments', err))

  return (
    // link ? <LogAttachments><a href={link} target="__blank__">{name}</a></LogAttachments> : null
    link ?
      <AttachmentItem >
        {
          type &&
          (
            type.includes("image") ? <Image color="#5567FD" /> :
              type.includes("mp4") ? <Multimedia color="#5567FD" /> :
                <Document color="#5567FD" />
          )
        }
        <span>{key ? name : ''}</span>
      </AttachmentItem>
      : null
  )
}

export default LogLink;