import {useEffect, useRef} from "react";
import {CChart} from "@coreui/react-chartjs";
import {CButton, CCard, CCardBody, CCardHeader, CContainer} from "@coreui/react";
import type {ChartOptions, ScaleOptions} from "chart.js";
import {Chart} from "chart.js";
import {useChartStore} from "@store/internship";
import CIcon from "@coreui/icons-react";
import {cilArrowThickToBottom} from "@coreui/icons";

const ProfessorInternship = () => {
    const chartRef = useRef<Chart<'bar' | 'line'> | null>(null);
    const {data} = useChartStore();

    useEffect(() => {
        const updateChartColors = () => {
            const chartInstance = chartRef.current;
            if (!chartInstance) return;

            const {options} = chartInstance;

            const applyColorScheme = (scale: ScaleOptions) => {
                if (scale.grid) scale.grid.color = "#B0B0B0";
                if (scale.ticks) scale.ticks.color = "#FFFFFF";
            };

            if (options.scales?.x) applyColorScheme(options.scales.x);
            if (options.scales?.y) applyColorScheme(options.scales.y);

            if (options.plugins?.legend?.labels) {
                options.plugins.legend.labels.color = "#FFFFFF";
            }

            chartInstance.update();
        };

        document.documentElement.addEventListener("ColorSchemeChange", updateChartColors);
        return () => {
            document.documentElement.removeEventListener("ColorSchemeChange", updateChartColors);
        };
    }, []);

    const options: ChartOptions<'bar' | 'line'> = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    color: "#FFFFFF",
                },
            },
            tooltip: {
                mode: "index",
                intersect: false,
                position: 'nearest',
            },
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            x: {
                type: "category",
                grid: {
                    color: "#B0B0B0",
                },
                ticks: {
                    color: "#FFFFFF",
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "#B0B0B0",
                },
                ticks: {
                    color: "#FFFFFF",
                    stepSize: 5,
                    maxTicksLimit: 5,
                },
            },
        },
    };

    const downloadChart = () => {
        const chartInstance = chartRef.current;
        if (chartInstance) {
            const imageUrl = chartInstance.toBase64Image();
            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = "chart.png";
            link.click();
        }
    };

    return (
        <CContainer fluid className="flex-grow-1 px-4 body">
            <CContainer className="d-flex justify-content-center my-5">
                <CCard
                    className="bg-dawn-light text-white border-gray"
                    style={{width: '100%', maxWidth: '1200px', height: 'auto'}}
                >
                    <CCardHeader
                        className="d-flex justify-content-between align-items-center bg-dawn-light text-white px-4 py-3"
                    >
                        <span>인턴십 이수율 지표</span>
                        <CButton color="primary" className="bg-transparent border-0" onClick={downloadChart}>
                            <CIcon icon={cilArrowThickToBottom} size="lg"/>
                        </CButton>
                    </CCardHeader>
                    <CCardBody className="pt-0 d-flex justify-content-center align-items-center">
                        <CChart type="bar" data={data} options={options} ref={chartRef}
                                style={{height: '33rem', width: '100%'}}/>
                    </CCardBody>
                </CCard>
            </CContainer>
        </CContainer>
    );
};

export default ProfessorInternship;
