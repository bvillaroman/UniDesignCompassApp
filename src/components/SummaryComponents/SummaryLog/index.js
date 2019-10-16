import React, { useState, useEffect } from 'react';
import { updateInteraction } from "../../../utils/mutations";
import { getInteraction } from "../../../utils/queries"
import { navigate } from "gatsby"
import LogLinkArray from '../SummaryLinks/LogLinkArray'
// import { Storage } from 'aws-amplify';
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

// const Link = ({ item }) => {
//   const { key, name } = item;
//   const [link, setLink] = useState(undefined)
//   console.log({ key })
//   Storage.get(key)
//     .then(res => setLink(res))
//     .catch(err => console.log('You have no attachments', err))
//   return (link ? <LogAttachments><a href={link} target="__blank__">{name}</a></LogAttachments> : null)
// }

// const LinkArray = ({ items }) => {
//   console.log({ items })
//   return (
//     <>
//       {items.map((item, i) => <Link item={item} />)}
//       {/* {<Link name={item.name} key={i} />} */}
//     </>
//   )
// }

const SummaryLog = ({ attachments, showLog, currentLog, interactId, compassID, comments, sessionID, interactionID }) => {
  const [comment, setComment] = useState("");
  // const [sessionID, setSessionID] = useState("");
  // const [interactionID, setInteractionID] = useState("");

  const { items } = attachments;
  console.log(items, 'SUP')
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
        <SummaryListButton label=" Return to Logs " onClick={() => navigate(`/Summary?c=${compassID}`)} />
        <SummaryListButton label=" Edit Log " onClick={() => navigate(`/Compass?c=${compassID}&s=${sessionID}&i=${interactionID}`)} />
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
      <LogLinkArray items={items} />
    </SummaryContainer>
  )
}

export default SummaryLog;



