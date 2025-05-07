export const BASE_URL = "http://localhost:3003";

const base_path = {
  auth: "auth",
  project: "project",
  task: "task"
}

export const API_PATHS = {
  AUTH: {
    LOGIN: `/${base_path.auth}/login`,
    SIGNUP: `/${base_path.auth}/sign-up`,
    PASSWORD_FORGOT: `/${base_path.auth}/password-forgot`,
    PASSWORD_OTP: `/${base_path.auth}/password-otp`,
    PASSWORD_RESET: `/${base_path.auth}/password-reset`,
  },
  PROJECT: {
    CREATE: `/${base_path.project}/create`,
    GET_ALL: `/${base_path.project}/get-all`,
    GET_DETAIL: (id) => `/${base_path.project}/${id}`,
  },
  TASK: {
    CREATE: `/${base_path.task}/create`,
    GET_ALL: `/${base_path.task}/get-all`,
    UPDATE_STATUS: `/${base_path.task}/update-status`,
    UPDATE_TASK: (id) => `/${base_path.task}/update/${id}`,
    DELETE_TASK: (id) => `/${base_path.task}/delete/${id}`,
    TASK_DETAIL: (id) => `/${base_path.task}/${id}`,
    LIST_SUB_TASKS: (id) => `/${base_path.task}/update-completed/${id}`,
  },
}