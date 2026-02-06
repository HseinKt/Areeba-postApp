import type { AuthUser, LoginPayload } from "../types/auth.types"
import api from "./axios"

export const login = (payload: LoginPayload) => api.post<AuthUser>("/auth/login", payload);

