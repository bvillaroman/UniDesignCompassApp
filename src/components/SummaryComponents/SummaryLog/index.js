import React, { useContext, useState, useEffect } from 'react';
import * as Mutations from "../../../utils/mutations";
import { getInteraction } from "../../../utils/queries"
import { navigate } from "gatsby"
import LogLinkArray from '../SummaryLinks/LogLinkArray'
import { CompassContext } from "../../../context/CompassPage/context";
import { ReviewModalContext } from "../../../context/ReviewModal/context";
import { Edit } from 'grommet-icons'
import {
  SummaryTitle,
  SummaryListButton,
  SummaryLogBox,
  SingleSummaryLog,
  SummaryLogHeader,
  SummaryContainer,
  TextAreaContainer,
  TextArea,
  CommentButton,
  SummaryListButton1,
  TextArea1,
  CommentButton1
} from '../../../styles/SummaryPage'

const SummaryLog = (props) => {
  const { compass, session, interaction } = useContext(CompassContext);
  const { updateShowModal, updateInteraction, showModal } = useContext(ReviewModalContext)
  // const { items } = interaction.attachments;
  const [comment, setComment] = useState("");

  console.log('interaction: ', interaction)
  const { items } = interaction.attachments;
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

  // return (
  //   <SummaryContainer>
  //     <SummaryLogHeader>
  //       <SummaryTitle>Log</SummaryTitle>
  //       <SummaryListButton label="All Logs" onClick={() => navigate(`/Summary/?c=${compass.id}`)} />
  //       <SummaryListButton label="Edit Log" onClick={openReviewLog} />
  //       {showModal}
  //       {/* <SummaryListButton label=" Edit Log " onClick={() => navigate(`/Compass?c=${compass.id}&s=${session.id}&i=${interaction.id}`)} /> */}
  //     </SummaryLogHeader>
  //     <TextAreaContainer>
  //       <SummaryLogBox>
  //         <SingleSummaryLog>{interaction.log_content}</SingleSummaryLog>
  //       </SummaryLogBox>
  //       <form onSubmit={handleSubmit} style={{ marginTop: "0.5em", width: "40%" }}>
  //         <TextArea
  //           placeholder="Please enter comments here..."
  //           onChange={e => {
  //             setComment(e.target.value)
  //           }}
  //           // onChange={handleChange}
  //           value={comment}
  //         >
  //         </TextArea>
  //         <CommentButton type="submit" label="Add Comment"></CommentButton>
  //       </form>
  //     </TextAreaContainer>
  //     <div style={{ overflow: "auto" }}>
  //       <h4 style={{ borderBottom: "0.1rem solid rgba(0,0,0,0.2)", textAlign: "center", overflow: "auto" }}>Attachment</h4>
  //       {/* {items && items.length && <LogLinkArray items={items} />} */}
  //       {items && items.length && <LogLinkArray items={items} />}
  //     </div>
  //   </SummaryContainer>
  // )

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <div style={{ width: '60%', padding: '2em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.7rem', fontWeight: '600' }}>{session.name_of_session}: {interaction.step.name_of_step}</div>
            <SummaryListButton1 label="Edit" onClick={openReviewLog} icon={<Edit />} />
          </div>

          <div style={{ width: '100%', borderRadius: '10px', marginTop: '0.5em', borderColor: 'black', borderStyle: 'solid', height: '17em', overflow: 'auto' }}>
            <div style={{ padding: '1em' }}>{interaction.log_content}</div>
          </div>
        </div>

        <div style={{ width: '40%', backgroundColor: 'white', padding: '2em' }}>
          <div>
            <div style={{ fontSize: '1.7rem', fontWeight: '600', textAlign: 'center' }}>Comment</div>
            <form onSubmit={handleSubmit}>
              <TextArea1
                placeholder="Please enter comments here..."
                onChange={e => {
                  setComment(e.target.value)
                }}
                value={comment}
              >
              </TextArea1>
              <CommentButton1 type="submit" label="Add Comment"></CommentButton1>
            </form>
          </div>

          <div>
            <h4 style={{ textAlign: "center", borderBottom: "0.1rem solid rgba(0,0,0,0.2)" }}>Attachment </h4>
            {items && items.length && <LogLinkArray items={items} />}
          </div>
        </div>

      </div>
    </div >
  )
}

export default SummaryLog;