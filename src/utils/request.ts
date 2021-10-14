import axios from "axios";
import interceptors from '@/utils/axios-interceptors'


axios.defaults.timeout = 16000;

// http method
export const METHOD: { [key: string]: string } = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

axios.interceptors.response.use(
  response => interceptors(response),
  error => interceptors(error)
)

export async function request(url: string, method: string, params?: any, responseType?: any): Promise<any> {
  switch (method) {
    case METHOD.GET:
      return axios({ method: "get", url: url, params: params, responseType: responseType })
    case METHOD.PUT:
      return axios.put(url, params);
    case METHOD.POST:
      return axios.post(url, params);
    case METHOD.DELETE:
      return axios.delete(url, { params });
    default:
      return axios.get(url, { params });
  }
}
