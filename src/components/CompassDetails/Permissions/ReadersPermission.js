import React, { useState, useContext, useEffect } from 'react';
import { getUsers } from '../../../utils/queries';
import { createReaderCompasses } from '../../../utils/mutations';
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

const ReadersPermission = () => {
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

    reader.map((r) =>
      getUsers(r.email)
        .then(res =>
          createReaderCompasses(compass.id, res.data.listUsers.items[0].id, res.data.listUsers.items[0].first_name, res.data.listUsers.items[0].last_name, res.data.listUsers.items[0].email))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .catch(err => console.log('failed at getUser', err))
    )
  }

  return (
    <PermissionContainer>
      <PermissionHeaderBar >
        <PermissionHeader>Add Reader</PermissionHeader>
        <PermissionButton
          label="Add"
          onClick={addReader}
          icon={<AddCircle />}
        >
        </PermissionButton>
      </PermissionHeaderBar>

      <PermissionFormContainer>
        <PermissionForm onSubmit={handleSubmit}>
          <Permissions>
            {
              reader.map((val, idx) => {
                const readerID = `name-${idx}`;
                return (
                  <div key={`reader-${idx}`}>
                    <label style={{ fontSize: "1.3rem", fontWeight: "500", width: "5em" }}>{`Reader #${idx + 1}`}</label>
                    <input
                      style={{ border: "none", borderBottom: "2px solid #f4f6f9", fontSize: "large" }}
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
          </Permissions>
          <PermissionButton type="submit" primary label="Submit" disabled={disableButton} />
        </PermissionForm>
      </PermissionFormContainer>
    </PermissionContainer>
  )
}

export default ReadersPermission;
