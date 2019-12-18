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
  const { session, comment } = useContext(CompassContext);

  const [comments, setComments] = useState([])
  // const interactions = session.interactions.items



  console.log("index of comment", comment)

  useEffect(() => {

    // let url = window.location.search.split('i=')
    // if (url.length > 1) {
    // console.log("From HOOKS", interactions.find(interaction => interaction.id === url[1]))
    // let interaction = interactions.find(interaction => interaction.id === url[1])
    // if (interaction !== undefined) {
    setComments(session.comments.items)
    // }
    // }

  }, [setComments])

  const addComment = text => {
    const newComments = [...comments, text];
    console.log("new commentsSSSSSSSSS", newComments)
    setComments(newComments);
  };

  const timeConverter = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1
    } else if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return 0
    }
  }

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [comments]);

  return (
    <CommentSession>
      <CommentTitle>Comments</CommentTitle>
      <CommentBox>
        {comments.sort(timeConverter).map(comment => (
          <DisplayComment
            comment={comment}
          />
          // console.log(comment)
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

