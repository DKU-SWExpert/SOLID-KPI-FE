import { Role } from "@/types/role";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  name: string;
  role: Role;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  reset: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // TODO: 현재 개발의 편의를 위해 true로 설정
      // 나중에 false로 변경해야 함
      isLoggedIn: true,
      name: "",
      role: "NOT_A_MEMBER",
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false, name: "", role: "NOT_A_MEMBER" }),
      reset: () => set({ isLoggedIn: false, name: "", role: "NOT_A_MEMBER" }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export { useAuthStore };
