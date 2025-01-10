import { persist } from "zustand/middleware";
import { create } from "zustand";
import { ChartData } from "chart.js";

interface ChartState {
  participationRate: ChartData<"bar" | "line">;
  deptYear_participationRate: Record<string, ChartData<"bar">>;
  reset: () => void;
}

const participationRate: ChartData<"bar" | "line"> = {
  labels: ["2024", "2025", "2026", "2027", "2028", "2029"],
  datasets: [
    {
      label: "참여율",
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgb(135,182,235)",
      data: [10, 15, 30, 45, 60, 80],
      type: "bar",
    },
    {
      label: "목표",
      borderColor: "rgba(255, 165, 0, 1)",
      data: [25, 35, 45, 60, 70, 90],
      type: "line",
    },
  ],
};

const deptYear_participationRate: Record<string, ChartData<"bar">> = {
  "2024": {
    labels: [
      "SW융합학부",
      "데이터사이언스",
      "모바일",
      "사이버보안",
      "소프트웨어",
      "컴퓨터공학",
    ],
    datasets: [
      {
        label: "2024",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        data: [7, 9, 10, 11, 12, 11],
        type: "bar",
      },
    ],
  },
  "2025": {
    labels: [
      "SW융합학부",
      "데이터사이언스",
      "모바일",
      "사이버보안",
      "소프트웨어",
      "컴퓨터공학",
    ],
    datasets: [
      {
        label: "2024",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        data: [10, 9, 9, 7, 10, 11],
        type: "bar",
      },
    ],
  },
  "2026": {
    labels: [
      "SW융합학부",
      "데이터사이언스",
      "모바일",
      "사이버보안",
      "소프트웨어",
      "컴퓨터공학",
    ],
    datasets: [
      {
        label: "2024",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        data: [7, 11, 10, 11, 12, 11],
        type: "bar",
      },
    ],
  },
  "2027": {
    labels: [
      "SW융합학부",
      "데이터사이언스",
      "모바일",
      "사이버보안",
      "소프트웨어",
      "컴퓨터공학",
    ],
    datasets: [
      {
        label: "2024",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        data: [7, 9, 13, 11, 12, 11],
        type: "bar",
      },
    ],
  },
  "2028": {
    labels: [
      "SW융합학부",
      "데이터사이언스",
      "모바일",
      "사이버보안",
      "소프트웨어",
      "컴퓨터공학",
    ],
    datasets: [
      {
        label: "2024",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        data: [7, 9, 10, 11, 15, 11],
        type: "bar",
      },
    ],
  },
  "2029": {
    labels: [
      "SW융합학부",
      "데이터사이언스",
      "모바일",
      "사이버보안",
      "소프트웨어",
      "컴퓨터공학",
    ],
    datasets: [
      {
        label: "2024",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        data: [7, 9, 10, 11, 10, 11],
        type: "bar",
      },
    ],
  },
};

const useChartStore = create<ChartState>()(
  persist(
    (set) => ({
      participationRate,
      deptYear_participationRate,
      reset: () =>
        set({
          participationRate,
          deptYear_participationRate,
        }),
    }),
    { name: "chartStorage" }
  )
);

export { useChartStore };
