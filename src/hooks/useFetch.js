
import { toast } from "react-toastify";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in',
});
export default (router = null) => {
  axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (!error.response) {
        toast.warn("Network Error", {
          toastId: "custom-id-network",
        });
      } else {
        if (error.response.status === 400) {
          toast.warn(error.response.data.error );
        }

        if (error.response.status === 401) {
          toast.warn(error.response.data.message );
          localStorage.clear();
          router.push("/");
        }

        if (error.response.status === 403) {
          toast.warn(error.response.data.message );
        }

        if (error.response.status === 404) {
          toast.warn(error.response.data.message );
        }

        if (error.response.status === 500) {
          toast.warn("500 Internal Server Error" );
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
