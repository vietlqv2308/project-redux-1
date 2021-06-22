import * as types from './actions';
import generateId from '../../common/generateId';
//reducer
const initialState = {
    isDisplayForm: false,
    users: [],
    isEditing: {
        fullName: '',
        email: ''
    },
};


const myReducer = (state = initialState, action) => {

    switch (action.type) {
        //handle DisplayForm
        case types.IS_TOGGLE_FORM:
            state.isDisplayForm = !state.isDisplayForm;
            return { ...state };

        case types.IS_OPEN_FORM:
            state.isDisplayForm = true
            return { ...state };

        case types.IS_CLOSE_FORM:
            state.isDisplayForm = false
            return { ...state };

        //handleUsers
        case types.GET_USERS:
            state.users = action.users
            return { ...state };

        case types.ADD_USER:
            const newUsers = [...state.users];
            if (!action.user.id) {
                const newUser = {
                    id:generateId(),
                    fullName: action.user.fullName,
                    email: action.user.email
                };
                newUsers.push(newUser);
                return {
                    ...state,
                    users: newUsers
                };
            } else {
                const userIndex = newUsers.findIndex((user) => {
                    return user.id === action.user.id
                });
                if (userIndex !== -1) {
                    newUsers[userIndex] = action.user
                }
                return {
                    ...state,
                    users : newUsers
                };
            }

        case types.DELETE_USER:
            const newUsersEdit = [...state.users];
            const userIndex = newUsersEdit.findIndex((user) => {
                return user.id === action.id
            });
            if (userIndex !== -1) {
                newUsersEdit.splice(userIndex, 1)
            }
            return { ...state, users: newUsersEdit };

        case types.EDIT_USER:
            return {
                ...state,
                isEditing: {
                    ...action.user
                }
            }

        case types.ON_CHANGE:
            return {
                ...state,
                isEditing: {
                    ...state.isEditing,
                    ...action.payload
                }
            }

        default:
            return state;
    }
}

export default myReducer;

