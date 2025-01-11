import {useRef, useState} from "react";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import {Bar} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer} from "@coreui/react";
import {cilArrowThickToBottom} from "@coreui/icons";
import html2canvas from "html2canvas";
import CIcon from "@coreui/icons-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface ChartCardProps {
    years: number[];
    title: string;
    initialData: {
        labels: string[];
        datasets: {
            label: string;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            data: number[];
        }[];
    } | null;
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
            callbacks: {
                label: (tooltipItem: any) => {
                    const label = tooltipItem.dataset.label || '';
                    const value = tooltipItem.raw;
                    return `${label}: ${value}명`;
                },
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

type ChartData = {
    labels: string[];
    datasets: {
        label: string;
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
        data: number[];
    }[];
} | null;

const generateChartData = (title: string, year: number): ChartData => {
    const randomData = (length: number, max: number) =>
        Array.from({length}, () => Math.floor(Math.random() * max));
    switch (title) {
        case "취득인원":
            return {
                labels: ["TOPCIT", "PCCP", "PCCE", "전체"],
                datasets: [
                    {
                        label: `취득인원 (${year})`,
                        backgroundColor: "rgba(47, 137, 252, 0.6)",
                        borderColor: "#2f89fc",
                        borderWidth: 1,
                        data: randomData(4, 100),
                    },
                ],
            };
        case "TOPCIT 취득 Level":
            return {
                labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
                datasets: [
                    {
                        label: `${year}`,
                        backgroundColor: "rgba(47, 137, 252, 0.6)",
                        borderColor: "#2f89fc",
                        borderWidth: 1,
                        data: randomData(5, 5),
                    },
                    {
                        label: `${year + 1}`,
                        backgroundColor: "rgba(252, 99, 132, 0.6)",
                        borderColor: "rgba(252, 99, 132, 1)",
                        borderWidth: 1,
                        data: randomData(5, 5),
                    },
                ],
            };
        case "학과별 TOPCIT 취득 인원":
            return {
                labels: ["SW융합학부", "데이터사이언스", "모바일", "사이버보안", "소프트웨어", "컴퓨터공학"],
                datasets: [
                    {
                        label: `${year}`,
                        backgroundColor: "rgba(47, 137, 252, 0.6)",
                        borderColor: "#2f89fc",
                        borderWidth: 1,
                        data: randomData(6, 5),
                    },
                    {
                        label: `${year + 1}`,
                        backgroundColor: "rgba(252, 99, 132, 0.6)",
                        borderColor: "rgba(252, 99, 132, 1)",
                        borderWidth: 1,
                        data: randomData(6, 5),
                    },
                ],
            };
        case "학년별 TOPCIT 취득 Level 취득인력":
            return {
                labels: ["1학년", "2학년", "3학년", "4학년"],
                datasets: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"].map((level, index) => ({
                    label: level,
                    backgroundColor: `rgba(${index * 50}, ${index * 50 + 50}, 255, 0.6)`,
                    borderColor: `rgba(${index * 50}, ${index * 50 + 50}, 255, 1)`,
                    borderWidth: 1,
                    data: randomData(4, 2),
                })),
            };
        default:
            return null;
    }
};

const ChartCard = ({years, title, initialData, chartOptions}: ChartCardProps) => {
    const [chartData, setChartData] = useState<ChartData>(initialData);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const chartRef = useRef<HTMLDivElement>(null);

    const updateChartData = (year: number) => {
        setChartData(generateChartData(title, year));
        setSelectedYear(year);
    };

    const downloadChart = async () => {
        if (chartRef.current) {
            const canvas = await html2canvas(chartRef.current);
            const link = document.createElement("a");
            link.download = `${title}-${selectedYear}.jpg`;
            link.href = canvas.toDataURL("image/jpeg");
            link.click();
        }
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
                        <CButton style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "white",
                        }} onClick={downloadChart}>
                            <CIcon icon={cilArrowThickToBottom} size="lg"/>
                        </CButton>
                    </div>
                </CCardHeader>
                <CCardBody className="bg-dawn">
                    <div style={{height: "450px"}} ref={chartRef}>
                        {chartData ? (
                            <Bar key={Math.random()} data={chartData} options={chartOptions}/>
                        ) : (
                            <p style={{color: "#fff"}}>데이터를 불러올 수 없습니다.</p>
                        )}
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
    );
};
const SwTest = () => {
    const years = [2024, 2025, 2026, 2027, 2028, 2029];

    return (
        <CContainer fluid className="body flex-grow-1 px-4">
            <CContainer className="my-5">
                {[
                    {title: "취득인원", options: createBaseChartOptions(50, 100)},
                    {title: "TOPCIT 취득 Level", options: createBaseChartOptions(5, 15)},
                    {title: "학과별 TOPCIT 취득 인원", options: createBaseChartOptions(1, 6)},
                    {title: "학년별 TOPCIT 취득 Level 취득인력", options: createBaseChartOptions(1, 6)},
                ].map(({title, options}) => (
                    <ChartCard
                        key={title}
                        years={years}
                        title={title}
                        initialData={generateChartData(title, years[0])}
                        chartOptions={options}
                    />
                ))}
            </CContainer>
        </CContainer>
    );
};

export default SwTest;
