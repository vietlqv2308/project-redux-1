import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  closeForm,
  handleChangeForm,
  postRequestProduct,
  editRequestProduct
} from "../slice"

const FormAddProduct = props => {
  const dispatch = useDispatch()
  const dataEdit = useSelector(state => state.product.dataEdit)

  const handleCloseForm = e => {
    e.preventDefault()
    dispatch(closeForm())
  }

  const handleChange = e => {
    let value = e.target.value
    if (value === "true") {
      value = true
    }
    if (value === "false") {
      value = false
    }
    dispatch(
      handleChangeForm({
        [e.target.name]: value
      })
    )
  }

  const handleAddProduct = e => {
    if (dataEdit.id === "") {
      dispatch(postRequestProduct(dataEdit))
      dispatch(closeForm())
    } else {
      dispatch(editRequestProduct(dataEdit))
      dispatch(closeForm())
    }
    e.preventDefault()
  }

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Add Product</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Product Name :</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              onChange={handleChange}
              value={dataEdit.productName}
            />
          </div>
          <label>Status :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            onChange={handleChange}
            value={dataEdit.status}
          >
            <option value={true}>Enable</option>
            <option value={false}>Disable</option>
          </select>
          <br />
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={handleAddProduct}
            >
              Add
            </button>
            &nbsp;
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleCloseForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FormAddProduct
