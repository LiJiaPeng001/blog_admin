import createApi from "./createApi";

export default (options: any = {}, condition = {}) => {
  options.baseURL = options.baseURL || '';

  return createApi({
    async setHeaders() {
      const headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };
      return headers;
    },
  })(options, condition);
};
