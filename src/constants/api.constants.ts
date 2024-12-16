export const HEADER_DEFAULT = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080"
export const TIMEOUT = 30000;

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

// API Auth
export const API_AUTH = "/api/auth";
export const API_ACCOUNT = "/api/account";