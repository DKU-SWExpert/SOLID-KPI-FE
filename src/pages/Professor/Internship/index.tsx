import React, {useRef, useState} from "react";
import {CContainer} from "@coreui/react";
import {Bar, Pie} from "react-chartjs-2";
import {useChartStore} from "@store/internship";
import {
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PieController,
    PointElement,
    Tooltip
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartCard from "@components/ChartCard";

ChartJS.register(
    LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip,
    LineController, BarController, PieController, ArcElement, ChartDataLabels
);

const years = [2024, 2025, 2026, 2027, 2028, 2029];

const ProfessorInternship = () => {
    const [departmentInternshipStatusYear, setDepartmentInternshipStatusYear] = useState("2024");
    const [internshipStatusByTypeYear, setInternshipStatusByTypeYear] = useState("2024");

    const mixChartRef = useRef<ChartJS<'bar' | 'line'> | null>(null);
    const barChartRef = useRef<ChartJS<'bar'> | null>(null);
    const pieChartRef = useRef<ChartJS<'pie'> | null>(null);

    const {internshipCompletion, departmentInternshipStatus, internshipStatusByType} = useChartStore();

    const handleDepartmentInternshipStatusYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDepartmentInternshipStatusYear(event.target.value);
    };

    const handleInternshipStatusByTypeYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInternshipStatusByTypeYear(event.target.value);
    };

    return (
        <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
            <ChartCard
                className="mb-5"
                title="인턴십 이수율 지표"
                chartRef={mixChartRef}
                chartData={internshipCompletion}
                chartType={Bar}
                fileName="internship-completion.png"
                chartOptions={{
                    plugins: {
                        datalabels: {
                            display: (ctx) => ctx.datasetIndex === 1,
                            anchor: 'end',
                            align: 'top',
                            formatter: (value) => `${value}%`,
                            color: 'white',
                            font: {size: 12},
                        },
                    },
                }}
                showYearSelect={false}
            />

            <ChartCard
                className="mb-5"
                title="학과별 인턴 현황"
                year={departmentInternshipStatusYear}
                onYearChange={handleDepartmentInternshipStatusYearChange}
                years={years}
                chartRef={barChartRef}
                chartData={departmentInternshipStatus[departmentInternshipStatusYear]}
                chartType={Bar}
                fileName="department-internship-status.png"
                chartOptions={{
                    plugins: {
                        datalabels: {
                            anchor: 'center',
                            align: 'center',
                            formatter: (value) => value !== 0 ? `${value}명` : '',
                            color: 'white',
                            font: {size: 12},
                        },
                    },
                }}
            />

            <ChartCard
                title="인턴 유형별 현황"
                year={internshipStatusByTypeYear}
                onYearChange={handleInternshipStatusByTypeYearChange}
                years={years}
                chartRef={pieChartRef}
                chartData={internshipStatusByType[internshipStatusByTypeYear]}
                chartType={Pie}
                fileName="internship-status-by-type.png"
                chartOptions={{
                    plugins: {
                        datalabels: {
                            anchor: 'center',
                            align: 'center',
                            formatter: (value) => value !== 0 ? `${value} %` : '',
                            color: 'white',
                            font: {size: 12},
                        },
                    },
                }}
            />
        </CContainer>
    );
};

export default ProfessorInternship;
