export const SERVER =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER
    : "http://localhost:4001";

export const MAIL_WEBHOOK =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_MAIL_WEBHOOK
    : "http://localhost:3001";

export const ANALYTICS_SERVER = process.env.REACT_APP_ANALYTICS_SERVER;
