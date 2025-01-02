import {useState} from "react";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import {Bar} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer} from "@coreui/react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface ChartCardProps {
    years: number[];
    title: string;
    chartData: {
        labels: string[];
        datasets: {
            label: string;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            data: number[];
        }[];
    };
    chartOptions: any;
    onYearChange?: (year: number) => void;
}

const createBaseChartOptions = (stepSize: number, max: number) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: "#fff",
            },
        },
        tooltip: {
            callbacks: { // TODO: 툴팁명 변경 필요
                label: (tooltipItem: { raw: number }) => `${tooltipItem.raw}명`,
            },
        },
        datalabels: {
            display: true,
            color: "#fff",
            font: {
                size: 12,
            },
            anchor: "end",
            align: "end",
            formatter: (value: number) => `${value}명`,
        },
    },
    scales: {
        x: {
            ticks: {
                color: "#fff",
            },
        },
        y: {
            ticks: {
                color: "#fff",
                stepSize,
            },
            beginAtZero: true,
            max,
        },
    },
});

const SwTest = () => {
    const years = [2024, 2025, 2026, 2027, 2028, 2029];

    const initialChartData = {
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
    };

    const levelChartData = {
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
    };

    const departmentChartData = {
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
    };

    const gradeChartData = {
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
    };

    const ChartCard = ({years, title, initialData, chartOptions}: ChartCardProps) => {
        const [chartData, setChartData] = useState(initialData);
        const [selectedYear, setSelectedYear] = useState(years[0]);

        const updateChartData = (year: number) => {
            let updatedData;
            if (title === "취득인원") {
                updatedData = {
                    labels: ["TOPCIT", "PCCP", "PCCE", "전체"],
                    datasets: [
                        {
                            label: `취득인원 (${year})`,
                            backgroundColor: "rgba(47, 137, 252, 0.6)",
                            borderColor: "#2f89fc",
                            borderWidth: 1,
                            data: [
                                Math.floor(Math.random() * 100),
                                Math.floor(Math.random() * 100),
                                Math.floor(Math.random() * 100),
                                Math.floor(Math.random() * 100),
                            ],
                        },
                    ],
                };
            } else if (title === "TOPCIT 취득 Level") {
                updatedData = {
                    labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
                    datasets: [
                        {
                            label: `${year}`,
                            backgroundColor: "rgba(47, 137, 252, 0.6)",
                            borderColor: "#2f89fc",
                            borderWidth: 1,
                            data: [
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                            ],
                        },
                        {
                            label: `${year + 1}`,
                            backgroundColor: "rgba(252, 99, 132, 0.6)",
                            borderColor: "rgba(252, 99, 132, 1)",
                            borderWidth: 1,
                            data: [
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                            ],
                        },
                    ],
                };
            } else if (title === "학과별 TOPCIT 취득 인원") {
                updatedData = {
                    labels: ["SW융합학부", "데이터사이언스", "모바일", "사이버보안", "소프트웨어", "컴퓨터공학"],
                    datasets: [
                        {
                            label: `${year}`,
                            backgroundColor: "rgba(47, 137, 252, 0.6)",
                            borderColor: "#2f89fc",
                            borderWidth: 1,
                            data: [
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                            ],
                        },
                        {
                            label: `${year + 1}`,
                            backgroundColor: "rgba(252, 99, 132, 0.6)",
                            borderColor: "rgba(252, 99, 132, 1)",
                            borderWidth: 1,
                            data: [
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                                Math.floor(Math.random() * 5),
                            ],
                        },
                    ],
                };
            } else if (title === "학년별 TOPCIT 취득 Level 취득인력") {
                updatedData = {
                    labels: ["1학년", "2학년", "3학년", "4학년"],
                    datasets: [
                        {
                            label: `Level 1`,
                            backgroundColor: "rgba(47, 137, 252, 0.6)",
                            borderColor: "#2f89fc",
                            borderWidth: 1,
                            data: [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
                        },
                        {
                            label: `Level 2`,
                            backgroundColor: "rgba(252, 99, 132, 0.6)",
                            borderColor: "rgba(252, 99, 132, 1)",
                            borderWidth: 1,
                            data: [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
                        },
                        {
                            label: `Level 3`,
                            backgroundColor: "rgba(34, 139, 34, 0.6)",
                            borderColor: "rgba(34, 139, 34, 1)",
                            borderWidth: 1,
                            data: [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
                        },
                        {
                            label: `Level 4`,
                            backgroundColor: "rgba(255, 215, 0, 0.6)",
                            borderColor: "rgba(255, 215, 0, 1)",
                            borderWidth: 1,
                            data: [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
                        },
                        {
                            label: `Level 5`,
                            backgroundColor: "rgba(0, 0, 255, 0.6)",
                            borderColor: "rgba(0, 0, 255, 1)",
                            borderWidth: 1,
                            data: [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
                        },
                    ],
                };
            }

            setChartData(updatedData);
            setSelectedYear(year);
        };

        return (
            <CCol className="mt-4">
                <CCard className="bg-dark text-white border-gray" style={{height: "550px"}}>
                    <CCardHeader className="bg-dawn-light text-white">
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <select
                                    className="form-select bg-dark text-white"
                                    style={{width: "100px", marginRight: "10px"}}
                                    value={selectedYear}
                                    onChange={(e) => updateChartData(Number(e.target.value))}
                                >
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <span style={{fontSize: "1.2rem", color: "#fff"}}>{title}</span>
                            </div>
                            <CButton color="primary">다운로드</CButton>
                        </div>
                    </CCardHeader>
                    <CCardBody className="bg-dawn">
                        <div style={{height: "450px"}}>
                            <Bar key={Math.random()} data={chartData} options={chartOptions}/>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        );
    };


    return (
        <CContainer fluid className="body flex-grow-1 px-4">
            <CContainer className="my-5">
                <ChartCard
                    years={years}
                    title="취득인원"
                    initialData={initialChartData}
                    chartOptions={createBaseChartOptions(50, 100)}
                />
                <ChartCard
                    years={years}
                    title="TOPCIT 취득 Level"
                    initialData={levelChartData}
                    chartOptions={createBaseChartOptions(5, 15)}
                />
                <ChartCard
                    years={years}
                    title="학과별 TOPCIT 취득 인원"
                    initialData={departmentChartData}
                    chartOptions={createBaseChartOptions(1, 6)}
                />
                <ChartCard
                    years={years}
                    title="학년별 TOPCIT 취득 Level 취득인력"
                    initialData={gradeChartData}
                    chartOptions={createBaseChartOptions(1, 6)}
                />
            </CContainer>
        </CContainer>
    );
};

export default SwTest;
