import React, { useState, useEffect, useContext } from "react";
import { Auth } from 'aws-amplify';
import { updateUser } from '../utils/mutations'
import { GlobalContext } from "../context/context"
import {
  ProfileContainer,
  ProfileTitle,
  FormContainter,
  FormName,
  FormNameLabel,
  FormNameInput,
  ProfileButton,
  FormPassword,
  FormPasswordLabel,
  FormPasswordInput,

} from '../styles/ProfilePage'

const ProfilePage = (props) => {
  const { user } = useContext(GlobalContext);

  const [firstName, setFirstName] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newLastName, setNewLastName] = useState('');


  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrorOldPass, setShowErrorOldPass] = useState(false);
  const [showErrorNewPass, setShowErrorNewPass] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(res => {
        setFirstName(res.attributes['custom:firstName'])
        setLastName(res.attributes['custom:lastName'])
      })
      .catch(err => console.log(err))
  }, [firstName, lastName])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ((!newFirstName) || (!newLastName)) return;

    let currUser = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(currUser, {
      'custom:firstName': newFirstName,
      'custom:lastName': newLastName
    });

    const userID = user.id
    updateUser(userID, newFirstName, newLastName)
      .then(res => res)
      .catch(err => console.log(err))
  }

  const submitPassword = (e) => {
    e.preventDefault()
    if (!oldPassword || !newPassword || !confirmPassword) return

    setShowErrorOldPass(false)
    setShowErrorNewPass(false)
    setShowSuccess(false)

    if (newPassword === confirmPassword) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, oldPassword, newPassword)
        })
        .catch(err => {
          return setShowErrorOldPass(!showErrorNewPass)
        });
    } else {
      setShowErrorNewPass(!showErrorNewPass)
    }

    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <ProfileContainer>
      <ProfileTitle>Profile Page</ProfileTitle>
      <FormContainter>
        <FormName onSubmit={handleSubmit} >
          <FormNameLabel> First Name: </FormNameLabel>
          <FormNameInput type="text" name="firstName" placeholder={firstName} value={newFirstName} onChange={e => { setNewFirstName(e.target.value) }} required />

          <FormNameLabel> Last Name: </FormNameLabel>
          <FormNameInput type="text" name="lastName" placeholder={lastName} value={newLastName} onChange={e => { setNewLastName(e.target.value) }} required />

          {/* <NameButton type="submit" >Change Name</NameButton> */}
          <ProfileButton type="submit" primary label="Submit" />
        </FormName>
        <br />
        <FormPassword onSubmit={submitPassword}>
          <FormPasswordLabel> Old Password:  </FormPasswordLabel>
          <FormPasswordInput type="password" password="password" placeholder='Old Password' onChange={e => setOldPassword(e.target.value)} value={oldPassword} required />

          <FormPasswordLabel> New Password:  </FormPasswordLabel>
          <FormPasswordInput type="password" password="password" placeholder='New Password' onChange={e => setNewPassword(e.target.value)} value={newPassword} required />

          <FormPasswordLabel> Confirm New Password: </FormPasswordLabel>
          <FormPasswordInput type="password" password="password" placeholder='Confirm New Password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} required />

          {/* <PasswordButton type="submit" disabled={newPassword !== confirmPassword} >Change Password</PasswordButton> */}
          <ProfileButton type="submit" primary label="Submit" disabled={newPassword !== confirmPassword} />
        </FormPassword>
        {/* {newPassword !== confirmPassword ? <h4>{"Passwords does not match"}</h4> : <h4 hidden></h4>} */}
        {showErrorNewPass && <h4>{"Passwords does not match"}</h4>}
        {showErrorOldPass && <h4>{"Old password does not match"}</h4>}
        {showSuccess && <h4>{"Password Changed!"}</h4>}
        <br />
      </FormContainter>
    </ProfileContainer>
  )
};
export default ProfilePage;

