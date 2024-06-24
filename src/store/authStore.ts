import { create } from "zustand";

interface AuthState {
  isLogin: boolean;
  user: { nickname: string; email: string } | null;
}

export const useAuthStore = create<AuthState>(() => ({
  isLogin: false,
  user: null,
}));

export const login = (nickname: string, email: string) =>
  useAuthStore.setState({ isLogin: true, user: { nickname, email } });

export const logout = () => useAuthStore.setState({ isLogin: false, user: null });
