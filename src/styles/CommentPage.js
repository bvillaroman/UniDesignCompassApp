import styled from "styled-components"

//Index
export const CommentSession = styled.div`
  width: 90%;
  min-height: 3rem;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const CommentTitle = styled.h4`
  word-break: break-word;
  font-size: 2rem;
  padding: 0;
  width: 50%;
  color: black;
  line-height: 2.1rem;
  text-align: left;
  font-weight: 600;
  margin: 0;
`;

export const CommentBox = styled.div`
  height: 20vh;
  overflow: auto;
  padding: 0.5em;
`;

//Display Comments
export const CommentCard = styled.div`
  padding: 0.6em; 
  border-bottom: 0.2px solid rgba(0,0,0,0.8);
  text-align: left;
  background: white;
  margin: 0.5rem auto;
`;

//Comment Form
export const CommentsForm = styled.form`

`;

export const CommentInput = styled.input`
  width: 90%;
  font-size: 18px;
`;

export const CommentFormFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const CommentButton = styled.button`
`;


