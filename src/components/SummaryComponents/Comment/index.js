import React, { useState } from 'react';
import DisplayComment from './DisplayComment';
import CommentForm from './CommentForm';
import {
  CommentSession,
  CommentTitle,
  CommentBox
} from '../../../styles/CommentPage'

const Comment = () => {
  const [comments, setComments] = useState([])

  const addComment = text => {
    const newComments = [...comments, { text }];
    setComments(newComments);
  };

  return (
    <CommentSession>
      <CommentTitle>Comments</CommentTitle>
      <CommentBox>
        {comments.map(comment => (
          <DisplayComment
            comment={comment}
          />
        ))}
      </CommentBox>
      <CommentForm
        addComment={addComment} />
    </CommentSession>
  )
}

export default Comment;

