import React from "react"
import Product from "./Product"
import { useSelector } from "react-redux"

const Products = () => {
  let products = useSelector(state => state.product.products)
  const dataSearch = useSelector(state => state.product.dataSearch)

  if (dataSearch !== "") {
    products = products.filter(product => {
      if (
        product.productName.toLowerCase().indexOf(dataSearch.toLowerCase()) !==
        -1
      ) {
        return true
      }
      return false
    })
  }

  const elememtProduct = products.map((product, index) => {
    return <Product product={product} index={index} key={product.id} />
  })

  return (
    <div className="row mt-15">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>{elememtProduct}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
