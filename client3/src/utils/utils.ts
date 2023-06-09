import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInst: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
});

// export const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());
export const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

export const axFetcher = (url: string) =>
  axiosInst.get(url).then((res) => res.data);

export const axFetcherPost = (url: string, data?: any): Promise<Response> =>
  axiosInst.post(url, data).then((res) => res.data);

// export const fetcher = (args: AxiosRequestConfig) => axiosInst.request(args).then((res: { data: any; }) => res.data)
// export const fetcher = (url: string, data?: any) => axiosInst.request({url, data}).then((res: { data: any; }) => res.data)
