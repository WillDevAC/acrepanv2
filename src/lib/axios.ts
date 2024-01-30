import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie library

import { env } from "@/env";

const authToken = Cookies.get("auth::token");

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

api.interceptors.request.use(async (config) => {
  if (env.VITE_ENABLE_API_DELAY) {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000))
    );
  }

  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }

  return config;
});
