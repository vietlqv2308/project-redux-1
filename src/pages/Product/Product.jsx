import React, { useEffect } from "react"
import FormSearchProduct from "./components/FormSearchProduct"
import FormAddProduct from "./components/FormAddProduct"
import Products from "./components/Products"
import { getProductRequest, toggleForm } from "./slice"
import { useSelector, useDispatch } from "react-redux"

const Product = () => {
  const displayForm = useSelector(state => state.product.displayForm)
  const dispatch = useDispatch()

  const handleToggleForm = () => {
    dispatch(toggleForm())
  }

  useEffect(() => {
    dispatch(getProductRequest())
  }, [dispatch])

  const elementForm = displayForm && <FormAddProduct />

  return (
    <div className="container">
      <div className="text-center">
        <h1>List Product</h1>
        <hr />
      </div>
      <div className="row">
        <div
          className={
            displayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
          }
        >
          {elementForm}
        </div>
        <div
          className={
            displayForm === true
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleToggleForm}
          >
            Add Product
          </button>
          <div className="row mt-15">
            <FormSearchProduct />
          </div>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Product
