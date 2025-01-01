import React from "react";
import { Bar } from "react-chartjs-2";
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer } from "@coreui/react";
import { useChartStore } from "@/store/SwTest/store.ts";

const SwTest = () => {
    const {
        years,
        chartData,
        levelChartData,
        departmentChartData,
        gradeChartData,
    } = useChartStore();

    return (
        <CContainer fluid className="body flex-grow-1 px-4">
            <CContainer className="my-5">
                <CCol>
                    {/* 취득인원 */}
                    <CCard className="bg-dawn-light text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select
                                        className="form-select bg-dark text-white"
                                        style={{ width: "100px", marginRight: "10px" }}
                                    >
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
                                <Bar data={chartData} options={{ responsive: true }} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol className="mt-4">
                    {/* TOPCIT 취득 Level */}
                    <CCard className="bg-dark text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select
                                        className="form-select bg-dark text-white"
                                        style={{ width: "100px", marginRight: "10px" }}
                                    >
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
                                <Bar data={levelChartData} options={{ responsive: true }} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol className="mt-4">
                    {/* 학과별 TOPCIT 취득 인원 */}
                    <CCard className="bg-dark text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select
                                        className="form-select bg-dark text-white"
                                        style={{ width: "100px", marginRight: "10px" }}
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{ fontSize: "1.2rem", color: "#fff" }}>
                    학과별 TOPCIT 취득 인원
                  </span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{ height: "450px" }}>
                                <Bar data={departmentChartData} options={{ responsive: true }} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol>
                    {/* 학년별 TOPCIT 취득 Level 취득 인력 */}
                    <CCard className="bg-dark text-white border-gray" style={{ height: "550px" }}>
                        <CCardHeader className="bg-dawn-light test-white">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <select
                                        className="form-select bg-dark text-white"
                                        style={{ width: "100px", marginRight: "10px" }}
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <span style={{ fontSize: "1.2rem", color: "#fff" }}>
                    학년별 TOPCIT 취득 Level 취득 인력
                  </span>
                                </div>
                                <CButton color="primary">다운로드</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody className="bg-dawn">
                            <div style={{ height: "450px" }}>
                                <Bar data={gradeChartData} options={{ responsive: true }} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CContainer>
        </CContainer>
    );
};

export default SwTest;
