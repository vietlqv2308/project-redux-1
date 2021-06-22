import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const FormSearchProduct = () => {
    const dispatch = useDispatch();
    const handleSearchProduct = (e) => {
        const value = e.target.value;
        dispatch(actions.searchProduct(value));
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name..."
                    onChange={handleSearchProduct}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        Search
                    </button>
                </span>
            </div>
        </div>
    );
}

export default FormSearchProduct;