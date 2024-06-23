export interface AuthState {
  isLogin: boolean;
  user: { nickname: string; email: string } | null;
  login: (nickname: string, email: string) => void;
  logout: () => void;
}
