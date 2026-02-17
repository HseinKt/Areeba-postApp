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

export interface AuthContextType {
    user: AuthUser | null,
    token: string,
    login: (user:AuthUser) => void,
    logout: () => void,
}

export interface Apiresponse<T> {
    // Generic API Response
    User: T,
    error?: string,
}

