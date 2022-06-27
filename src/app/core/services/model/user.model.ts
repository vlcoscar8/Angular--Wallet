export interface User {
  username?: string;
  email?: string;
  password?: string;
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

export interface UserDetailResponse {
  username: string;
  email: string;
  cash: number;
  friends: any[];
  movements: any[];
  __v: number;
}

export interface Movement {
  from: User[];
  to: User[];
  type: string;
  amount: number;
  currentCash: number;
  __v: number;
}
