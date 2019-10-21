import React, { useState } from 'react';
import { Storage } from 'aws-amplify';
import { LogAttachments } from '../../../styles/SummaryPage'

const LogLink = ({ item }) => {
  const { key, name } = item;
  const [link, setLink] = useState(undefined)
  console.log({ key })
  Storage.get(key)
    .then(res => setLink(res))
    .catch(err => console.log('You have no attachments', err))
  return (link ? <LogAttachments><a href={link} target="__blank__">{name}</a></LogAttachments> : null)
}

export default LogLink;