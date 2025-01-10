import React from "react";
import { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useChartStore } from "@store/industryAcademiaProject";
import ChartCard from "@/components/ChartCard";
import ChartDataLabels from "chartjs-plugin-datalabels";
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
  Tooltip,
} from "chart.js";
import {
  CCard,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CContainer,
  CTableDataCell,
  CTableHeaderCell,
} from "@coreui/react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  PieController,
  ArcElement,
  ChartDataLabels
);

const IndustryAcademiaProject = () => {
  const years = [2024, 2025, 2026, 2027, 2028, 2029];

  const participation_barChartRef = useRef<ChartJS<"bar"> | null>(null);
  const deptYear_participation_barChartRef = useRef<ChartJS<"bar"> | null>(
    null
  );

  const { participationRate, deptYear_participationRate } = useChartStore();

  const [deptYear_participationRateYear, setDeptYear_participationRateYear] =
    useState("2024");

  const handleDeptYear_participationRateYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDeptYear_participationRateYear(event.target.value);
  };

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <ChartCard
        title="참여율 현황"
        chartRef={participation_barChartRef}
        chartData={participationRate}
        chartType={Bar}
        fileName="industry-academia-project-participation-rate.png"
        chartOptions={{
          scales: {
            y: {
              max: 100, // y축 최대값을 100로 설정
            },
          },
          plugins: {
            datalabels: {
              display: (ctx) => ctx.datasetIndex === 1,
              anchor: "end",
              align: "top",
              formatter: (value) => `${value}%`,
              color: "white",
              font: { size: 12 },
            },
          },
        }}
        showYearSelect={false}
      />
      <CCard
        className="bg-dark border-gray mb-5 px-4 py-2"
        style={{ borderRadius: "0.75rem" }}
      >
        <CTable className="table-dark text-white text-center border-gray">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              {participationRate.labels &&
                participationRate.labels.map((value, index) => (
                  <CTableHeaderCell key={index}>
                    {String(value)}
                  </CTableHeaderCell>
                ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell>참여율</CTableHeaderCell>
              {participationRate.datasets[0].data.map((value, index) => (
                <CTableDataCell key={index}>{String(value)}</CTableDataCell>
              ))}
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell>목표</CTableHeaderCell>
              {participationRate.datasets[1].data.map((value, index) => (
                <CTableDataCell key={index}>{String(value)}</CTableDataCell>
              ))}
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCard>
      <ChartCard
        className="mb-5"
        title="학과별/년도별 산학 프로젝트 참여율"
        year={deptYear_participationRateYear}
        onYearChange={handleDeptYear_participationRateYearChange}
        years={years}
        chartRef={deptYear_participation_barChartRef}
        chartData={deptYear_participationRate[deptYear_participationRateYear]}
        chartType={Bar}
        fileName="dept&year-industry-academia-project-participation-rate.png"
        chartOptions={{
          scales: {
            y: {
              max: 16, // y축 최대값을 16로 설정
            },
          },
          plugins: {
            datalabels: {
              anchor: "end",
              align: "top",
              formatter: (value) => `${value} %`,
              color: "white",
              font: { size: 12 },
            },
          },
        }}
      />
    </CContainer>
  );
};

export default IndustryAcademiaProject;
