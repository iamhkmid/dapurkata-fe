import Axios, { AxiosResponse as AxRes } from "axios";

const api = Axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      location.reload();
    }
    return Promise.reject(error);
  }
);
export default api;
