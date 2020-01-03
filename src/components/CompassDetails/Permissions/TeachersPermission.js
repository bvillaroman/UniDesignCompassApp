import React, { useState, useContext, useEffect } from 'react';
import { getUsers } from '../../../utils/queries';
import { createTeacherCompasses } from '../../../utils/mutations';
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import { AddCircle } from 'grommet-icons';
import {
  PermissionContainer,
  PermissionHeaderBar,
  PermissionHeader,
  PermissionFormContainer,
  PermissionForm,
  Permissions,
  PermissionButton,
} from "../../../styles/PermissionPage"

const TeachersPermission = () => {
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

  const blankTeacher = {};
  const [teacher, setTeacher] = useState([
    { ...blankTeacher },
  ]);

  const addTeacher = () => {
    setTeacher([...teacher, { ...blankTeacher }]);
  };

  const handleTeacherChange = (e) => {
    const updatedTeachers = [...teacher];
    updatedTeachers[e.target.dataset.idx][e.target.className] = e.target.value;
    setTeacher(updatedTeachers);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    teacher.map((t) =>
      getUsers(t.email)
        .then(res =>
          createTeacherCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        ).catch(err => console.log('failed at getUser', err))
    )
  }

  return (
    <PermissionContainer>
      <PermissionHeaderBar>
        <PermissionHeader>Add Teacher</PermissionHeader>
        <PermissionButton
          label="Add"
          onClick={addTeacher}
          icon={<AddCircle />}
        >
        </PermissionButton>
      </PermissionHeaderBar>
      <PermissionFormContainer>
        <PermissionForm onSubmit={handleSubmit}>
          <Permissions>
            {
              teacher.map((val, idx) => {
                const teacherId = `name-${idx}`;
                return (
                  <div key={`teacher-${idx}`}>
                    <label style={{ fontSize: "1.3rem", fontWeight: "500", width: "5em" }}> {`Teacher #${idx + 1}`} </label>
                    <input
                      style={{ border: "none", borderBottom: "2px solid #f4f6f9", fontSize: "large" }}

                      type="email"
                      name={teacherId}
                      data-idx={idx}
                      id={teacherId}
                      className="email"
                      value={teacher[idx].name}
                      onChange={handleTeacherChange}
                    />
                  </div>
                );
              })
            }
          </Permissions>
          <PermissionButton type="submit" primary label="Submit" disabled={disableButton} />
        </PermissionForm>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default TeachersPermission;
