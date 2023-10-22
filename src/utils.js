import axios from "axios";

export const API_URL = "https://fair-cyan-gazelle-tie.cyclic.app/api/";
const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
// console.log(accessToken);

// export const API_URL = "http://localhost:5000/api/";

export const adminRequest = axios.create({
  baseURL: API_URL,
  headers: { token: "Bearer " + accessToken },
});

export const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/di5i4j5uv/image/upload/c_fill,h_40,f_auto,q_auto/";
