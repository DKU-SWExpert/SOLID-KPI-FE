import { cilPencil } from "@coreui/icons";
import { NavItem } from "../types/sidebar";

// href는 추후 Link 사용시 변경
export const navigationConfig: Record<string, NavItem[]> = {
  STUDENT: [
    {
      name: "인턴십",
      items: [
        { name: "신청", href: "#" },
        { name: "결과 입력", href: "#" },
      ],
    },
    {
      name: "장학금",
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
      items: [
        { name: "신청", href: "#" },
        { name: "결과 입력", href: "#" },
      ],
    },
  ],
  PROFESSOR: [
    {
      name: "분석",
      items: [
        { name: "Solid Cloud", href: "#" },
        { name: "인턴쉽", href: "#" },
        { name: "경진대회", href: "#" },
        { name: "장학금", href: "#" },
        { name: "SW 역량 테스트", href: "#" },
        { name: "SW 정원 비율", href: "#" },
        { name: "교원 1인당 학생수", href: "#" },
        { name: "산학협력 프로젝트 참여률", href: "#" },
        { name: "SW 전공생 취업률", href: "#" },
      ],
    },
    {
      name: "지표",
      icon: cilPencil,
      items: [
        { name: "주요 성과 지표", href: "#" },
        { name: "자율 성과 지표", href: "#" },
      ],
    },
  ],
  SUPER_ADMIN: [
    {
      name: "분석",
      items: [
        { name: "Solid Cloud 활용", href: "#" },
        { name: "인턴쉽", href: "#" },
        { name: "경진대회", href: "#" },
        { name: "장학금", href: "#" },
        { name: "SW 역량 테스트", href: "#" },
        { name: "SW 정원 비율", href: "#" },
        { name: "교원 1인당 학생수", href: "#" },
        { name: "산학협력 프로젝트 참여률", href: "#" },
        { name: "SW 전공생 취엽률", href: "#" },
      ],
    },
    {
      name: "관리",
      icon: cilPencil,
      items: [
        { name: "학생 관리", href: "#" },
        { name: "교수 관리", href: "#" },
        { name: "관리자 관리", href: "#" },
        { name: "아이템 관리", href: "#" },
        { name: "양식함 관리", href: "#" },
      ],
    },
    {
      name: "지표",
      items: [
        { name: "주요 성과 지표", href: "#" },
        { name: "자율 성과 지표", href: "#" },
      ],
    },
  ],
  ADMIN: [
    {
      name: "분석",
      items: [
        { name: "Solid Cloud 활용", href: "#" },
        { name: "인턴쉽", href: "#" },
        { name: "경진대회", href: "#" },
        { name: "장학금", href: "#" },
        { name: "SW 역량 테스트", href: "#" },
        { name: "SW 정원 비율", href: "#" },
        { name: "교원 1인당 학생수", href: "#" },
        { name: "산학협력 프로젝트 참여률", href: "#" },
        { name: "SW 전공생 취엽률", href: "#" },
      ],
    },
    {
      name: "관리",
      icon: cilPencil,
      items: [
        { name: "학생 관리", href: "#" },
        { name: "교수 관리", href: "#" },
        { name: "아이템 관리", href: "#" },
        { name: "양식함 관리", href: "#" },
      ],
    },
    {
      name: "지표",
      items: [
        { name: "주요 성과 지표", href: "#" },
        { name: "자율 성과 지표", href: "#" },
      ],
    },
  ],
};
