export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user_id: number;
  email: string;
  nickname: string;
  token: string;
}
