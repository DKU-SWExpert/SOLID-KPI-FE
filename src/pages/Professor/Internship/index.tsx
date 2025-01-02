import { useEffect, useRef } from "react";
import { CChart } from "@coreui/react-chartjs";
import { CButton, CCard, CCardBody, CCardHeader, CContainer } from "@coreui/react";
import { Chart, ChartOptions } from "chart.js";
import { useChartStore } from "@store/internship";
import CIcon from "@coreui/icons-react";
import { cilArrowThickToBottom } from "@coreui/icons";

const getChartOptions = (type: 'bar' | 'line' | 'pie'): ChartOptions => {
    const baseOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: { color: "#FFFFFF" },
            },
            tooltip: {
                mode: type === 'pie' ? undefined : "index",
                intersect: false,
                position: "nearest",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleColor: "#FFFFFF",
                bodyColor: "#FFFFFF",
            },
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
    };

    if (type !== 'pie') {
        return {
            ...baseOptions,
            scales: {
                x: {
                    type: "category",
                    grid: { color: "#B0B0B0" },
                    ticks: { color: "#FFFFFF" },
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#B0B0B0" },
                    ticks: { color: "#FFFFFF", stepSize: 5, maxTicksLimit: 5 },
                },
            },
        };
    }

    return baseOptions;
};

const downloadChart = (chartRef: React.RefObject<Chart>, filename: string) => {
    if (chartRef.current) {
        const imageUrl = chartRef.current.toBase64Image();
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename;
        link.click();
    }
};

const ProfessorInternship = () => {
    const chartRef = useRef<Chart<'bar' | 'line'> | null>(null);
    const barChartRef = useRef<Chart<'bar'> | null>(null);
    const pieChartRef = useRef<Chart<'pie'> | null>(null);

    const { data, departmentData, typeData } = useChartStore();

    useEffect(() => {
        const updateChartColors = () => {
            const chartInstance = chartRef.current;
            if (!chartInstance) return;

            const { options } = chartInstance;
            const applyColorScheme = (scale: any) => {
                if (scale.grid) scale.grid.color = "#B0B0B0";
                if (scale.ticks) scale.ticks.color = "#FFFFFF";
            };

            if (options.scales?.x) applyColorScheme(options.scales.x);
            if (options.scales?.y) applyColorScheme(options.scales.y);
            if (options.plugins?.legend?.labels) options.plugins.legend.labels.color = "#FFFFFF";

            chartInstance.update();
        };

        document.documentElement.addEventListener("ColorSchemeChange", updateChartColors);
        return () => {
            document.documentElement.removeEventListener("ColorSchemeChange", updateChartColors);
        };
    }, []);

    const chartStyle = {
        height: '100%',
        width: 'auto',
    };

    const cardBodyStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <CContainer fluid className="flex-grow-1 px-4 body">
            {/* 인턴십 이수율 지표 차트 */}
            <CContainer className="d-flex justify-content-center my-5">
                <CCard className="bg-dawn-light text-white border-gray" style={{ width: '100%', maxWidth: '1200px' }}>
                    <CCardHeader className="d-flex justify-content-between align-items-center bg-dawn-light text-white px-4 py-3">
                        <span>인턴십 이수율 지표</span>
                        <CButton color="primary" className="bg-transparent border-0"
                                 onClick={() => downloadChart(chartRef, 'main-chart.png')}>
                            <CIcon icon={cilArrowThickToBottom} size="lg" />
                        </CButton>
                    </CCardHeader>
                    <CCardBody className="pt-0" style={{ ...cardBodyStyle, height: '33rem' }}>
                        <CChart type="bar" data={data} options={getChartOptions('bar')} ref={chartRef} style={chartStyle} />
                    </CCardBody>
                </CCard>
            </CContainer>

            {/* 학과별 인턴현황 차트 */}
            <CContainer className="d-flex justify-content-center my-5">
                <CCard className="bg-dark text-white border-gray" style={{ width: '100%', maxWidth: '1200px' }}>
                    <CCardHeader className="d-flex justify-content-between align-items-center px-4 py-3">
                        <span>학과별 인턴 현황</span>
                        <CButton color="primary" className="bg-transparent border-0"
                                 onClick={() => downloadChart(barChartRef, 'department-chart.png')}>
                            <CIcon icon={cilArrowThickToBottom} size="lg" />
                        </CButton>
                    </CCardHeader>
                    <CCardBody style={{ ...cardBodyStyle, height: '500px', overflow: 'hidden' }}>
                        <CChart type="bar" data={departmentData} options={getChartOptions('bar')} ref={barChartRef} style={chartStyle} />
                    </CCardBody>
                </CCard>
            </CContainer>

            {/* 인턴 유형별 현황 차트 */}
            <CContainer className="d-flex justify-content-center my-5">
                <CCard className="bg-dark text-white border-gray" style={{ width: '100%', maxWidth: '1200px' }}>
                    <CCardHeader className="d-flex justify-content-between align-items-center px-4 py-3">
                        <span>인턴 유형별 현황</span>
                        <CButton color="primary" className="bg-transparent border-0"
                                 onClick={() => downloadChart(pieChartRef, 'type-chart.png')}>
                            <CIcon icon={cilArrowThickToBottom} size="lg" />
                        </CButton>
                    </CCardHeader>
                    <CCardBody className="pt-0 d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                        <CChart type="pie" data={typeData} options={getChartOptions('pie')} ref={pieChartRef} style={{ height: '400px', width: 'auto' }} />
                    </CCardBody>
                </CCard>
            </CContainer>
        </CContainer>
    );
};

export default ProfessorInternship;
