import React from "react";
import { CContainer } from "@coreui/react";
import ChartCard from "@/components/ChartCard";
import { Pie, Bar } from "react-chartjs-2";
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PieController,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  ArcElement,
  Legend,
  Tooltip,
  BarController,
  PieController,
  ChartDataLabels
);

const Award = () => {
  const years = [2024, 2025, 2026, 2027, 2028, 2029];

  const scholarshipDistribution = {
    labels: ["인턴십", "캡스톤", "경진대회", "봉사활동", "서포터즈", "Star Track"],
    datasets: [
      {
        data: [15, 32, 15, 12, 9, 9],
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderColor: "rgba(119, 189, 216, 0.6)",
        borderWidth: 2,
      },
    ],
  };

  const departmentyearScholarshipStatus = {
    labels: ["SW융합학부", "데이터사이언스", "모바일", "사이버보안", "소프트웨어", "컴퓨터공학"],
    datasets: [
      {
        label: "2024",
        data: [7, 9, 10, 11, 12, 11],
        backgroundColor: "rgba(93, 188, 226, 0.89)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const departmenttypeScholarshipStatus = {
    labels: ["SW융합학부", "데이터사이언스", "모바일", "사이버보안", "소프트웨어", "컴퓨터공학"],
    datasets: [
      {
        label: "2024",
        data: [7, 9, 10, 11, 12, 11],
        backgroundColor: "rgba(93, 188, 226, 0.89)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <ChartCard
        title="장학금 현황"
        year="2024"
        years={years}
        chartRef={React.createRef()}
        chartData={scholarshipDistribution}
        chartType={Pie}
        fileName="scholarship-distribution.png"
        chartOptions={{
          plugins: {
            legend: {
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 10,
                font: {
                  size: 12,
                },
                color: "#ffffff",
              },
            },
            datalabels: {
              color: "#fff",
              borderRadius: 4,
              padding: 6,
              font: {
                size: 12,
              },
              formatter: (value) => `${value}`,
            },
          },
        }}
      />

      <ChartCard
        title="학과별/년도별 장학금 수혜 인력"
        year="2024"
        years={years}
        chartRef={React.createRef()}
        chartData={departmentyearScholarshipStatus}
        chartType={Bar}
        fileName="department-year-scholarship-status.png"
        chartOptions={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 10,
                color: "#ffffff",
              },
            },
            datalabels: {
              align: 'end',
              anchor: 'end',
              color: '#fff',
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
                color: "#ffffff",
                font: {
                  size: 10,
                },
              },
            },
            x: {
              ticks: {
                color: "#ffffff",
                font: {
                  size: 10,
                },
              },
            },
          },
        }}
      />

<ChartCard
        title="학과별/종류별 장학금 수혜 인력"
        year="2024"
        years={years}
        chartRef={React.createRef()}
        chartData={departmenttypeScholarshipStatus}
        chartType={Bar}
        fileName="department-type-scholarship-status.png"
        chartOptions={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                boxWidth: 10,
                padding: 10,
                color: "#ffffff",
              },
            },
            datalabels: {
              align: 'end',
              anchor: 'end',
              color: '#fff',
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
                color: "#ffffff",
                font: {
                  size: 10,
                },
              },
            },
            x: {
              ticks: {
                color: "#ffffff",
                font: {
                  size: 10,
                },
              },
            },
          },
        }}
      />
    </CContainer>
    
  );
};

export default Award;
