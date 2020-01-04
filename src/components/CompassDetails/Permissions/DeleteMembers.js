import React, { useContext, useState, useEffect } from 'react';
import { FormClose } from 'grommet-icons'
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import {
  PermissionButton
} from './style'

const DeleteMembers = ({ email, id, removeMember }) => {
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

  return (
    <div>
      {email}
      <PermissionButton icon={<FormClose />} disabled={disableButton} label="Del" onClick={() => removeMember(id)} />
    </div>
  )
}

export default DeleteMembers

