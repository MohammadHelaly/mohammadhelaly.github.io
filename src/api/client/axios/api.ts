import axios from "axios";

const api = axios.create({
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export default api;
