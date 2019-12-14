import React, { useContext, useState, useEffect } from 'react';
import * as Mutations from "../../../utils/mutations";
import { CompassContext } from "../../../context/CompassPage/context";
import { Auth } from 'aws-amplify';
import { Waypoint } from 'grommet-icons';
import {
  CommentsForm,
  CommentInput,
  CommentFormFlex,
  CommentButton
} from '../../../styles/CommentPage';

const CommentForm = ({ addComment }) => {
  const { interaction } = useContext(CompassContext);
  const [commentValue, setCommentValue] = useState("");
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentValue) return;
    addComment(commentValue)

    const newInteraction = {
      id: interaction.id,
      comments: commentValue
    }
    Mutations.updateInteraction(newInteraction)
      .then(res => res)
      .catch(err => console.log('updateInteraction has an error', err))

    setCommentValue("")
  }

  useEffect(() => {
    setCommentValue(interaction.comments)
  }, [])

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(res => { return setName(res.attributes.name) })
      .catch(err => console.log(err))
  }, [name])

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