import React, { useEffect, useContext, useState } from 'react';
import { CompassContext } from "../../../context/CompassPage/context";
import { deleteMemberCompasses, deleteReaderCompasses } from '../../../utils/mutations';
import DeleteMembers from "./DeleteMembers";
import DeleteReaders from "./DeleteReaders";
import styled from "styled-components";
import {
  PermissionHeader,
  PermissionFormContainer,
  DeleteContainer,
} from "./style"

const DisplayPermission = () => {
  const { compass } = useContext(CompassContext);

  const [teamLeader, setTeamLeader] = useState("");
  const [scribe, setScribe] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [members, setMembers] = useState([]);
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    const teacher = compass.teachers.items.map((t) => t)
    const member = compass.members.items.map((m) => m)
    const reader = compass.readers.items.map((r) => r)

    setTeamLeader(compass.owner.email)
    setScribe(compass.scribe.email)
    setTeachers(teacher)
    setMembers(member)
    setReaders(reader)

    // eslint-disable-next-line
  }, [compass.id])

  const removeMember = id => {
    deleteMemberCompasses(id)
      .then(res => console.log("success", res))
      .catch(err => console.log("failed", err))
  };

  const removeReader = id => {
    deleteReaderCompasses(id)
      .then(res => console.log("success", res))
      .catch(err => console.log("failed", err))
  };

  return (
    <PermissionContainer>
      <PermissionHeader>Permission</PermissionHeader>
      <PermissionFormContainer>
        <PermissionType>Team Leader: {teamLeader}</PermissionType>
        <PermissionType>Scribe: {scribe}</PermissionType>
        <PermissionType>Teachers: {teachers.map((t) => <DeleteContainer>{t.email}</DeleteContainer>)}</PermissionType>
        {/* <PermissionType>Members: {members.map((m) => <h4>{m.email}</h4>)}</PermissionType> */}
        <PermissionType>Members: {members.map((m) => <DeleteMembers id={m.id} email={m.email} removeMember={removeMember} />)}</PermissionType>
        {/* <PermissionType>Readers: {readers.map((r) => <h4>{r.email}</h4>)}</PermissionType> */}
        <PermissionType>Readers: {readers.map((r) => <DeleteReaders id={r.id} email={r.email} removeReader={removeReader} />)}</PermissionType>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default DisplayPermission;

export const PermissionContainer = styled.div`
  // width: 83%;
  height: 40.5%;
  min-height: 15rem;
  margin: 1.65rem;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  transition: box-shadow 150ms ease;

  @media (max-width: 767px){
    width: 100%;
  } 
`

export const PermissionType = styled.h4`

`