export const BASE_URL = "http://localhost:3003";

const base_path = {
  auth: "auth",
}

export const API_PATHS = {
  AUTH: {
    LOGIN: `/${base_path.auth}/login`,
    SIGNUP: `/${base_path.auth}/sign-up`,
    PASSWORD_FORGOT: `/${base_path.auth}/password-forgot`,
    PASSWORD_OTP: `/${base_path.auth}/password-otp`,
    PASSWORD_RESET: `/${base_path.auth}/password-reset`,
  }
}