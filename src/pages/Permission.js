import React, { useState, useContext, useEffect } from 'react';
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
  PermissionSubmit,
  PermissionButton,
  PermissionLabel,
  PermissionInput
} from "../styles/Permissions"
import { AddCircle, FormClose } from 'grommet-icons';
import { CompassContext } from "../context/CompassPage/context"

// const Permission = () => {

//   const blankAdmin = { admin: '' };
//   const [administrator, setAdministrator] = useState([{ ...blankAdmin }]);

//   const blankReader = { reader: '' };
//   const [reader, setReader] = useState([{ ...blankReader }]);

//   const addAdmins = () => {
//     setAdministrator([...administrator, { ...blankAdmin }]);
//   };

//   const addReaders = () => {
//     setReader([...reader, { ...blankReader }]);
//   };

//   const handleAdmins = (e) => {
//     const updatedAdmins = [...administrator];
//     updatedAdmins[e.target.name] = e.target.value;
//     setAdministrator(updatedAdmins);
//   };

//   const handleReaders = (e) => {
//     const updatedReader = [...reader];
//     updatedReader[e.target.name] = e.target.value;
//     setReader(updatedReader);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(administrator, reader)
//     // administrator.map(item => item.admin === "" ? alert("Please enter your admins") : console.log(administrator))
//     // reader.map(item => item.reader === "" ? alert("Please enter your readers") : console.log(reader))

//   }

//   const handleRemoveAdmin = (e, idx) => {
//     const updatedAdmins = [...administrator];
//     updatedAdmins.splice(idx, 1);
//     setAdministrator(updatedAdmins)
//   }

//   const handleRemoveReader = (e, idx) => {
//     const updatedReaders = [...reader];
//     updatedReaders.splice(idx, 1);
//     setReader(updatedReaders)
//   }

//   return (
//     <PermissionContainer>
//       <PermissionHeader>Permission</PermissionHeader>
//       <PermissionForm onSubmit={handleSubmit}>

//         <PermissionAdmin style={{ display: "flex" }}>
//           {/* <PermissionAdminInput type="button" value="Add New Access" onClick={addAdmins} /> */}
//           {/* <button onClick={addAdmins}>Add New Admin</button> */}
//           <div style={{ margin: "0" }} > <PermissionAdminButton onClick={addAdmins} icon={<AddCircle />} /></div>
//           <div >
//             {
//               administrator.map((val, idx) => {
//                 const adminId = `Admin-${idx}`;
//                 return (
//                   <PermissionKey key={`Admin-${idx}`}>
//                     <PermissionAdminLabel>{`Admin #${idx + 1}: `}</PermissionAdminLabel>
//                     <PermissionAdminInput
//                       type="email"
//                       name={adminId}
//                       placeholder="Please Enter an email..."
//                       onChange={handleAdmins}
//                     />

//                     <PermissionAdminButton onClick={() => handleRemoveAdmin(idx)} icon={<FormClose />} />
//                   </PermissionKey>
//                 );
//               })
//             }
//           </div>
//           {/* <div>
//             <PermissionAdminButton onClick={addAdmins} icon={<AddCircle />} />
//           </div> */}

//         </PermissionAdmin>

//         <PermissionReader style={{ display: "flex" }}>
//           {/* <PermissionReaderInput type="button" value="Add New Access" onClick={addReaders} /> */}
//           {/* <button onClick={addReaders}>Add New Reader</button> */}
//           <div style={{ marginTop: "0.6em" }}>
//             {
//               reader.map((val, idx) => {
//                 const readerId = `Reader-${idx}`;
//                 return (
//                   <PermissionKey key={`Reader-${idx}`}>
//                     <PermissionReaderLabel>{`Member #${idx + 1}: `}</PermissionReaderLabel>
//                     <PermissionReaderInput
//                       type="email"
//                       name={readerId}
//                       placeholder="Please Enter an email..."
//                       onChange={handleReaders}
//                     />
//                     <PermissionAdminButton onClick={() => handleRemoveReader(idx)} icon={<FormClose />} />
//                   </PermissionKey>
//                 );
//               })
//             }
//           </div>
//           <div style={{ margin: "0" }}><PermissionAdminButton onClick={addReaders} icon={<AddCircle />} /></div>
//         </PermissionReader>

//         {/* <input type="submit" value="Submit" /> */}
//         <PermissionSubmit type="submit" label="Submit" value="Submit" />
//       </PermissionForm>
//     </PermissionContainer >
//   );
// }

// export default Permission;

const Permission = () => {
  const { compass } = useContext(CompassContext);

  const [administrators, setadministrators] = useState([{ value: "" }]);
  const [members, setMembers] = useState([{ value: "" }]);
  const [vistors, setVistors] = useState([{ value: "" }]);

  const handleChangeAdmin = (i, event) => {
    const values = [...administrators];
    values[i].value = event.target.value;
    setadministrators(values);
  }

  const handleAddAdmin = () => {
    const values = [...administrators];
    values.push({ value: "" });
    setadministrators(values);
  }

  const handleRemoveAdmin = (i) => {
    const values = [...administrators];
    values.splice(i, 1);
    setadministrators(values);
  }

  const handleChangeMember = (i, event) => {
    const values = [...members];
    values[i].value = event.target.value;
    setMembers(values);
  }

  const handleAddMember = () => {
    const values = [...members];
    values.push({ value: "" });
    setMembers(values);
  }

  const handleRemoveMember = (i) => {
    const values = [...members];
    values.splice(i, 1);
    setMembers(values);
  }

  const handleChangeVistor = (i, event) => {
    const values = [...vistors];
    values[i].value = event.target.value;
    setVistors(values);
  }

  const handleAddVistor = () => {
    const values = [...vistors];
    values.push({ value: "" });
    setVistors(values);
  }

  const handleRemoveVistor = (i) => {
    const values = [...vistors];
    values.splice(i, 1);
    setVistors(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    const arrayAdmin = administrators.map(administrator => administrator.value)
    const allAdmins = arrayAdmin.filter(admin => (admin !== null && admin.trim() !== ""))

    const arrayMembers = members.map(member => member.value)
    const allMembers = arrayMembers.filter(member => (member !== null && member.trim() !== ""))

    const arrayVistors = vistors.map(vistor => vistor.value)
    const allVistors = arrayVistors.filter(vistor => (vistor !== null && vistor.trim() !== ""))
    console.log("New Array: ", allAdmins, allMembers, allVistors)
  }

  // const buttonDisabled = administrators.length <= 1

  return (
    <PermissionContainer>
      <PermissionHeader>Permission</PermissionHeader>
      <PermissionForm onSubmit={handleSubmit}>
        <PermissionButton onClick={() => handleAddAdmin()} icon={<AddCircle />} />
        {administrators.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <PermissionLabel>{`Admin #${idx + 1}: `}</PermissionLabel>
              <PermissionInput
                type="email"
                value={field.value}
                placeholder="Enter email"
                onChange={e => handleChangeAdmin(idx, e)}
              />
              <PermissionButton onClick={() => handleRemoveAdmin(idx)} icon={<FormClose />} />
            </div>
          );
        })}

        <PermissionButton onClick={() => handleAddMember()} icon={<AddCircle />} />
        {members.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <PermissionLabel>{`Member #${idx + 1}: `}</PermissionLabel>
              <PermissionInput
                type="email"
                value={field.value}
                placeholder="Enter email"
                onChange={e => handleChangeMember(idx, e)}
              />
              <PermissionButton onClick={() => handleRemoveMember(idx)} icon={<FormClose />} />
            </div>
          );
        })}

        <PermissionButton onClick={() => handleAddVistor()} icon={<AddCircle />} />
        {vistors.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <PermissionLabel>{`Vistor #${idx + 1}: `}</PermissionLabel>
              <PermissionInput
                type="email"
                value={field.value}
                placeholder="Enter email"
                onChange={e => handleChangeVistor(idx, e)}
              />
              <PermissionButton onClick={() => handleRemoveVistor(idx)} icon={<FormClose />} />
            </div>
          );
        })}

        <PermissionSubmit type="submit" label="Submit" value="Submit" />
      </PermissionForm>
    </PermissionContainer>
  )

}

export default Permission;