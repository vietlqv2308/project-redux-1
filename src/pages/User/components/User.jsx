import React from "react"
import { isOpenForm, deleteUserRequest } from "../redux-toolkit"
import { useDispatch } from "react-redux"

const User = props => {
  const dispatch = useDispatch()
  const { user, index } = props

  const onDeleteUser = () => {
    const result = window.confirm("Want to delete")
    if (result) {
      dispatch(deleteUserRequest(user.id))
    }
  }

  const onEditUser = () => {
    dispatch(isOpenForm(user))
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
      <td className="text-center">
        <button type="button" className="btn btn-warning" onClick={onEditUser}>
          Edit
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDeleteUser}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default User
