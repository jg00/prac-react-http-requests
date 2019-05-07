import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.Authorization =
  "AUTH TOKEN FROM CUSTOM AXIOS INSTANCE";

// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM CUSTOM AXIOS INSTANCE";   // Will not override the axios.defaults.  Use above.

instance.interceptors.request.use(
  request => {
    // Do something before request (ie the config) is sent
    console.log("[custom axios.js] - request", request);
    return request;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
