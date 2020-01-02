import React, { useEffect, useContext, useState } from 'react';
import { CompassContext } from "../../../context/CompassPage/context";
import styled from "styled-components";
import { Button } from 'grommet';

const DisplayPermission = () => {
  const { compass } = useContext(CompassContext);

  const [teamLeader, setTeamLeader] = useState("");
  const [scribe, setScribe] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [members, setMembers] = useState([]);
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    const teacher = compass.teachers.items.map((t) => t.email)
    const member = compass.members.items.map((m) => m.email)
    const reader = compass.readers.items.map((r) => r.email)

    setTeamLeader(compass.owner.email)
    setScribe(compass.scribe.email)
    setTeachers(teacher)
    setMembers(member)
    setReaders(reader)

    // eslint-disable-next-line
  }, [compass.id])

  return (
    <PermissionContainer>
      <PermissionHeader>Permission</PermissionHeader>
      <PermissionFormContainer>
        <h4>Team Leader: {teamLeader}</h4>
        <h4>Scribe: {scribe}</h4>
        <h4>Teachers: {teachers}</h4>
        <h4>Members: {members}</h4>
        <h4>Readers: {readers}</h4>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default DisplayPermission;

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