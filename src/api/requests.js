import axios from "axios";

export async function getUsersRequest() {
    let users;
    await axios
        .get('https://60c9f839772a760017204e50.mockapi.io/users')
        .then((res) => {
            return users = res.data
        })
        .catch((error) => console.log(error));
    return users;
}

export async function deleteUserRequest(id) {
    await axios
        .delete('https://60c9f839772a760017204e50.mockapi.io/users/' + id)
        .then((res) => {
            return res.data;
        })
        .catch((error) => console.log(error));
    return id;
}

export async function updateUserRequest(user) {
    await axios
        .put('https://60c9f839772a760017204e50.mockapi.io/users/' + user.id, {
            fullName: user.fullName,
            email: user.email
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => console.log(error));
    return user;
}

export async function createUserRequest(user) {
    await axios
        .post('https://60c9f839772a760017204e50.mockapi.io/users',{
            fullName: user.fullName,
            email: user.email
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => console.log(error));
    return user;
}