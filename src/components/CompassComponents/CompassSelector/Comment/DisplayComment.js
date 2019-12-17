import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import {
  CommentCard
} from '../../../../styles/CommentPage';

const DisplayComment = ({ comment }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + ' ' + lastName[0]

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(res => { return setFirstName(res.attributes['custom:firstName']), setLastName(res.attributes['custom:lastName']) })
      .catch(err => console.log(err))
  }, [firstName, lastName])

  console.log("from displaycomments", comment)

  return (
    <CommentCard>
      {fullName}<span>: </span>{comment}
    </CommentCard>
  )
}

export default DisplayComment