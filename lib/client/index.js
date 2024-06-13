import axios from "axios";

// json instance
export const jsoninstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIBASEURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// html form data instance
export const formurlinstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIBASEURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});

// upload files instance
export const forminstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIBASEURL,
  timeout: 15000,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});
