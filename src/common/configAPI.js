import axios from "axios"

const myAxios = axios.create()

myAxios.interceptors.response.use(
  res => res.data,
  error => {
    return error
  }
)

export default myAxios
