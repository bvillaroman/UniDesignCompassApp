import React, { useContext, useState, useEffect } from 'react';
import * as Mutations from "../../../../utils/mutations";
import { CompassContext } from "../../../../context/CompassPage/context";
import { Auth } from 'aws-amplify';
import { Waypoint } from 'grommet-icons';
import {
  CommentsForm,
  CommentInput,
  CommentFormFlex,
  CommentButton
} from '../../../../styles/CommentPage';

const CommentForm = ({ addComment, comments }) => {
  const [commentValue, setCommentValue] = useState("");

  let url = window.location.search.split('i=')
  console.log(url[1])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentValue) return;
    addComment(commentValue)

    const newInteraction = {
      id: url[1],
      comments: [...comments, commentValue]
    }

    Mutations.updateInteraction(newInteraction)
      .then(res => console.log("from form", res))
      .catch(err => console.log('updateInteraction has an error', err))

    setCommentValue("")
  }


  // useEffect(() => {
  //   Auth.currentAuthenticatedUser({ bypassCache: true })
  //     .then(res => { return setName(res.attributes.name) })
  //     .catch(err => console.log(err))
  // }, [name])

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