import {
  STUDENT,
  PROFESSOR,
  ADMIN,
  SUPER_ADMIN,
  NOT_A_MEMBER,
} from "@/constants/role";

export type Role =
  | typeof STUDENT
  | typeof PROFESSOR
  | typeof ADMIN
  | typeof SUPER_ADMIN
  | typeof NOT_A_MEMBER;
