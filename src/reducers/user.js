import * as types from '../constants/ActionTypes';

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var generateId = () => {
    return (s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4()
    );
}

const users = JSON.parse(localStorage.getItem('users'));
const initialState = users ? users : [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.USERS:
            return state;

        case types.ADD_USER:
            if(!action.user.id){
                const newUser = {
                    id: generateId(),
                    fullName: action.user.fullName,
                    email: action.user.email
                };
                state.push(newUser);
                localStorage.setItem('users',JSON.stringify(state));
                return [...state];
            }
            else{
                const userIndex = state.findIndex((user) => {
                    return user.id === action.user.id
                });
                if(userIndex !== -1){
                    state[userIndex] = action.user
                }
                localStorage.setItem('users',JSON.stringify(state));
                return [...state];
            }
            
        case types.DELETE_USER:
            const userIndex = state.findIndex((user) => {
                return user.id === action.id
            });
            if(userIndex !== -1){
                state.splice(userIndex,1)
            }
            localStorage.setItem('users',JSON.stringify(state));
            return [...state];

        default: return state
    }
}
export default myReducer;

