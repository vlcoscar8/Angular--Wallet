export interface User {
  username?: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  message: string;
  data: object;
}

export interface LoginResponse {
  userId: string;
  token: string;
}

export interface LogoutResponse {
  status: number;
  message: string;
  token: string;
}
