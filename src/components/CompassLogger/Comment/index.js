import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from "styled-components"

import {LoggerHeaderText} from "../style"
import DisplayComment from './DisplayComment';
import CommentForm from './CommentForm';
import { CompassContext } from "../../../context/CompassPage/context";


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
    messagesEndRef.current.scrollIntoView({ behavior: "smooth",  block: 'nearest' });
  };

  useEffect(scrollToBottom, [comments]);

  return (
    <CommentSession>
      <LoggerHeaderText>Comments</LoggerHeaderText>
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

export const CommentSession = styled.div`
  width: 85%;
  min-height: 2.5rem;
  height: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


`;

export const CommentBox = styled.div`
  height: 10rem;
  overflow: auto;
  padding: 0.5em;
`;

export const CommentRef = styled.div`
`;