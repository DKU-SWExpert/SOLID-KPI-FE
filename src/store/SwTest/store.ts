import create from "zustand";

interface Dataset {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    data: number[];
}

interface ChartData {
    labels: string[];
    datasets: Dataset[];
}

interface ChartStore {
    chartData: ChartData;
    levelChartData: ChartData;
    departmentChartData: ChartData;
    gradeChartData: ChartData;
}
export const useChartStore = create<ChartStore>((set) => ({
    chartData: {
        labels: ["TOPCIT", "PCCP", "PCCE", "전체"],
        datasets: [
            {
                label: "취득인원 (2024)",
                backgroundColor: "rgba(47, 137, 252, 0.6)",
                borderColor: "#2f89fc",
                borderWidth: 1,
                data: [34, 34, 23, 91],
            },
        ],
    },
    levelChartData: {
        labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
        datasets: [
            {
                label: "2023",
                backgroundColor: "rgba(47, 137, 252, 0.6)",
                borderColor: "#2f89fc",
                borderWidth: 1,
                data: [1, 2, 5, 4, 0],
            },
            {
                label: "2024",
                backgroundColor: "rgba(252, 99, 132, 0.6)",
                borderColor: "rgba(252, 99, 132, 1)",
                borderWidth: 1,
                data: [1, 1, 11, 8, 2],
            },
        ],
    },
    departmentChartData: {
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
                label: "2023",
                backgroundColor: "rgba(47, 137, 252, 0.6)",
                borderColor: "#2f89fc",
                borderWidth: 1,
                data: [1, 1, 3, 2, 2, 2],
            },
            {
                label: "2024",
                backgroundColor: "rgba(252, 99, 132, 0.6)",
                borderColor: "rgba(252, 99, 132, 1)",
                borderWidth: 1,
                data: [3, 3, 4, 4, 5, 4],
            },
        ],
    },
    gradeChartData: {
        labels: ["1학년", "2학년", "3학년", "4학년"],
        datasets: [
            {
                label: "Level 1",
                backgroundColor: "rgba(47, 137, 252, 0.6)",
                borderColor: "#2f89fc",
                borderWidth: 1,
                data: [0, 0, 0, 0],
            },
            {
                label: "Level 2",
                backgroundColor: "rgba(252, 99, 132, 0.6)",
                borderColor: "rgba(252, 99, 132, 1)",
                borderWidth: 1,
                data: [0, 0, 1, 0],
            },
            {
                label: "Level 3",
                backgroundColor: "rgba(34, 139, 34, 0.6)",
                borderColor: "rgba(34, 139, 34, 1)",
                borderWidth: 1,
                data: [2, 3, 3, 3],
            },
            {
                label: "Level 4",
                backgroundColor: "rgba(255, 215, 0, 0.6)",
                borderColor: "rgba(255, 215, 0, 1)",
                borderWidth: 1,
                data: [1, 0, 5, 2],
            },
            {
                label: "Level 5",
                backgroundColor: "rgba(0, 0, 255, 0.6)",
                borderColor: "rgba(0, 0, 255, 1)",
                borderWidth: 1,
                data: [0, 0, 1, 1],
            },
        ],
    },
}));
