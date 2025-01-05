import React from "react";
import {useRef, useState} from "react";
import {CContainer} from "@coreui/react";
import {Bar} from "react-chartjs-2";
import {useChartStore} from "@store/industryAcademiaProject";
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
  Tooltip
} from "chart.js";

ChartJS.register(
  LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip,
  LineController, BarController, PieController, ArcElement, ChartDataLabels
);

const IndustryAcademiaProject = () => {

  const years = [2024, 2025, 2026, 2027, 2028, 2029];

  const participation_barChartRef = useRef<ChartJS<'bar'> | null>(null);
  const deptYear_participation_barChartRef = useRef<ChartJS<'bar'> | null>(null);

  const {participationRate, deptYear_participationRate} = useChartStore();

  const [deptYear_participationRateYear, setDeptYear_participationRateYear] = useState("2024");

  const handleDeptYear_participationRateYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeptYear_participationRateYear(event.target.value);
  }

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <ChartCard
        className="mb-5"
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
        title='학과별/년도별 산학 프로젝트 참여율'
        year={deptYear_participationRateYear}
        onYearChange= {handleDeptYear_participationRateYearChange}
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
                  anchor: 'end',
                  align: 'top',
                  formatter: (value) => `${value} %`,
                  color: 'white',
                  font: {size: 12},
              },
          },
        }}
      />
    </CContainer>
  );
};

export default IndustryAcademiaProject;