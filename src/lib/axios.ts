import axios from "axios";

import { env } from "@/env";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

api.interceptors.request.use(async (config) => {
  if (env.VITE_ENABLE_API_DELAY) {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000))
    );
  }
  return config;
});
