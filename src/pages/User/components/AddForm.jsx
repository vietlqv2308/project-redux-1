import React from "react"
import {
  handleChangeForm,
  createUserRequest,
  updateUserRequest,
  isCloseForm
} from "../redux-toolkit"
import { useSelector, useDispatch } from "react-redux"

const AddForm = () => {
  const isEditing = useSelector(state => state.user.isEditing)
  const dispatch = useDispatch()

  const onAddUser = event => {
    event.preventDefault()

    if (isEditing.id === "") {
      dispatch(updateUserRequest(isEditing))
    } else {
      dispatch(createUserRequest(isEditing))
    }

    dispatch(isCloseForm())
  }

  const onCloseForm = () => {
    dispatch(isCloseForm())
  }

  const onChange = event => {
    const data = {
      [event.target.name]: event.target.value
    }

    dispatch(handleChangeForm(data))
  }

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Add User</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Full Name :</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={isEditing.fullName || ""}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={isEditing.email || ""}
              onChange={onChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={onAddUser}
            >
              Add
            </button>
            &nbsp;
            <button
              type="submit"
              className="btn btn-danger"
              onClick={onCloseForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddForm
