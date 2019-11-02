import axios from "axios";

export function getToken () {
   return localStorage.getItem("user-token");
};

export default function authApi () {
   return axios.create({
      baseURL: "http://localhost:5000",
      headers: {
         Authorization: getToken()
      }
   });
}