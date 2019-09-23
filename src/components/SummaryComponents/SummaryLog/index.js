import React, { useState } from 'react';
import { Storage } from 'aws-amplify';
import {
  SummaryTitle,
  SummaryListButton,
  SummaryLogBox,
  SingleSummaryLog,
  LogAttachments,
  SummaryLogHeader,
  SummaryContainer,
  TextAreaContainer,
  TextArea
} from '../../../styles/SummaryPage'

const Link = ({ item, name }) => {
  const [link, setLink] = useState(undefined)
  Storage.get(item)
    .then(result => setLink(result))
    .catch(err => console.log('You have no attachments', err))
  return (link ? <LogAttachments><a href={link} target="__blank__">{name}</a></LogAttachments> : null)
}

const LinkArray = ({ items }) => {
  return (
    <>
      {items.map((item, i) => <Link name={item.name} key={i} />)}
    </>
  )
}

const SummaryLog = ({ attachments, showLog, currentLog }) => {
  const { items } = attachments;
  return (
    <SummaryContainer>
      <SummaryLogHeader>
        <SummaryTitle>Log and Attachments</SummaryTitle>
        <SummaryListButton label=" Return to Logs " onClick={() => showLog()} />
      </SummaryLogHeader>
      <TextAreaContainer>
        <SummaryLogBox>
          <SingleSummaryLog>{currentLog}</SingleSummaryLog>
        </SummaryLogBox>
        <TextArea></TextArea>
      </TextAreaContainer>
      <LinkArray items={items} />
    </SummaryContainer>
  )
}

export default SummaryLog;



