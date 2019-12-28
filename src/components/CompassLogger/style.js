import styled from "styled-components"

const LoggerHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LoggerHeaderButtonContainer = styled.div`
  margin: 0.5rem 0;
  width: auto;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
`

const LoggerHeaderText = styled.h4`
  margin: 0;
  width: 100%;
  min-height: 2.0rem;
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: 600;
  text-align: left;
`


export {
  LoggerHeaderText,
  LoggerHeaderButtonContainer,
  LoggerHeaderContainer
}
