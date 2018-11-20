import axios from "axios";

const instance = axios.create({
  baseURL: "http://zjubca.org:3031",
  timeout: 30000
});

export default instance;
