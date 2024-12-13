import { isProd } from "@utils/common";

export const BASE_URL = isProd(import.meta.env.VITE_NODE_ENV)
  ? import.meta.env.VITE_PRODUCTION_API_URL
  : import.meta.env.VITE_DEVELOPMENT_API_URL;
