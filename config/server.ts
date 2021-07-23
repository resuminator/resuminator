const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : "http://localhost:8080";

export const API_VERSION = "v0.2.0"

export default API_URL;
