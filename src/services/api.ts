import axios from "axios";

const host = "https://breakingbadapi.com/api";

export default axios.create({
  baseURL: host,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
