import React from "react"
import { useDispatch } from "react-redux"
import { deleteRequestProduct, openForm, editStatus } from "../slice"

const Product = props => {
  const { product, index } = props
  const dispatch = useDispatch()

  const handleOpenForm = e => {
    e.preventDefault()
    dispatch(openForm(product))
  }

  const handleDelete = e => {
    e.preventDefault()
    dispatch(deleteRequestProduct(product.id))
  }

  const handleEditStatus = () => {
    dispatch(editStatus(product))
  }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{product.productName}</td>
      <td className="text-center">
        <span
          className={
            product.status === true
              ? "label label-success"
              : "label label-danger"
          }
          onClick={handleEditStatus}
        >
          {product.status === true ? "Enable" : "Disable"}
        </span>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleOpenForm}
        >
          Edit
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Product
