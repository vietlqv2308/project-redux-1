import * as myAxios from './request';

//actionTypes
const USER = '_USER';

export const IS_TOGGLE_FORM = 'IS_TOGGLE_FORM' + USER;
export const IS_CLOSE_FORM = 'IS_CLOSE_FORM' + USER;
export const IS_OPEN_FORM = 'IS_OPEN_FORM' + USER;

export const ADD_USER = 'ADD_USER' + USER;
export const GET_USERS = + 'GET_USERS' + USER;
export const DELETE_USER = 'DELETE_USER' + USER;
export const EDIT_USER = 'EDIT_USER' + USER;

export const ON_CHANGE = 'ONCHANGE' + USER;

//actions
export const isToggleForm = () => {
    return ({
        type: IS_TOGGLE_FORM,
    });
};

export const isOpenForm = () => {
    return ({
        type: IS_OPEN_FORM
    });
};

export const isCloseForm = () => {
    return ({
        type: IS_CLOSE_FORM
    });
};

export const getUsers = (users) => {
    return ({
        type: GET_USERS,
        users: users
    });
};

export const addUser = (user,status) => {
    if(status === 'ADD'){
        return ({
            type: ADD_USER,
            user: {
                id: user.id,
                fullName:user.fullName,
                email:user.email
            }
        });
    }
    if(status === 'EDIT'){
        return ({
            type: ADD_USER,
            user: {
                id : user.id,
                fullName:user.fullName,
                email:user.email
            }
        });
    }
};

export const editUser = (user) => {
    return ({
        type: EDIT_USER,
        user: user
    });
};

export const deleteUser = (user) => {
    return ({
        type: DELETE_USER,
        id: user.id
    });
};

export const onChange = (payload) => {
    return {
        type: ON_CHANGE,
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
        dispatch(addUser(response,'EDIT'));
    });
}

export const createUserRequest = (user, dispatch) => {
    myAxios.createUserRequest(user).then((response) => {
        dispatch(addUser(response,'ADD'));
    });
}