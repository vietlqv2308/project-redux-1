import React from 'react';

const FormSortProduct = () => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a href='/#' role="button">
                            Name A - Z
                        </a>
                    </li>
                    <li>
                        <a href='/#' role="button">
                            Name Z - A
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a href='/#' role="button">Status</a></li>
                </ul>
            </div>
        </div>
    );
};

export default FormSortProduct;