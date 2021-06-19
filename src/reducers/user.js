import * as types from '../constants/ActionTypes';
import generateId from '../helpers/generateId';

const initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_USERS:
            state = action.users
            return state;

        case types.ADD_USER:
            if (!action.user.id) {
                const newUser = {
                    id: generateId(),
                    fullName: action.user.fullName,
                    email: action.user.email
                };
                state.push(newUser);
                localStorage.setItem('users', JSON.stringify(state));
                return [...state];
            } else {
                const userIndex = state.findIndex((user) => {
                    return user.id === action.user.id
                });
                if (userIndex !== -1) {
                    state[userIndex] = action.user
                }
                localStorage.setItem('users', JSON.stringify(state));
                return [...state];
            }

        case types.DELETE_USER:
            const userIndex = state.findIndex((user) => {
                return user.id === action.id
            });
            if (userIndex !== -1) {
                state.splice(userIndex, 1)
            }
            localStorage.setItem('users', JSON.stringify(state));
            return [...state];

        default: return state;
    }
}
export default myReducer;

