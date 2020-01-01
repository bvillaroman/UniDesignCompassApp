import React, { useState, useContext, useEffect } from 'react';
import { getUsers } from '../../../utils/queries';
import { updateCompass, createTeacherCompasses, createMemberCompasses, createReaderCompasses } from '../../../utils/mutations';
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import styled from "styled-components";
import { AddCircle } from 'grommet-icons';
import { Button } from 'grommet';

const ScribePermission = () => {
  const { compass } = useContext(CompassContext);
  const { user } = useContext(GlobalContext);
  console.log(compass)
  console.log(user)

  const [disableButton, setdisableButton] = useState(true)

  useEffect(() => {
    const teachers = compass.teachers.items.filter((teacher) => teacher)
    console.log("TEAHCERS HOOK1", teachers)
    const teacher = teachers.length > 0 ? teachers.find((t) => t) : " "
    // const teacher = teachers.length > 0 ? "YO" : " "
    // console.log('teacher', teacher.email)
    // const check = teacher.email
    console.log("TEAHCERS HOOK2", teacher)

    if (compass.owner.id === user.id || (teacher.hasOwnProperty("email") && (teacher.email === user.email))) {
      setdisableButton(false)
    }
  }, [compass.id])

  const [scribe, setScribe] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("NOT PASSED HERE YET")
    console.log(scribe)
    console.log("PASS HERE")

    getUsers(scribe)
      .then(res =>
        updateCompass(compass.id, compass.name_of_compass, compass.description_of_compass, res.data.listUsers.items[0].id)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      ).catch(err => console.log(err))
  }

  return (
    <PermissionContainer>
      <PermissionHeader>Permission</PermissionHeader>
      <PermissionFormContainer>
        <PermissionForm onSubmit={handleSubmit}>

          <ScribeContainer>
            <label style={{ fontSize: "1.3rem", fontWeight: "500", width: "5em" }}>
              Scribe
            </label>
            <input
              style={{ border: "none", borderBottom: "2px solid #f4f6f9", fontSize: "large" }}
              type="email"
              name="scribe"
              value={scribe}
              onChange={e => { setScribe(e.target.value) }} />
          </ScribeContainer>

          <PermissionSubmit type="submit" primary label="Submit" disabled={disableButton} />
          {/* <button type="submit" disabled={disableButton}>Submit</button> */}
        </PermissionForm>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default ScribePermission;

export const PermissionContainer = styled.div`
  width: 83%;
  min-height: 15rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;
`

export const PermissionHeader = styled.div`
  text-align: left;
  padding-left: 0.5rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
`

export const PermissionFormContainer = styled.div`
  margin-top: 1rem;
  overflow: auto;
`

export const PermissionForm = styled.form`
`

export const PermissionButtom = styled.button`
  float: right
`

export const ScribeContainer = styled.div`
  margin-bottom: 0.5em;
  font-size: 1.2rem;
  padding-left: 1em;
  padding-right: 1em;
`

export const ScribeLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  display: inline-block
  width: 5em;
`

export const ScribeInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f6f9;
  font-size: large;
`

export const PermissionSubmit = styled(Button)`
svg {
  transition: all 0.3s;
  fill: white; 
  stroke: white;
  height: 1.2rem;
  width: 1.2rem;
}
background: #5567FD; 
color: white;
padding: 0.3rem 0.7rem;
margin: 0;
font-size: 0.9rem;
font-weight: 500;
float: right;
`