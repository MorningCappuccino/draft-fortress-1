import axios from "axios";

const axiosInst = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
});

// export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const fetcher = (url: string) =>
  axiosInst.get(url).then((res) => res.data);
