import axios from "axios";

const myAxios = axios.create();

myAxios.interceptors.response.use(
    (res) => res.data,
    (error) => {
        console.log(error);
    }
);

export default myAxios;