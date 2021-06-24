import React, { useEffect } from "react"
import Users from "./components/Users"
import AddForm from "./components/AddForm"
import { isToggleForm, getUsersRequest } from "./redux-toolkit"
import { useSelector, useDispatch } from "react-redux"

const User = () => {
  const dispatch = useDispatch()
  const isDisplayForm = useSelector(state => state.user.isDisplayForm)

  const onToggleForm = () => {
    dispatch(isToggleForm())
  }

  useEffect(() => {
    dispatch(getUsersRequest())
  }, [dispatch])

  const elementForm = isDisplayForm && <AddForm />

  return (
    <div className="container">
      <div className="text-center">
        <h1>List</h1>
        <hr />
      </div>
      <div className="row">
        <div
          className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
        >
          {elementForm}
        </div>
        <div
          className={
            isDisplayForm === true
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary mb-15"
            onClick={onToggleForm}
          >
            {isDisplayForm ? "Close Form" : "Add Form"}
          </button>
          <Users />
        </div>
      </div>
    </div>
  )
}

export default User
