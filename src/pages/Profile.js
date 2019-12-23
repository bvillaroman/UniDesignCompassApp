import React, { useState, useEffect, useContext } from "react";
import { Auth } from 'aws-amplify';
import { updateUser } from '../utils/mutations'
import { getUser } from '../utils/queries'
import { GlobalContext } from "../context/context"
import {
  ProfileContainer,
  ProfileTitle,
  FormContainter,
  FormName,
  FormNameLabel,
  FormNameInput,
  NameButton,
  FormPassword,
  FormPasswordLabel,
  FormPasswordInput,
  PasswordButton

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
      .then(res => { return setFirstName(res.attributes['custom:firstName']), setLastName(res.attributes['custom:lastName']) })
      // .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [firstName, lastName])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ((!newFirstName) || (!newLastName)) return;

    console.log('change name')
    let currUser = await Auth.currentAuthenticatedUser();
    let result = await Auth.updateUserAttributes(currUser, {
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
        // .then(data => console.log(data))
        .catch(err => {
          return console.log(err, 'old password does not match'), setShowErrorOldPass(!showErrorNewPass)
        });
    } else {
      console.log('Password does not match')
      setShowErrorNewPass(!showErrorNewPass)
    }

    console.log('end of if')
    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <ProfileContainer>
      {console.log(user.id)}
      <ProfileTitle>Profile Page</ProfileTitle>
      <FormContainter>
        <FormName onSubmit={handleSubmit} >
          <FormNameLabel> First Name: </FormNameLabel>
          <FormNameInput type="text" name="firstName" placeholder={firstName} value={newFirstName} onChange={e => { setNewFirstName(e.target.value) }} />

          <FormNameLabel> Last Name: </FormNameLabel>
          <FormNameInput type="text" name="lastName" placeholder={lastName} value={newLastName} onChange={e => { setNewLastName(e.target.value) }} />

          <NameButton type="submit" >Change Name</NameButton>
        </FormName>
        <br />
        <FormPassword onSubmit={submitPassword}>
          <FormPasswordLabel> Old Password:  </FormPasswordLabel>
          <FormPasswordInput type="password" password="password" placeholder='Old Password' onChange={e => setOldPassword(e.target.value)} value={oldPassword} />

          <FormPasswordLabel> New Password:  </FormPasswordLabel>
          <FormPasswordInput type="password" password="password" placeholder='New Password' onChange={e => setNewPassword(e.target.value)} value={newPassword} />

          <FormPasswordLabel> Confirm New Password: </FormPasswordLabel>
          <FormPasswordInput type="password" password="password" placeholder='Confirm New Password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />

          <PasswordButton type="submit" disabled={newPassword != confirmPassword} >Change Password</PasswordButton>
        </FormPassword>
        {/* {newPassword !== confirmPassword ? <h4>{"Passwords does not match"}</h4> : <h4 hidden></h4>} */}
        {showErrorNewPass ? <h4>{"Passwords does not match"}</h4> : <h4 hidden></h4>}
        {showErrorOldPass ? <h4>{"Old password does not match"}</h4> : <h4 hidden></h4>}
        {showSuccess ? <h4>{"Password Changed!"}</h4> : <h4 hidden></h4>}
        <br />
      </FormContainter>
    </ProfileContainer>
  )
};
export default ProfilePage;

