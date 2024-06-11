import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestError = {
  error: string;
};

const createAxiosInstance = () => {
  const token = sessionStorage.getItem("mdlToken");
  const perfil = sessionStorage.getItem("mdlUser");
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Perfil: perfil !== null ? JSON.parse(perfil).role : "default",
    },
  });

  // Add interceptor for handling HTTP errors
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any) => {
      // Handle error here
      console.error("HTTP error:", error);
      return Promise.reject(error);
    }
  );

  return instance;
};

const apiService = createAxiosInstance();

export class ApiService {
  public static async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiService.get(url, config);
    return response.data;
  }

  public static async post<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiService.post(url, data, config);
    return response.data;
  }

  public static async put<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiService.put(url, data, config);
    return response.data;
  }

  public static async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiService.delete(url, config);
    return response.data;
  }

  public static async uploadFile<T>(
    url: string,
    formData: FormData
  ): Promise<T> {
    apiService.defaults.headers.common["Content-Type"] = "multipart/form-data";
    const response: AxiosResponse<T> = await apiService.post(url, formData);
    return response.data;
  }

  public static async deleteFile<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiService.delete(url, config);
    return response.data;
  }

  public static async getFile(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Blob> {
    const response: AxiosResponse<Blob> = await apiService.get(url, {
      ...config,
      responseType: "blob",
    });
    return response.data;
  }
}
