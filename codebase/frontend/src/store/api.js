import axiosInstance from "./config";

const axiosBaseQuery = () => async ({ url, method, data, params, headers }) => {
  try {
    const isFormData = data instanceof FormData;
    const result = await axiosInstance({
      url,
      method,
      data,
      params,
      headers: {
        ...headers,
        ...(isFormData
          ? {
              "Content-Type": "multipart/form-data",
            }
          : { "Content-Type": "application/json" }),
      },
    });
    return { data: result.data };
  } catch (error) {
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message,
      },
    };
  }
};

export default axiosBaseQuery;