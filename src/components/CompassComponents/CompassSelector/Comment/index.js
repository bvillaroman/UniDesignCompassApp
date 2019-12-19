import React, { useState, useEffect, useRef, useContext } from 'react';
import DisplayComment from './DisplayComment';
import CommentForm from './CommentForm';
import { CompassContext } from "../../../../context/CompassPage/context";
import {
  CommentSession,
  CommentTitle,
  CommentBox,
  CommentRef
} from '../../../../styles/CommentPage'

const Comment = () => {
  const messagesEndRef = useRef(null);
  const { session } = useContext(CompassContext);
  const [comments, setComments] = useState([])

  // listening everytime session.comments changes
  useEffect(() => {
    setComments(session.comments.items)
  }, [session.comments.items])

  // gets a new COMMENT object and adds it to the feed
  const addComment = newComment => {
    const newComments = [...comments, newComment];
    setComments(newComments);
  };

  const timeConverter = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return 1
    } else if (a.createdAt < b.createdAt) {
      return -1
    } else {
      return 0
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [comments]);

  return (
    <CommentSession>
      <CommentTitle>Comments</CommentTitle>
      <CommentBox>
        {
          comments.sort(timeConverter).map((comment, key) => <DisplayComment comment={comment} key={key} />)
        }
        <CommentRef ref={messagesEndRef} />
      </CommentBox>
      <CommentForm
        addComment={addComment}
        comments={comments} />
    </CommentSession>
  )
}

export default Comment;

