import React from 'react';
import { CommentCard } from '../../../styles/CommentPage';

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