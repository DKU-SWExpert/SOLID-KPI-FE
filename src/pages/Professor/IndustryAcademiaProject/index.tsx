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

  const barChartRef = useRef<ChartJS<'bar'> | null>(null);

  const {participationRate} = useChartStore();

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <ChartCard
        className="mb-5"
        title="참여율 현황"
        chartRef={barChartRef}
        chartData={participationRate}
        chartType={Bar}
        fileName="industry_academia_project_participation_rate.png"
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
    </CContainer>
  )

};

export default IndustryAcademiaProject;