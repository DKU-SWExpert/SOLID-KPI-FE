import React from "react";
import { CContainer, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import ChartCard from "@/components/ChartCard";
import { Bar } from "react-chartjs-2";
import {
  ChartData,
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  BarController,
  Title,
  ChartDataLabels
);

const NumOfStudent = () => {
  const years = [2024, 2025, 2026, 2027, 2028, 2029];

  // 차트 데이터
  const teacherPerStudentData: ChartData<"bar" | "line"> = {
    labels: years,
    datasets: [
      {
        label: "총 User 수",
        data: [23, 28, 32, 33, 35, 38],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        type: "bar",
      },
      {
        label: "목표",
        data: [28, 28, 29, 30, 31, 32],
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 2,
        type: "line",
        fill: false,
      },
    ],
  };

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <ChartCard
        title="교원 1인당 학생수 현황"
        chartRef={React.createRef()}
        chartData={teacherPerStudentData}
        chartType={Bar}
        fileName="teacher-per-student.png"
        chartOptions={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 10,
                color: "#ffffff", // 글씨 색상 흰색으로 변경
              },
            },
            datalabels: {
              color: "#ffffff",
              align: "end",
              anchor: "end",
              font: {
                size: 12,
              },
              formatter: (value) => `${value}명`,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#ffffff", // Y축 글씨 흰색으로 변경
                font: {
                  size: 10,
                },
              },
            },
            x: {
              ticks: {
                color: "#ffffff", // X축 글씨 흰색으로 변경
                font: {
                  size: 10,
                },
              },
            },
          },
        }}
        showYearSelect={false}
      />

      {/* 연도별 학생 수 및 목표 수치를 표 형태로 추가 */}
      <CTable className="mt-4" hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>연도</CTableHeaderCell>
            {years.map((year) => (
              <CTableHeaderCell key={year}>{year}</CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
        <CTableRow>
  <CTableDataCell>학생 수</CTableDataCell>
  {teacherPerStudentData.datasets[0].data.map((value, index) => (
    <CTableDataCell key={index}>
      {typeof value === 'number' ? `${value}명` : 'N/A'}
    </CTableDataCell>
  ))}
</CTableRow>

<CTableRow>
  <CTableDataCell>목표</CTableDataCell>
  {teacherPerStudentData.datasets[1].data.map((value, index) => (
    <CTableDataCell key={index}>
      {typeof value === 'number' ? `${value}명` : 'N/A'}
    </CTableDataCell>
  ))}
</CTableRow>

        </CTableBody>
      </CTable>
    </CContainer>
  );
};

export default NumOfStudent;
