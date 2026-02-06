import type { AuthUser, LoginPayload, RegisterPayload, RegisterResponse } from "../types/auth.types"
import api from "./axios"

export const login = (payload: LoginPayload) => api.post<AuthUser>("/auth/login", payload);

export const register = (payload: RegisterPayload) => api.post<RegisterResponse>("/users/add", payload)