import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-b4821/us-central1/api", // the API (Cloud function) URL
});

export default instance;
