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
      isLoggedIn: false,
      name: "",
      role: "NOT_LOGGED_IN",
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false, name: "", role: "NOT_LOGGED_IN" }),
      reset: () => set({ isLoggedIn: false, name: "", role: "NOT_LOGGED_IN" }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export { useAuthStore };
