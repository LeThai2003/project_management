import { io } from "socket.io-client";
import { BASE_URL } from "../apiPath";

export const socket = io(BASE_URL, {
  withCredentials: true
});