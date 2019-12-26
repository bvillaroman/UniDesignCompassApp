import React, { useState, useContext } from 'react';
import { getUsers } from '../../../utils/queries'
import { updateCompass, updateCompassPermissions, createTeacherCompasses, createMemberCompasses, createReaderCompasses } from '../../../utils/mutations'
import { CompassContext } from "../../../context/CompassPage/context"
import styled from "styled-components"

const CompassPermissions = () => {
  const { compass } = useContext(CompassContext);
  console.log(compass)

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

  const blankReader = {};
  const [reader, setReader] = useState([
    { ...blankReader },
  ]);

  const addReader = () => {
    setReader([...reader, { ...blankReader }]);
  };

  const handleReaderChange = (e) => {
    const updatedReaders = [...reader];
    updatedReaders[e.target.dataset.idx][e.target.className] = e.target.value;
    setReader(updatedReaders);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(teacher)

    teacher.map((t) => {
      console.log(t)

      getUsers(t.email)
        .then(res => //console.log(res)) //.data.listUsers.items[0].id

          createTeacherCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .catch(err => console.log('failed at getUser', err))
    })

    console.log('Compass Permission Clicked')
    // getUsers(teacher[0].email)
    //   .then(res => console.log(res)) //.data.listUsers.items[0].id

    //   //   createTeacherCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email))
    //   // .then(res => console.log(res))
    //   // .catch(err => console.log(err))
    //   .catch(err => console.log('failed at getUser', err))

    member.map((m) => {
      console.log(m)

      getUsers(m.email)
        .then(res => //console.log(res)) //.data.listUsers.items[0].id

          createMemberCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .catch(err => console.log('failed at getUser', err))
    })

    reader.map((r) => {
      console.log(r)

      getUsers(r.email)
        .then(res => //console.log(res)) //.data.listUsers.items[0].id

          createReaderCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .catch(err => console.log('failed at getUser', err))
    })
  }

  return (
    <div>
      <h3>Permission</h3>
      <PermissionForm onSubmit={handleSubmit}>
        <input
          type="button"
          value="Add New Teacher"
          onClick={addTeacher}
        />
        {
          teacher.map((val, idx) => {
            const teacherId = `name-${idx}`;
            return (
              <div key={`teacher-${idx}`}>
                <label >{`teacher #${idx + 1}`}</label>
                <input
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

        <input
          type="button"
          value="Add New Member"
          onClick={addMember}
        />
        {
          member.map((val, idx) => {
            const memberID = `name-${idx}`;
            return (
              <div key={`member-${idx}`}>
                <label >{`member #${idx + 1}`}</label>
                <input
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

        <input
          type="button"
          value="Add New Reader"
          onClick={addReader}
        />
        {
          reader.map((val, idx) => {
            const readerID = `name-${idx}`;
            return (
              <div key={`reader-${idx}`}>
                <label >{`reader #${idx + 1}`}</label>
                <input
                  type="email"
                  name={readerID}
                  data-idx={idx}
                  id={readerID}
                  className="email"
                  value={reader[idx].name}
                  onChange={handleReaderChange}
                />
              </div>
            );
          })
        }
        <input type="submit" value="Submit" />
      </PermissionForm>
    </div>
  );
};
export default CompassPermissions

export const PermissionForm = styled.form`

`