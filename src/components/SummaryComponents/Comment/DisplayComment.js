import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import {
  CommentCard
} from '../../../styles/CommentPage';

const DisplayComment = ({ comment }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(res => { return setName(res.attributes.name) })
      .catch(err => console.log(err))
  }, [name])

  return (
    <CommentCard>
      Kenny<span>: </span>{comment.text}
    </CommentCard>
  )
}

export default DisplayComment