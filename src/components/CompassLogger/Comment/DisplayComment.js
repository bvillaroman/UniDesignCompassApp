import React from 'react';
import styled from "styled-components"

// gets the value of the comment and parses it to show the message/name
const DisplayComment = ({ comment }) => {
  const firstName = comment.commenter ? comment.commenter.first_name : ""
  const lastName = comment.commenter ? comment.commenter.last_name : " "
  const fullName = firstName + ' ' + lastName[0]

  return (
    <CommentCard>
      {fullName}<span>: </span>{comment.content}
    </CommentCard>
  )
}

export default DisplayComment

const CommentCard = styled.div`
  padding: 0.6em; 
  border-bottom: 0.2px solid rgba(0,0,0,0.8);
  text-align: left;
  background: white;
  margin: 0.5rem auto;
`;