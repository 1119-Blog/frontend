import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isLogin: boolean;
}

interface AuthAction {
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      isLogin: false,
      login: () => set({ isLogin: true }),
      logout: () => set({ isLogin: false }),
    }),
    {
      name: "isLogin",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
