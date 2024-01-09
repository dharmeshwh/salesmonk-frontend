import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const API_URLS = {
  GET_MOVIES: "/movies",
};
