import React from "react";
import {CButton, CCard, CCardBody, CCardHeader, CContainer, CFormSelect} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilArrowThickToBottom} from "@coreui/icons";
import {Chart as ChartJS, ChartData, ChartOptions} from "chart.js";

interface ChartCardProps {
    title: string;
    year?: string;
    onYearChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    years?: number[];
    chartRef: React.RefObject<ChartJS>;
    chartData: ChartData;
    chartType: React.ElementType;
    fileName: string;
    chartOptions?: ChartOptions;
    showYearSelect?: boolean;
    className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
                                                 title,
                                                 year,
                                                 onYearChange,
                                                 years,
                                                 chartRef,
                                                 chartData,
                                                 chartType: ChartComponent,
                                                 fileName,
                                                 chartOptions,
                                                 showYearSelect = true,
                                                 className, // className을 추가
                                             }) => {
    const downloadChart = () => {
        if (chartRef.current) {
            const imageUrl = chartRef.current.toBase64Image();
            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = fileName;
            link.click();
        }
    };

    return (
        <CCard className={`bg-dark text-white border-gray ${className}`} style={{ width: "100%", maxWidth: "1200px" }}>
            <CCardHeader className="d-flex justify-content-between align-items-center px-4 py-3">
                <CContainer className="d-flex align-items-center">
                    {showYearSelect && (
                        <CFormSelect
                            className="bg-dawn-light text-white border-gray"
                            value={year}
                            onChange={onYearChange}
                            style={{ marginRight: "10px", width: "150px" }}
                        >
                            {years?.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                            ))}
                        </CFormSelect>
                    )}
                    <span>{title}</span>
                </CContainer>
                <CButton
                    color="primary"
                    className="bg-transparent border-0"
                    onClick={downloadChart}
                >
                    <CIcon icon={cilArrowThickToBottom} size="lg" />
                </CButton>
            </CCardHeader>
            <CCardBody className="pt-0 d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                <ChartComponent
                    data={chartData}
                    ref={chartRef}
                    style={{ height: "400px", width: "auto" }}
                    options={chartOptions}
                />
            </CCardBody>
        </CCard>
    );
};

export default ChartCard;
