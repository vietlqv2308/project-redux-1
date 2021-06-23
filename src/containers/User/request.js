import myAxios from "../../common/configAPI";

export function getUsersRequest() {
    return myAxios.get('https://60c9f839772a760017204e50.mockapi.io/users');
}

export function deleteUserRequest(id) {
    return myAxios.delete('https://60c9f839772a760017204e50.mockapi.io/users/' + id)
}

export function updateUserRequest(user) {
    return myAxios.put('https://60c9f839772a760017204e50.mockapi.io/users/' + user.id, {
        fullName: user.fullName,
        email: user.email
    })
}

export function createUserRequest(user) {
    return myAxios
        .post('https://60c9f839772a760017204e50.mockapi.io/users', {
            fullName: user.fullName,
            email: user.email
        })
}