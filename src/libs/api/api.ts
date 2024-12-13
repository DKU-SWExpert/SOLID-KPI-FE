import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { BASE_URL } from "@constants/url";

export const createApi = (logoutFn: () => void) => {
  const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  let isRefreshing = false;
  let failedQueue: any[] = [];

  const processQueue = (
    error: AxiosError | null,
    token: string | null = null
  ) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    failedQueue = [];
  };

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError): Promise<AxiosError | AxiosResponse> => {
      const originalRequest = error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };
      const statusCode = error.response?.status;
      const errorMessage =
        (error.response?.data as { message?: string })?.message || "에러 발생";

      if (statusCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(() => {
              return instance(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }
        isRefreshing = true;

        try {
          // TODO: 엔드포인트 변경 시 수정 필요
          const response = await instance.post("/auth/rotate", {});
          if (response.status === 201) {
            isRefreshing = false;
            processQueue(null);
            return instance(originalRequest);
          }
        } catch (refreshError) {
          isRefreshing = false;
          processQueue(refreshError as AxiosError);
          // TODO: 엔드포인트 변경 시 수정 필요
          await instance.post("/auth/logout", {});
          logoutFn();
          return Promise.reject(refreshError);
        }
      } else if (statusCode === 500) {
        alert("서버 에러가 발생했습니다.");
      } else {
        alert(errorMessage || "에러가 발생했습니다.");
      }

      return Promise.reject(error);
    }
  );

  return {
    get: <T = any>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => instance.get<T>(url, config),
    post: <T = any>(
      url: string,
      data?: any,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => instance.post<T>(url, data, config),
    put: <T = any>(
      url: string,
      data?: any,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => instance.put<T>(url, data, config),
    delete: <T = any>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> => instance.delete<T>(url, config),
  };
};
