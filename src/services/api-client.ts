import axios, { Axios, AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c646903d6a5341698744ceaf7ced9274',
  },
});

// const getData = <T>(url: string): Promise<FetchResponse<T>> => {
//   return API_URL.get<FetchResponse<T>>(url).then((res) => res.data);
// };

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
