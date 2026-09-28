import { io } from "socket.io-client";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:9000";
const ENDPOINT = String(backendUrl).replace(/\/$/, "");

const socket = io(ENDPOINT, {
	reconnectionDelay: 1000,
	reconnection: true,
	reconnectionAttempts: 10,
	transports: ["websocket"],
	agent: false,
	upgrade: false,
	rejectUnauthorized: false,
	withCredentials: true,
});

export default socket;
