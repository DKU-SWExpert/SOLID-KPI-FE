import { Role } from "@/types/role";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SUPER_ADMIN } from "@/constants/role";

interface AuthState {
  name: string;
  role: Role;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  reset: () => void;
}

const initialState = {
  isLoggedIn: true, // TODO: 개발 편의를 위해 true로 설정, 나중에 false로 변경
  name: "",
  role: SUPER_ADMIN as Role, // TODO: 개발 편의를 위해 슈퍼 관리자로 설정, 나중에 NOT_A_MEMBER로 변경
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialState,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ ...initialState, isLoggedIn: false }),
      reset: () => set(initialState),
    }),
    {
      name: "auth-storage",
    }
  )
);

export { useAuthStore };
