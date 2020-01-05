import React, { useState, useContext, useEffect } from 'react';
import { getUsers } from '../../../utils/queries';
import { updateCompass } from '../../../utils/mutations';
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import styled from "styled-components"
import {
  PermissionContainer,
  PermissionHeader,
  PermissionFormContainer,
  PermissionForm,
  PermissionButton
} from "./style"

const ScribePermission = () => {
  const { compass } = useContext(CompassContext);
  const { user } = useContext(GlobalContext);

  const [disableButton, setdisableButton] = useState(true)

  useEffect(() => {
    const teachers = compass.teachers.items.filter((teacher) => teacher)
    const teacher = teachers.length > 0 ? teachers.find((t) => t) : " "

    if (compass.owner.id === user.id || (teacher.hasOwnProperty("email") && (teacher.email === user.email))) {
      setdisableButton(false)
    }

    // eslint-disable-next-line
  }, [compass.id])

  const [scribe, setScribe] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    getUsers(scribe)
      .then(res =>
        updateCompass(compass.id, compass.name_of_compass, compass.description_of_compass, res.data.listUsers.items[0].id)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      ).catch(err => console.log(err))
  }

  return (
    <PermissionContainer>
      <PermissionHeader>Change Scribe</PermissionHeader>
      <PermissionFormContainer>
        <PermissionForm onSubmit={handleSubmit}>
          <Scribe>
            <label style={{ fontSize: "1.3rem", fontWeight: "500", width: "5em" }}>
              Scribe
            </label>
            <input
              style={{ border: "none", borderBottom: "2px solid #f4f6f9", fontSize: "large" }}
              type="email"
              name="scribe"
              value={scribe}
              onChange={e => { setScribe(e.target.value) }} />
          </Scribe>

          <PermissionButton type="submit" primary label="Submit" disabled={disableButton} />
        </PermissionForm>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default ScribePermission;

export const Scribe = styled.div`
  margin-top: 0.7em;
  margin-bottom: 0.5em;
  font-size: 1.2rem;
  padding-left: 1em;
  padding-right: 1em;
`