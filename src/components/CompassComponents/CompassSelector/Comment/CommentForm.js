import React, { useContext, useState, useEffect } from 'react';
import * as Mutations from "../../../../utils/mutations";
import { CompassContext } from "../../../../context/CompassPage/context";
import { Auth } from 'aws-amplify';
import { updateSessionSub } from "../../../../utils/subscriptions"
import { Waypoint } from 'grommet-icons';
import {
  CommentsForm,
  CommentInput,
  CommentFormFlex,
  CommentButton
} from '../../../../styles/CommentPage';

const CommentForm = ({ addComment, comments }) => {
  const { session, comment } = useContext(CompassContext);
  const [commentValue, setCommentValue] = useState("");

  // let url = window.location.search.split('i=')
  // console.log(url[1])

  const sessionId = session.id

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentValue) return;


    Mutations.createComment(commentValue, sessionId)
      .then(res => 
        console.log(res)
      )
      .catch(err => console.log(err))





    console.log("NEWLY CREATED", comment)

    console.log("pass me")
    addComment(commentValue)

    setCommentValue("")


    // FROM INTERACTION
    // const newInteraction = {
    //   id: url[1],
    //   comments: [...comments, commentValue]
    // }

    // Mutations.updateInteraction(newInteraction)
    //   .then(res => console.log("from form", res))
    //   .catch(err => console.log('updateInteraction has an error', err))

    // FROM Sessions
    // const newSession = {
    //   id: session.id,
    //   name_of_session: session.name_of_session,
    //   description_of_session: session.description_of_session,
    //   comments: [...comments, commentValue]
    // }

    // console.log("NEW SESSION", newSession)


    // Mutations.updateSession(newSession)
    //   .then(res => console.log("from form", res))
    //   .catch(err => console.log('updateSession has an error', err))


    // FROM COMMENTS
    // const newComment = {
    //   comments: [...comments, commentValue]
    // }
    // Mutations.updateComment(newComment)
    //   .then(res => console.log("from form", res))
    //   .catch(err => console.log('updateComment has an error', err))


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