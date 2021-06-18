import * as types from '../constants/ActionTypes';

export const isToogleForm = () => {
    return ({
        type: types.IS_TOGGLE_FORM
    });
};

export const isOpenForm = () => {
    return ({
        type: types.IS_OPEN_FORM
    });
};

export const isCloseForm = () => {
    return ({
        type: types.IS_CLOSE_FORM
    });
};

export const users = () => {
    return ({
        type: types.USERS
    });
};

export const addUser = (user) => {
    return ({
        type: types.ADD_USER,
        user: user
    })
};

export const editUser = (user) => {
    return ({
        type: types.EDIT_USER,
        user: user
    })
};

export const deleteUser = (id) => {
    return ({
        type: types.DELETE_USER,
        id : id
    })
};