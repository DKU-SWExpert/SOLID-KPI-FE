import React from "react";
import {useRef, useState} from "react";
import {CContainer} from "@coreui/react";
import {Bar, Pie} from "react-chartjs-2";
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
  const pieChartRef = useRef<ChartJS<'pie'> | null>(null);

  const {participant, departmentParticipant, manpowerByCompetition} = useChartStore();

  const [departmentParticipantYear, setDepartmentParticipantYear] = useState("2024");
  const [manpowerByCompetitionYear, setManpowerByCompetitionYear] = useState("2024");

  const handleDepartmentParticipantYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartmentParticipantYear(event.target.value);
  }
  const handleManpowerByCompetitionYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setManpowerByCompetitionYear(event.target.value);
  }

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
              formatter: (value) => value !== 0 ? `${value} 명` : '',
              color: 'white',
              font: {size: 12},
            },
          },
        }}
        showYearSelect={false}
        />

      <ChartCard
        className="mb-5"
        title='학과별 경진대회 참여자'
        year={departmentParticipantYear}
        onYearChange= {handleDepartmentParticipantYearChange}
        years={years}
        chartRef={barChartRef}
        chartData={departmentParticipant[departmentParticipantYear]}
        chartType={Bar}
        fileName="department-competition-contest-participant.png"
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
                  formatter: (value) => `${value} 명`,
                  color: 'white',
                  font: {size: 12},
              },
          },
      }}
      />

      <ChartCard
                title="대회별 인력"
                year={manpowerByCompetitionYear}
                onYearChange={handleManpowerByCompetitionYearChange}
                years={years}
                chartRef={pieChartRef}
                chartData={manpowerByCompetition[manpowerByCompetitionYear]}
                chartType={Pie}
                fileName="manpower-by-competition.png"
                chartOptions={{
                    plugins: {
                        datalabels: {
                            anchor: 'center',
                            align: 'center',
                            formatter: (value) => value !== 0 ? `${value} 명` : '',
                            color: 'white',
                            font: {size: 12},
                        },
                    },
                }}
            />
    </CContainer>
  );
};

export default CompetitionContest;