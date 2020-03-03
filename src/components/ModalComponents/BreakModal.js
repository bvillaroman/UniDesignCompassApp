import React from 'react';
import styled from "styled-components"
import {Layer} from "grommet"
import { GlobalButton } from "../../styles/global"

const BreakModal = ({show, setShow, onClick}) => {
  return (
    <div>
      <GlobalButton label="Break" onClick={() => setShow(true)} />
      { 
        show && (
        <ModalContainer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <ModalHeader> Are you sure you want to take a break?</ModalHeader>
          <ModalButtons>
            <GlobalButton label="Go Back" onClick={onClick}/>
            <GlobalButton label="Take a Break" onClick={onClick}/>
          </ModalButtons>
        </ModalContainer>
      )}
    </div>
  );
}

export default BreakModal;

const ModalContainer = styled(Layer)`
  width: 60%;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const ModalButtons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: space-between;
  margin: 0 auto;
`;