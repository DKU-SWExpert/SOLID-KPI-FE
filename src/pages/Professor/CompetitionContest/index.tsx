import React from "react";
import {useRef, useState} from "react";
import {CContainer} from "@coreui/react";
import {Bar} from "react-chartjs-2";
import {useChartStore} from "@store/competitionContest";
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

const CompetitionContest = () => {
  const years = [2024,2025,2026,2027,2028,2029];

  const barChartRef = useRef<ChartJS<'bar'> | null>(null);

  const {participant} = useChartStore();

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <ChartCard
        className="mb-5"
        title="경진대회 참여자"
        chartRef={barChartRef}
        chartData={participant}
        chartType={Bar}
        fileName="competition-contest-participant.png"
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
        showYearSelect={false}
        />
    </CContainer>
  );
};

export default CompetitionContest;