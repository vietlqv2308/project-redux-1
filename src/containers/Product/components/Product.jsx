import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Product = (props) => {
    const {product,index} = props;
    const dispatch = useDispatch();

    const openForm = () => {
        dispatch(actions.openForm());
    }

    return (
        <tr>
            <td className="text-center">
                {index + 1}
            </td>
            <td className="text-center">
                {product.productName}
            </td>
            <td className="text-center">
                <span className="label label-success">
                    {product.status === true ? 'Enable' : 'Disable'}
                </span>
            </td>
            <td className="text-center">
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={openForm}
                >
                    Edit
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Product