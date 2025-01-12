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
        { name: "DKU StarTrack", path: "/student/scholarship/dku-startrack" },
        {
          name: "SW 인재 > 경진대회/공모전",
          path: "/student/scholarship/sw-talent/competition-contest",
        },
        {
          name: "SW 인재 > 논문",
          path: "/student/scholarship/sw-talent/thesis",
        },
        { name: "SW 유망주", path: "/student/scholarship/sw-rising-star" },
        { name: "SW 융합", path: "/student/scholarship/sw-convergence" },
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
        { name: "Solid Cloud", path: "/professor/solid-cloud" },
        { name: "인턴십", path: "/professor/internship" },
        { name: "경진대회", path: "/professor/competition-contest" },
        { name: "장학금", path: "/professor/award" },
        { name: "SW 역량 테스트", path: "/professor/sw-test" },
        { name: "SW 정원 비율", path: "#" },
        { name: "교원 1인당 학생수", path: "/professor/number-of-student" },
        {
          name: "산학협력 프로젝트 참여률",
          path: "/professor/industry-academia-project",
        },
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
        { name: "Solid Cloud", path: "/super-admin/solid-cloud" },
        { name: "인턴십", path: "/super-admin/internship" },
        { name: "경진대회", path: "/super-admin/competition-contest" },
        { name: "장학금", path: "/super-admin/award" },
        { name: "SW 역량 테스트", path: "/super-admin/sw-test" },
        { name: "SW 정원 비율", path: "#" },
        { name: "교원 1인당 학생수", path: "/super-admin/number-of-student" },
        {
          name: "산학협력 프로젝트 참여률",
          path: "/super-admin/industry-academia-project",
        },
      ],
    },
    {
      name: "관리",
      icon: cilPencil,
      items: [
        { name: "학생 관리", path: "#" },
        { name: "교수 관리", path: "/super-admin/professor-management" },
        { name: "관리자 관리", path: "#" },
        { name: "업체 관리", path: "/super-admin/company-list" },
        { name: "아이템 관리", path: "#" },
        { name: "양식함 관리", path: "/super-admin/file-store-management" },
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
        { name: "Solid Cloud", path: "/admin/solid-cloud" },
        { name: "인턴십", path: "/admin/internship" },
        { name: "경진대회", path: "/admin/competition-contest" },
        { name: "장학금", path: "/admin/award" },
        { name: "SW 역량 테스트", path: "/admin/sw-test" },
        { name: "SW 정원 비율", path: "#" },
        { name: "교원 1인당 학생수", path: "/admin/number-of-student" },
        {
          name: "산학협력 프로젝트 참여률",
          path: "/admin/industry-academia-project",
        },
        { name: "SW 전공생 취업률", path: "#" },
      ],
    },
    {
      name: "관리",
      icon: cilPencil,
      items: [
        { name: "학생 관리", path: "#" },
        { name: "교수 관리", path: "/admin/professor-management" },
        { name: "아이템 관리", path: "#" },
        { name: "양식함 관리", path: "/admin/file-store-management" },
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
