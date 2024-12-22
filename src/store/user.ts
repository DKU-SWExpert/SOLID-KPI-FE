import { STUDENT } from "@/constants/role";
import { Role } from "@/types/role";
import { persist } from "zustand/middleware";
import { create } from "zustand";

interface UserState {
  name: string;
  studentNumber: string;
  major: string;
  role: Role;
  reset: () => void;
}

const initialState = {
  name: "홍길동",
  studentNumber: "12341234",
  major: "소프트웨어",
  role: STUDENT as Role,
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      reset: () => set(initialState),
    }),
    {
      name: "user-storage",
    }
  )
);

export { useUserStore };
