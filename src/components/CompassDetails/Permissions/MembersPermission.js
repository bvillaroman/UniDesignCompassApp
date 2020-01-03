import React, { useState, useContext, useEffect } from 'react';
import { getUsers } from '../../../utils/queries';
import { createMemberCompasses } from '../../../utils/mutations';
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import {
  PermissionContainer,
  PermissionHeaderBar,
  PermissionHeader,
  PermissionFormContainer,
  PermissionForm,
  Permissions,
  PermissionButton
} from "../../../styles/PermissionPage"
import { AddCircle } from 'grommet-icons';

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
      <PermissionHeaderBar>
        <PermissionHeader>Add Member</PermissionHeader>
        <PermissionButton
          label="Add"
          onClick={addMember}
          icon={<AddCircle />}
        >
        </PermissionButton>
      </PermissionHeaderBar>
      <PermissionFormContainer>
        <PermissionForm onSubmit={handleSubmit}>

          <Permissions>
            {
              member.map((val, idx) => {
                const memberID = `name-${idx}`;
                return (
                  <div key={`member-${idx}`}>
                    <label style={{ fontSize: "1.3rem", fontWeight: "500", width: "5em" }}>{`Member #${idx + 1}`}</label>
                    <input
                      style={{ border: "none", borderBottom: "2px solid #f4f6f9", fontSize: "large" }}
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
          </Permissions>
          <PermissionButton type="submit" primary label="Submit" size="xsmall" disabled={disableButton} />
        </PermissionForm>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default MembersPermission;
