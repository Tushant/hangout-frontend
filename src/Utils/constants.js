export const API_BASE = process.env.REACT_APP_API_URL;
export const APP_BASE = process.env.REACT_APP_APP_URL;
export const hostName = window.location.host;
const AUTH_URL = '/auth';
export const RESET_PASSWORD_LINK = `${AUTH_URL}/reset-password`;
export const FORGOT_PASSWORD_LINK = `${AUTH_URL}/forgot-password`;
export const SIGNUP_LINK = `${AUTH_URL}/signup`;
export const LOGIN_LINK = `${AUTH_URL}/login`;
