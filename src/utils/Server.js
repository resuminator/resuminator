export const SERVER =
  process.env.NODE_ENV === "production"
    ? process.env.SERVER
    : "http://localhost:4001";
