import React from "react";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import {Bar} from "react-chartjs-2";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer} from "@coreui/react";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SwTest = () => {
    const years = ["2024", "2025", "2026", "2027", "2028", "2029"];
    const chartData = {
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

    const chartOptions = {
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
                    label: (tooltipItem) => `${tooltipItem.raw}명`,
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
                formatter: (value) => `${value}명`, // 값 표시
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
                    stepSize: 50,
                },
                beginAtZero: true,
                max: 100,
            },
        },
    };

    const levelChartData = {
        labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
        datasets: [
            {
                label: "2023",
                backgroundColor: "rgba(47, 137, 252, 0.6)", // 파란색
                borderColor: "#2f89fc",
                borderWidth: 1,
                data: [1, 2, 5, 4, 0],
            },
            {
                label: "2024",
                backgroundColor: "rgba(252, 99, 132, 0.6)", // 빨간색
                borderColor: "rgba(252, 99, 132, 1)",
                borderWidth: 1,
                data: [1, 1, 11, 8, 2],
            },
        ],
    };

    const levelChartOptions = {
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
                    label: (tooltipItem) => `${tooltipItem.raw}명`,
                },
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
                    stepSize: 5,
                },
                beginAtZero: true,
                max: 15,
            },
        },
    };

    return (
        <CContainer fluid className="body flex-grow-1 px-4">
            <CContainer className="my-5">
                <CCol>
                    <CCard className="bg-dawn-light text-white border-gray" style={{height: "550px"}}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <select
                                        className="form-select bg-dark text-white"
                                        style={{width: "100px", marginRight: "10px"}}
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{fontSize: "1.2rem", color: "#fff"}}>취득인원</span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{height: "450px"}}>
                                <Bar data={chartData} options={chartOptions}/>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol className="mt-4">
                    <CCard className="bg-dark text-white border-gray" style={{height: "550px"}}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <select
                                        className="form-select bg-dark text-white"
                                        style={{width: "100px", marginRight: "10px"}}
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{fontSize: "1.2rem", color: "#fff"}}>TOPCIT 취득 Level</span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{height: "450px"}}>
                                <Bar data={levelChartData} options={levelChartOptions}/>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CContainer>
        </CContainer>
    );
};

export default SwTest;
