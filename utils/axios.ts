import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const API_URLS = {
  GET_MOVIES: "/movies",
  CREATE_MOVIES: "/movies",
  GET_REVIEWS: "/reviews",
  CREATE_REVIEW: "/reviews",
  SEARCH_MOVIES: "/movies/search",
};
