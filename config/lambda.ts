const LAMBDA_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_LAMBDA_BASE_URL
    : "http://localhost:3001";

export default LAMBDA_ENDPOINT;

export const SELF =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_APP_PROD
    : "http://localhost:3000";

