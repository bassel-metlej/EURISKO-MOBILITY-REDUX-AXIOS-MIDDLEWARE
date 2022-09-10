import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { BASE_URL, LOGIN } from "../url";

const server = axios.create({
  baseURL: BASE_URL,
});

const middlewareConfig = {
  interceptors: {
    request: [
      {
        success({ getState }, request) {
          const token = localStorage.getItem("token");

          if (request && request.url !== LOGIN && request.headers && token) {
            request.headers.Authorization = `Bearer ${token}`;
          }

          return request;
        },
      },
    ],
    response: [
      {
        success({ dispatch }, res) {
          return Promise.resolve(res);
        },
        error({ dispatch }, res) {
          return Promise.reject(res);
        },
      },
    ],
  },
};

export default axiosMiddleware(server, middlewareConfig);
