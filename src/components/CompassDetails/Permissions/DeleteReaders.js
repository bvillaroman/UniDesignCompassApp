import React, { useContext, useState, useEffect } from 'react';
import { FormClose } from 'grommet-icons'
import { CompassContext } from "../../../context/CompassPage/context";
import { GlobalContext } from "../../../context/context";
import {
  PermissionButton,
  DeleteContainer
} from './style'

const DeleteReaders = ({ email, id, removeReader }) => {
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
    <DeleteContainer>
      {email}
      <PermissionButton icon={<FormClose />} disabled={disableButton} label="Del" onClick={() => removeReader(id)} />
    </DeleteContainer>
  )
}

export default DeleteReaders