import React, { useState } from 'react';
import {
  PermissionHeader,
  PermissionContainer,
  PermissionForm,
  PermissionAdmin,
  PermissionReader,
  PermissionAdminInput,
  PermissionReaderInput,
  PermissionAdminButton,
  PermissionReaderButton,
  PermissionAdminLabel,
  PermissionReaderLabel,
  PermissionKey,
  PermissionSubmit
} from "../styles/Permissions"
import { AddCircle, FormClose } from 'grommet-icons';

const Permission = () => {

  const blankAdmin = { admin: '' };
  const [administrator, setAdministrator] = useState([{ ...blankAdmin }]);

  const blankReader = { reader: '' };
  const [reader, setReader] = useState([{ ...blankReader }]);

  const addAdmins = () => {
    setAdministrator([...administrator, { ...blankAdmin }]);
  };

  const addReaders = () => {
    setReader([...reader, { ...blankReader }]);
  };

  const handleAdmins = (e) => {
    const updatedAdmins = [...administrator];
    updatedAdmins[e.target.name] = e.target.value;
    setAdministrator(updatedAdmins);
  };

  const handleReaders = (e) => {
    const updatedReader = [...reader];
    updatedReader[e.target.name] = e.target.value;
    setReader(updatedReader);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(administrator, reader)
    // administrator.map(item => item.admin === "" ? alert("Please enter your admins") : console.log(administrator))
    // reader.map(item => item.reader === "" ? alert("Please enter your readers") : console.log(reader))

  }

  const handleRemoveAdmin = (e, idx) => {
    const updatedAdmins = [...administrator];
    updatedAdmins.splice(idx, 1);
    setAdministrator(updatedAdmins)
  }

  const handleRemoveReader = (e, idx) => {
    const updatedReaders = [...reader];
    updatedReaders.splice(idx, 1);
    setReader(updatedReaders)
  }

  return (
    <PermissionContainer>
      <PermissionHeader>Permission</PermissionHeader>
      <PermissionForm onSubmit={handleSubmit}>

        <PermissionAdmin style={{ display: "flex" }}>
          {/* <PermissionAdminInput type="button" value="Add New Access" onClick={addAdmins} /> */}
          {/* <button onClick={addAdmins}>Add New Admin</button> */}
          <div style={{ margin: "0" }} > <PermissionAdminButton onClick={addAdmins} icon={<AddCircle />} /></div>
          <div >
            {
              administrator.map((val, idx) => {
                const adminId = `Admin-${idx}`;
                return (
                  <PermissionKey key={`Admin-${idx}`}>
                    <PermissionAdminLabel>{`Admin #${idx + 1}: `}</PermissionAdminLabel>
                    <PermissionAdminInput
                      type="email"
                      name={adminId}
                      placeholder="Please Enter an email..."
                      onChange={handleAdmins}
                    />

                    <PermissionAdminButton onClick={() => handleRemoveAdmin(idx)} icon={<FormClose />} />
                  </PermissionKey>
                );
              })
            }
          </div>
          {/* <div>
            <PermissionAdminButton onClick={addAdmins} icon={<AddCircle />} />
          </div> */}

        </PermissionAdmin>

        <PermissionReader style={{ display: "flex" }}>
          {/* <PermissionReaderInput type="button" value="Add New Access" onClick={addReaders} /> */}
          {/* <button onClick={addReaders}>Add New Reader</button> */}
          <div style={{ marginTop: "0.6em" }}>
            {
              reader.map((val, idx) => {
                const readerId = `Reader-${idx}`;
                return (
                  <PermissionKey key={`Reader-${idx}`}>
                    <PermissionReaderLabel>{`Member #${idx + 1}: `}</PermissionReaderLabel>
                    <PermissionReaderInput
                      type="email"
                      name={readerId}
                      placeholder="Please Enter an email..."
                      onChange={handleReaders}
                    />
                    <PermissionAdminButton onClick={() => handleRemoveReader(idx)} icon={<FormClose />} />
                  </PermissionKey>
                );
              })
            }
          </div>
          <div style={{ margin: "0" }}><PermissionAdminButton onClick={addReaders} icon={<AddCircle />} /></div>
        </PermissionReader>

        {/* <input type="submit" value="Submit" /> */}
        <PermissionSubmit type="submit" label="Submit" value="Submit" />
      </PermissionForm>
    </PermissionContainer >
  );
}

export default Permission;