import * as types from '../constants/ActionTypes';
import * as myAxios from '../api/requests';

export const isToogleForm = () => {
    return ({
        type: types.IS_TOGGLE_FORM,
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

export const getUsers = (users) => {
    return ({
        type: types.GET_USERS,
        users: users
    });
};

export const addUser = (user) => {
    return ({
        type: types.ADD_USER,
        user: user
    });
};

export const editUser = (user) => {
    return ({
        type: types.EDIT_USER,
        user: user
    });
};

export const deleteUser = (id) => {
    return ({
        type: types.DELETE_USER,
        id: id
    });
};

export const onChange = (payload) => {
    return {
        type: types.ON_CHANGE,
        payload
    };
}

export const getUsersRequest = (dispatch) => {
    myAxios.getUsersRequest().then((response) => {
        dispatch(getUsers(response));
    });
}

export const deleteUserRequest = (id, dispatch) => {
    myAxios.deleteUserRequest(id).then((response) => {
        dispatch(deleteUser(response));
    });
}

export const updateUserRequest = (user, dispatch) => {
    dispatch(editUser(user));
    myAxios.updateUserRequest(user).then((response) => {
        dispatch(addUser(response));
    });
}

export const createUserRequest = (user, dispatch) => {
    myAxios.createUserRequest(user).then((response) => {
        dispatch(addUser(response));
    });
}