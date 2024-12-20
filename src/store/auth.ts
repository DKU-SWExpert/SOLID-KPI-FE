import { Role } from "@/types/role";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NOT_A_MEMBER } from "@/constants/role";

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
  role: NOT_A_MEMBER as Role,
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
