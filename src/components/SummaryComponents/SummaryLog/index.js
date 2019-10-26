import React, { useContext, useState, useEffect } from 'react';
import { updateInteraction } from "../../../utils/mutations";
import { getInteraction } from "../../../utils/queries"
import { navigate } from "gatsby"
import LogLinkArray from '../SummaryLinks/LogLinkArray'
import { CompassContext } from "../../../context/CompassPage/context";
import {
  SummaryTitle,
  SummaryListButton,
  SummaryLogBox,
  SingleSummaryLog,
  SummaryLogHeader,
  SummaryContainer,
  TextAreaContainer,
  TextArea,
  CommentButton
} from '../../../styles/SummaryPage'

const SummaryLog = (props) => {
  const { compass, session, interaction } = useContext(CompassContext);
  const [comment, setComment] = useState("");

  const { items } = interaction.attachments;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInteraction = {
      id: interaction.id,
      comments: comment
    }
    updateInteraction(newInteraction)
      .then(res => res)
      .catch(err => console.log('updateInteraction has an error', err))
  }

  useEffect(() => {
    // getInteraction(interaction.id)
    // .then(res => {
    // setComment(res.data.getInteraction.interaction.comments)
    setComment(interaction.comments)
    // })
    // .catch(err => console.log(err))
    // }, [interaction.comments])
  })

  return (
    <SummaryContainer>
      <SummaryLogHeader>
        <SummaryTitle>Log and Attachments</SummaryTitle>
        <SummaryListButton label=" All Logs " onClick={() => navigate(`/Summary?c=${compass.id}`)} />
        <SummaryListButton label=" Edit Log " onClick={() => navigate(`/Compass?c=${compass.id}&s=${session.id}&i=${interaction.id}`)} />
      </SummaryLogHeader>
      <TextAreaContainer>
        <SummaryLogBox>
          <SingleSummaryLog>{interaction.log_content}</SingleSummaryLog>
        </SummaryLogBox>
        <form onSubmit={handleSubmit} style={{ marginTop: "0.5em", width: "40%" }}>
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