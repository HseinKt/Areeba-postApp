export interface LoginPayload {
    username: string,
    password: string,
}

export interface AuthUser {
    id: number,
    username: string,
    email: string,
    accessToken: string,
    refreshToken?: string,
}

export interface RegisterPayload {
    username: string,
    email: string,
    password: string,
}

export interface RegisterResponse {
    id: number,
    username: string,
    email: string,
}