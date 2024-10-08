export interface User {
  id: number;
  name: string;
  email: string;
  about: string;
}

export interface LoginResponse {
  message: string;
  user?: User;
}
