import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

const FormAddProduct = (props) => {
    const dispatch = useDispatch();
    const dataEdit = useSelector(state => state.product.dataEdit);

    const closeForm = (e) => {
        dispatch(actions.closeForm());
        e.preventDefault();
    }

    const handleChange = (e) => {
        dispatch(actions.onChange({
            [e.target.name]: e.target.value
        }))
    }

    const handleAddProduct = (e) => {
        actions.postRequestProduct(dispatch, dataEdit);
        e.preventDefault();
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
                        <option
                            value={true}
                        >
                            Enable
                        </option>
                        <option
                            value={false}
                        >
                            Disable
                        </option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-warning"
                            onClick={handleAddProduct}
                        >
                            Add
                        </button>&nbsp;
                        <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={closeForm}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormAddProduct;