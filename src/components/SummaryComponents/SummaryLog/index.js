import React, { useContext, useState, useEffect } from 'react';
import * as Mutations from "../../../utils/mutations";
import { getInteraction } from "../../../utils/queries"
import { navigate } from "gatsby"
import LogLinkArray from '../SummaryLinks/LogLinkArray'
import { CompassContext } from "../../../context/CompassPage/context";
import { ReviewModalContext } from "../../../context/ReviewModal/context";
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
  const { updateShowModal, updateInteraction, showModal } = useContext(ReviewModalContext)
  const [comment, setComment] = useState("");

  const { items } = interaction.attachments;
  // console.log(items)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInteraction = {
      id: interaction.id,
      comments: comment
    }
    Mutations.updateInteraction(newInteraction)
      .then(res => res)
      .catch(err => console.log('updateInteraction has an error', err))
  }

  useEffect(() => {
    setComment(interaction.comments)
  }, [])

  const openReviewLog = (evt) => {
    updateInteraction(interaction);
    // console.log(interaction)
    updateShowModal(true)
  }

  return (
    <SummaryContainer>
      <SummaryLogHeader>
        <SummaryTitle>Log</SummaryTitle>
        <SummaryListButton label=" All Logs " onClick={() => navigate(`/Summary/?c=${compass.id}`)} />
        <SummaryListButton label=" Edit Log " onClick={openReviewLog} />
        {showModal}
        {/* <SummaryListButton label=" Edit Log " onClick={() => navigate(`/Compass?c=${compass.id}&s=${session.id}&i=${interaction.id}`)} /> */}
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
            // onChange={handleChange}
            value={comment}
          >
          </TextArea>
          <CommentButton type="submit" label="Add Comment"></CommentButton>
        </form>
      </TextAreaContainer>
      <div style={{ overflow: "auto" }}>
        <h4 style={{ borderBottom: "0.1rem solid rgba(0,0,0,0.2)", textAlign: "center", overflow: "auto" }}>Attachment</h4>
        {items && items.length && <LogLinkArray items={items} />}
      </div>
    </SummaryContainer>
  )
}

export default SummaryLog;