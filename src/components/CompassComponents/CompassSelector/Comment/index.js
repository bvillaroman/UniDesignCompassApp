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
  const { session } = useContext(CompassContext);

  const [comments, setComments] = useState([])
  const interactions = session.interactions.items
  // let url = window.location.search.split('i=')


  useEffect(() => {

    let url = window.location.search.split('i=')
    if (url.length > 1) {
      // console.log("From HOOKS", interactions.find(interaction => interaction.id === url[1]))
      let interaction = interactions.find(interaction => interaction.id === url[1])
      if (interaction !== undefined) {
        setComments(interaction.comments)
      }
    }

  }, [setComments])

  const addComment = text => {
    const newComments = [...comments, text];
    console.log("new commentsSSSSSSSSS", newComments)
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
        addComment={addComment}
        comments={comments} />
    </CommentSession>
  )
}

export default Comment;

