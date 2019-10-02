import React, { useState, useEffect } from 'react';
import { updateInteraction } from "../../../utils/mutations";
import { getInteraction } from "../../../utils/queries"
import { navigate } from "gatsby"
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
  TextArea,
  CommentButton
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

const SummaryLog = ({ attachments, showLog, currentLog, interactId }) => {
  const { items } = attachments;
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateInteraction(interactionId)
      .then(res => res)
      .catch(err => console.log('updateInteraction has an error', err))
  }

  const interactionId = {
    id: interactId,
    comments: comment
  }

  useEffect(() => {
    getInteraction(interactId)
      .then(res => {
        setComment(res.data.getInteraction.comments)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <SummaryContainer>
      <SummaryLogHeader>
        <SummaryTitle>Log and Attachments</SummaryTitle>
        <SummaryListButton label=" Return to Logs " onClick={() => showLog()} />
        <SummaryListButton label=" Edit Log " onClick={() => navigate('/Compass')} />
      </SummaryLogHeader>
      <TextAreaContainer>
        <SummaryLogBox>
          <SingleSummaryLog>{currentLog}</SingleSummaryLog>
        </SummaryLogBox>
        <form onSubmit={handleSubmit} style={{ marginTop: "0.5em" }}>
          <TextArea
            placeholder="Please enter comments here..."
            onChange={e => {
              setComment(e.target.value)
            }}
            value={comment}
          >
          </TextArea>
          <CommentButton type="submit" label="Add Comment"></CommentButton>
        </form>
      </TextAreaContainer>
      <LinkArray items={items} />
    </SummaryContainer>
  )
}

export default SummaryLog;



