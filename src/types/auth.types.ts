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
