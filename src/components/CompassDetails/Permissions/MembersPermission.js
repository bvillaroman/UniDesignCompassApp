import React, { useState, useContext, useEffect } from 'react';
import { getUsers } from '../../../utils/queries';
import { createMemberCompasses } from '../../../utils/mutations';
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import styled from "styled-components";
import { AddCircle } from 'grommet-icons';
import { Button } from 'grommet';

const MembersPermission = () => {
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

  const blankMember = {};
  const [member, setMember] = useState([
    { ...blankMember },
  ]);

  const addMember = () => {
    setMember([...member, { ...blankMember }]);
  };

  const handleMemberChange = (e) => {
    const updatedMembers = [...member];
    updatedMembers[e.target.dataset.idx][e.target.className] = e.target.value;
    setMember(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    member.map((m) =>
      getUsers(m.email)
        .then(res =>
          createMemberCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email))
        .then(res => console.log(res))
        .catch(err => console.log(err), console.log("catch hit"))
        .catch(err => console.log('failed at getUser', err))
    )
  }

  return (
    <PermissionContainer>
      <PermissionHeader>Permission</PermissionHeader>
      <PermissionFormContainer>
        <PermissionForm onSubmit={handleSubmit}>

          <MemberContainer>
            <PermissionButtom
              onClick={addMember}
              icon={AddCircle}
            ><AddCircle /> </PermissionButtom>
            {
              member.map((val, idx) => {
                const memberID = `name-${idx}`;
                return (
                  <div key={`member-${idx}`}>
                    <label style={{ fontSize: "1.3rem", fontWeight: "500", width: "5em" }}>{`Member #${idx + 1}`}</label>
                    <input
                      style={{ border: "none", borderBottom: "2px solid #f4f6f9", fontSize: "large" }}
                      size="35"
                      type="email"
                      name={memberID}
                      data-idx={idx}
                      id={memberID}
                      className="email"
                      value={member[idx].name}
                      onChange={handleMemberChange}
                    />
                  </div>
                );
              })
            }
          </MemberContainer>
          <PermissionSubmit type="submit" primary label="Submit" disabled={disableButton} />
          {/* <button type="submit" disabled={disableButton}>Submit</button> */}
        </PermissionForm>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default MembersPermission;

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

export const MemberContainer = styled.div`
  margin-bottom: 0.5em;
  font-size: 1.2rem;
  padding-left: 1em;
  padding-right: 1em;
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