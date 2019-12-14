import React, { useState, useEffect, useRef } from 'react';
import DisplayComment from './DisplayComment';
import CommentForm from './CommentForm';
import {
  CommentSession,
  CommentTitle,
  CommentBox,
  CommentRef
} from '../../../styles/CommentPage'

const Comment = () => {
  const [comments, setComments] = useState([])

  const addComment = text => {
    const newComments = [...comments, { text }];
    setComments(newComments);
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [comments]);

  return (
    <CommentSession>
      <CommentTitle>Comments</CommentTitle>
      <CommentBox>
        {comments.map(comment => (
          <DisplayComment
            comment={comment}
          />
        ))}
        <CommentRef ref={messagesEndRef} />
      </CommentBox>
      <CommentForm
        addComment={addComment} />
    </CommentSession>
  )
}

export default Comment;

