import { cilPencil } from "@coreui/icons";
import { NavItem } from "../types/sidebar";

// href는 추후 Link 사용시 변경
export const navigationConfig: Record<string, NavItem[]> = {
  STUDENT: [
    {
      name: "인턴십",
      items: [
        { name: "신청", path: "/student/internship/application" },
        { name: "결과 입력", path: "/student/internship/enter-result" },
      ],
    },
    {
      name: "장학금",
      items: [
        { name: "SW Expert", path: "/student/scholarship/sw-expert" },
        { name: "SW 서포터즈", path: "/student/scholarship/supporters" },
        { name: "DKU StarTrack", path: "#" },
        { name: "SW 인재 > 경진대회/공모전", path: "/student/scholarship/sw-talent/competition-contest" },
        { name: "SW 인재 > 논문", path: "#" },
        { name: "SW 유망주", path: "#" },
        { name: "SW 융합", path: "#" },
      ],
    },
    {
      name: "SW 역량테스트",
      items: [
        { name: "신청", path: "/student/sw-test/application" },
        { name: "결과 입력", path: "/student/sw-test/enter-result" },
      ],
    },
  ],
  PROFESSOR: [
    {
      name: "분석",
      items: [
        { name: "Solid Cloud", path: "#" },
        { name: "인턴쉽", path: "#" },
        { name: "경진대회", path: "#" },
        { name: "장학금", path: "#" },
        { name: "SW 역량 테스트", path: "#" },
        { name: "SW 정원 비율", path: "#" },
        { name: "교원 1인당 학생수", path: "#" },
        { name: "산학협력 프로젝트 참여률", path: "#" },
        { name: "SW 전공생 취업률", path: "#" },
      ],
    },
    {
      name: "지표",
      icon: cilPencil,
      items: [
        { name: "주요 성과 지표", path: "#" },
        { name: "자율 성과 지표", path: "#" },
      ],
    },
  ],
  SUPER_ADMIN: [
    {
      name: "분석",
      items: [
        { name: "Solid Cloud 활용", path: "#" },
        { name: "인턴쉽", path: "#" },
        { name: "경진대회", path: "#" },
        { name: "장학금", path: "#" },
        { name: "SW 역량 테스트", path: "#" },
        { name: "SW 정원 비율", path: "#" },
        { name: "교원 1인당 학생수", path: "#" },
        { name: "산학협력 프로젝트 참여률", path: "#" },
        { name: "SW 전공생 취엽률", path: "#" },
      ],
    },
    {
      name: "관리",
      icon: cilPencil,
      items: [
        { name: "학생 관리", path: "#" },
        { name: "교수 관리", path: "#" },
        { name: "관리자 관리", path: "#" },
        { name: "아이템 관리", path: "#" },
        { name: "양식함 관리", path: "#" },
      ],
    },
    {
      name: "지표",
      items: [
        { name: "주요 성과 지표", path: "#" },
        { name: "자율 성과 지표", path: "#" },
      ],
    },
  ],
  ADMIN: [
    {
      name: "분석",
      items: [
        { name: "Solid Cloud 활용", path: "#" },
        { name: "인턴쉽", path: "#" },
        { name: "경진대회", path: "#" },
        { name: "장학금", path: "#" },
        { name: "SW 역량 테스트", path: "#" },
        { name: "SW 정원 비율", path: "#" },
        { name: "교원 1인당 학생수", path: "#" },
        { name: "산학협력 프로젝트 참여률", path: "#" },
        { name: "SW 전공생 취엽률", path: "#" },
      ],
    },
    {
      name: "관리",
      icon: cilPencil,
      items: [
        { name: "학생 관리", path: "#" },
        { name: "교수 관리", path: "#" },
        { name: "아이템 관리", path: "#" },
        { name: "양식함 관리", path: "#" },
      ],
    },
    {
      name: "지표",
      items: [
        { name: "주요 성과 지표", path: "#" },
        { name: "자율 성과 지표", path: "#" },
      ],
    },
  ],
};
