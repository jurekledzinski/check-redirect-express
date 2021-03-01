import axios from "axios";

const request = axios.create({
  validateStatus: false,
  baseURL: "https://young-sea-72823.herokuapp.com",
});

export default request;
