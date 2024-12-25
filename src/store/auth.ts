import { Role } from "@/types/role";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STUDENT } from "@/constants/role";

interface AuthState {
  name: string;
  role: Role;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  reset: () => void;
}

const initialState = {
  isLoggedIn: false, // TODO: 개발 편의를 위해 true로 설정, 나중에 false로 변경
  name: "",
  role: STUDENT as Role, // TODO: 개발 편의를 위해 학생으로 설정, 나중에 NOT_A_MEMBER로 변경
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
