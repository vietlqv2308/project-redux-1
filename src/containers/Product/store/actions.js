import * as myAxios from "./requests";

const PRODUCT = '_PRODUCT';

export const TOGGLE_FORM = 'TOGGLE_FORM' + PRODUCT;
export const CLOSE_FORM = 'CLOSE_FORM' + PRODUCT;
export const OPEN_FORM = 'OPEN_FORM' + PRODUCT;

export const GET_PRODUCTS = 'GET_PRODUCTS' + PRODUCT;
export const ADD_PRODUCT = 'POST_PRODUCT' + PRODUCT;

export const SEARCH = 'SEARCH' + PRODUCT;
export const ON_CHANGE = 'ON_CHANGE' + PRODUCT;


export const toggleForm = () => {
    return {
        type: TOGGLE_FORM,
    };
};

export const closeForm = () => {
    return {
        type: CLOSE_FORM,
    };
};

export const openForm = () => {
    return {
        type: OPEN_FORM,
    };
};

export const searchProduct = (payload) => {
    return {
        type: SEARCH,
        payload,
    };
};

export const onChange = (payload) => {
    return {
        type:ON_CHANGE,
        payload,
    };
};

export const getProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload,
    };
};

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload,
    };
};

export const getRequestProduct = (dispatch) => {
    myAxios.getRequestProduct().then((response) => {
        dispatch(getProducts(response));
    });
};

export const postRequestProduct = (dispatch,product) => {
    myAxios.postRequestProduct(product).then((response) => {
        dispatch(addProduct(product));
    });
};

