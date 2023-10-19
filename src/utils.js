import axios from "axios";

// export const API_URL = "https://fair-cyan-gazelle-tie.cyclic.app/api/";
const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
console.log(accessToken);

export const API_URL = "http://localhost:5000/api/";

export const adminRequest = axios.create({
  baseURL: API_URL,
  headers: { token: "Bearer " + accessToken },
});
