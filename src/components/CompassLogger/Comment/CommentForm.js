import React, { useContext, useState } from 'react';
import styled from "styled-components"
import * as Mutations from "../../../utils/mutations";
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import { Send } from 'grommet-icons';

const CommentForm = (props) => {
  const { user } = useContext(GlobalContext);
  const { session } = useContext(CompassContext);
  const [commentValue, setCommentValue] = useState("");

  const sessionId = session.id

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentValue) return;

    // create a comment by supplying the comment value, 
    // the session its in and the user id from the user context
    Mutations.createComment(commentValue, sessionId, user.id)
      .then(res => {
        props.addComment(res.data.createComment);
        setCommentValue("")
      })
      .catch(err => console.log(err))
  }

  return (
    <CommentsForm onSubmit={handleSubmit} >
      <CommentFormFlex>
        <CommentInput
          onChange={e => { setCommentValue(e.target.value) }}
          value={commentValue}
          placeholder='Enter Comments...'
        />
        <CommentButton type='submit' ><Send /></CommentButton>
      </CommentFormFlex>
    </CommentsForm>

  )
}

export default CommentForm;

const CommentsForm = styled.form`

`;
const CommentInput = styled.input`
  width: 85%;
  font-size: 18px;
`;

const CommentFormFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CommentButton = styled.button`

`;
