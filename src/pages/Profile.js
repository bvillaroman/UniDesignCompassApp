import React, { useState, useEffect } from "react";
//import { GlobalContext } from "../context/context";
import { Auth } from 'aws-amplify';
//import { Edit } from 'grommet-icons'
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
    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true })
            .then(res => { return setName(res.attributes.name) })
            .catch(err => console.log(err))
    }, [name])

    // const changeName = (event) => {
    //     event.preventDefault();

    // }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let user = await Auth.currentAuthenticatedUser();
        console.log(user.attributes.name)
        let result = await Auth.updateUserAttributes(user, {

            'name': newName
        });

        console.log(result)
        console.log(user.attributes.name)


        await Auth.currentAuthenticatedUser({ bypassCache: true })
            .then(res => { console.log(res.attributes.name) })
            .catch(err => console.log(err))
    }

    const changePassword = () => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                return Auth.changePassword(user, 'Password1', 'Password');
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    const submitPassword = (e) => {
        e.preventDefault()
        console.log('changing password from form')
        console.log(oldPassword)
        console.log(newPassword)
        console.log(confirmPassword)

        if (newPassword === confirmPassword) {
            Auth.currentAuthenticatedUser()
                .then(user => {
                    return Auth.changePassword(user, oldPassword, newPassword);
                })
                .then(data => console.log(data))
                .catch(err => console.log(err, 'old password does not match'));
        } else {
            console.log('Password does not match')
        }
    }



    return (
        <ProfileContainer>
            <ProfileTitle>Profile Page</ProfileTitle>
            <FormContainter>
                <FormName onSubmit={handleSubmit}>
                    <FormNameLabel>
                        Name: <FormNameInput type="text" name="name" placeholder={name} value={newName} onChange={e => { setNewName(e.target.value) }} />
                    </FormNameLabel>
                    <NameButton type="submit">Change Name</NameButton>
                </FormName>
                <br />

                <FormPassword onSubmit={submitPassword}>
                    <FormPasswordLabel>
                        Old Password: <FormPasswordInput type="password" password="password" onChange={e => setOldPassword(e.target.value)} />
                    </FormPasswordLabel>
                    <FormPasswordLabel>
                        New Password: <FormPasswordInput type="password" password="password" onChange={e => setNewPassword(e.target.value)} />
                    </FormPasswordLabel>
                    <FormPasswordLabel>
                        Confirm New Password: <FormPasswordInput type="password" password="password" onChange={e => setConfirmPassword(e.target.value)} />
                    </FormPasswordLabel>
                    <PasswordButton type="submit">Change Password</PasswordButton>
                </FormPassword>

                <br />
                {/* <button onClick={changePassword}>Click me to change password to Password</button> */}
            </FormContainter>
        </ProfileContainer>
    )
};
export default ProfilePage;
