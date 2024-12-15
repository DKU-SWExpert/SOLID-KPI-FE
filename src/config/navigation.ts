import { cilUser, cilBuilding, cilPuzzle } from "@coreui/icons";
import { NavItem } from "../types/sidebar";

// href는 추후 Link 사용시 변경
export const navigationConfig: Record<string, NavItem[]> = {
  공통: [
    {
      name: "학생관리",
      icon: cilUser,
      href: "#",
    },
    {
      name: "학과관리",
      icon: cilBuilding,
      href: "#",
    },
    {
      name: "교수관리",
      icon: cilUser,
      href: "#",
    },
  ],
  아이템: [
    {
      name: "인턴십",
      icon: cilPuzzle,
      items: [
        { name: "신청", href: "#" },
        { name: "결과 입력", href: "#" },
      ],
    },
    {
      name: "장학금",
      icon: cilPuzzle,
      items: [
        { name: "SW Expert", href: "#" },
        { name: "SW 서포터즈", href: "#" },
        { name: "SKU StartTrack", href: "#" },
        { name: "SW 인재", href: "#" },
        { name: "SW 유망주", href: "#" },
        { name: "SW 융합", href: "#" },
      ],
    },
    {
      name: "SW 역량테스트",
      icon: cilPuzzle,
      items: [
        { name: "신청", href: "#" },
        { name: "결과 입력", href: "#" },
      ],
    },
  ],
};
