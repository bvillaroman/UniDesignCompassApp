import React, {useContext, useState} from 'react'

import { DashboardContext } from "../../context/DashboardPage/context"
import { GlobalContext } from "../../context/context"

import { 
  PermissionsCard, 
  PermissionsTitle,
  GoToReviewButton, 
  PermissionsInputs,
  PermissionInput,
  PermissionsDetails,
  PermissionItem,
  PermissionError
} from "../../styles/Dashboard"


export const InputField = ({placeholder, value, items, setValue, setItems}) => {
  const [ error, setError ] = useState(null); 

  const handleKeyDown = evt => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      let trimmedValue = value.trim();

      if (trimmedValue && isValid(trimmedValue)) {
        setItems( [...items, value]);
        setValue("");
      }
    }
  };

  const handleChange = evt => {
    setValue(evt.target.value)
    setError(null)
  };

  const handleDelete = item => setItems(items.filter(i => i !== item));

  const handlePaste = evt => {
    evt.preventDefault();

    const paste = evt.clipboardData.getData("text");
    const emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      const toBeAdded = emails.filter(email => !isInList(email));
      setItems([...this.state.items, ...toBeAdded])
    }
  };

  const isValid = (email) => {
    let errrorMessage = null;

    if (isInList(email)) {
      errrorMessage = `${email} has already been added.`;
    } else if (!isEmail(email)) {
      errrorMessage = `${email} is not a valid email address.`;
    }

    if (errrorMessage) {
      setError(errrorMessage);

      return false;
    }

    return true;
  };

  const isInList = (email) => items.includes(email)

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  return (
    <PermissionsInputs>
      {error && <PermissionError className="error">{error}</PermissionError>}
      <PermissionInput
        className={"input " + (error && " has-error")}
        value={value}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onPaste={handlePaste}
      />
      {items && items.map(item => (
        <PermissionItem className="tag-item" key={item}>
          {item}
          <button
            type="button"
            className="button"
            onClick={() => handleDelete(item)}
          >
            &times;
          </button>
        </PermissionItem>
      ))}
    </PermissionsInputs>
  );
}

export default (props) => {
  const { user } = useContext(GlobalContext);
  const { switchTab, updateForm } = useContext(DashboardContext);
  const [ admins, setAdmins ] = useState([user.email])
  const [ teachers, setTeachers ] = useState([])
  const [ readers, setReaders ] = useState([])
  const [ admin, setAdmin ] = useState([])
  const [ teacher, setTeacher ] = useState([])
  const [ reader, setReader ] = useState([])

  const goToReview = event => {
    updateForm({admins,readers})
    switchTab(4);
  };

  return (
    <PermissionsCard >
      <PermissionsDetails>
        <PermissionsTitle gridArea="header">
          Permissions
        </PermissionsTitle>

        <GoToReviewButton 
          label="Go To Review" 
          onClick={goToReview}
        />
      </PermissionsDetails>
      <PermissionsDetails>

          <InputField 
            placeholder= "Add Administrators" 
            value={admin}
            items={admins}
            setValue={setAdmin}
            setItems={setAdmins}
          />
          <InputField 
            placeholder= "Add Teachers" 
            value={teacher}
            items={teachers}
            setValue={setTeacher}
            setItems={setTeachers}
          />
          <InputField 
            placeholder= "Add Readers" 
            value={reader}
            items={readers}
            setValue={setReader}
            setItems={setReaders}
          />
          
          
      </PermissionsDetails>
    </PermissionsCard>
  )
}