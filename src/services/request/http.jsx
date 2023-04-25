import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../utils/constant";

const http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("ACCESS_TOKEN")).accessToken
    }`,
  },
});

export default http;
