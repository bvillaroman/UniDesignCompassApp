import React, { useContext, useState } from 'react';
import * as Mutations from "../../../utils/mutations";
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import { Waypoint } from 'grommet-icons';
import {
  CommentsForm,
  CommentInput,
  CommentFormFlex,
  CommentButton
} from '../../../styles/CommentPage';

const CommentForm = ({ addComment }) => {
  const { user } = useContext(GlobalContext);
  const { session  } = useContext(CompassContext);
  const [commentValue, setCommentValue] = useState("");

  const sessionId = session.id

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentValue) return;

    // create a comment by supplying the comment value, 
    // the session its in and the user id from the user context
    Mutations.createComment(commentValue, sessionId, user.id)
      .then(res => {
        // addComment(res.data.createComment);
        setCommentValue("")
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <CommentsForm onSubmit={handleSubmit} >
        <CommentFormFlex style={{
          display: 'flex', width: '100%',
          justifyContent: 'space-evenly'
        }}>
          <CommentInput
            onChange={e => { setCommentValue(e.target.value) }}
            value={commentValue}
            placeholder='Enter Comments...'
          />
          <CommentButton type='submit' ><Waypoint /></CommentButton>
        </CommentFormFlex>
      </CommentsForm>
    </>
  )
}

export default CommentForm;