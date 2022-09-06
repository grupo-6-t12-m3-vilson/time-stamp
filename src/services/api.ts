import axios from "axios";

const api = axios.create({
  baseURL: "https://api-time-stamp.herokuapp.com",
  timeout: 5000,
});

export { api };
