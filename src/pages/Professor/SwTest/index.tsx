import React from "react";
import { Bar } from "react-chartjs-2";
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer } from "@coreui/react";
import { useChartStore } from "@/store/SwTest/store.ts";

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
            formatter: (value) => `${value}명`,
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
    const years = ["2024", "2025", "2026", "2027", "2028", "2029"];
    const { chartData, levelChartData, departmentChartData, gradeChartData } = useChartStore();

    const chartOptions = createBaseChartOptions(50, 100);
    const levelChartOptions = createBaseChartOptions(5, 15);
    const departmentChartOptions = createBaseChartOptions(1, 6);
    const gradeChartOptions = createBaseChartOptions(1, 6);

    return (
        <CContainer fluid className="body flex-grow-1 px-4">
            <CContainer className="my-5">
                <CCol>
                    <CCard className="bg-dawn-light text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select className="form-select bg-dark text-white" style={{ width: "100px", marginRight: "10px" }}>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{ fontSize: "1.2rem", color: "#fff" }}>취득인원</span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{ height: "450px" }}>
                                <Bar data={chartData} options={chartOptions} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol className="mt-4">
                    <CCard className="bg-dark text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select className="form-select bg-dark text-white" style={{ width: "100px", marginRight: "10px" }}>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{ fontSize: "1.2rem", color: "#fff" }}>TOPCIT 취득 Level</span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{ height: "450px" }}>
                                <Bar data={levelChartData} options={levelChartOptions} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol className="mt-4">
                    <CCard className="bg-dark text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select className="form-select bg-dark text-white" style={{ width: "100px", marginRight: "10px" }}>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{ fontSize: "1.2rem", color: "#fff" }}>학과별 TOPCIT 취득 인원</span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{ height: "450px" }}>
                                <Bar data={departmentChartData} options={departmentChartOptions} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol className="mt-4">
                    <CCard className="bg-dark text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select className="form-select bg-dark text-white" style={{ width: "100px", marginRight: "10px" }}>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{ fontSize: "1.2rem", color: "#fff" }}>학년별 TOPCIT 취득 Level 취득인력</span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{ height: "450px" }}>
                                <Bar data={gradeChartData} options={gradeChartOptions} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CContainer>
        </CContainer>
    );
};

export default SwTest;
