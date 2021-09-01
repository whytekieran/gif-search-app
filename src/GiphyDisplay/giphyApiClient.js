import axios from "axios";

const giphyApiBaseUrl = () => {
  return "https://api.giphy.com/v1/gifs";
};

let axiosInstance;

export class GiphyApiClient {
  static getConfig() {
    return {
      baseURL: giphyApiBaseUrl(),
      timeout: 20000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }

  static getInstance() {
    if (axiosInstance) {
      return axiosInstance;
    } else {
      const config = GiphyApiClient.getConfig();
      axiosInstance = axios.create(config);
      return axiosInstance;
    }
  }
}

const giphyApiClient = GiphyApiClient.getInstance;
export default giphyApiClient;
