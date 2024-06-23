import { create } from "zustand";
import { AuthState } from "@/types/user";

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  user: null,
  login: (nickname, email) => set({ isLogin: true, user: { nickname, email } }),
  logout: () => set({ isLogin: false, user: null }),
}));
