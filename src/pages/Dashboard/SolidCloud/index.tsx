import { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CContainer,
} from "@coreui/react";
import { cilArrowThickToBottom } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import html2canvas from "html2canvas";
import { ChartDataType, ChartCardProps, ChartData } from "./types";
import { options } from "./chartOptions";
import SolidCloudUsage from "./SolidCloudUsage";
import MultiBarChart from "./MultiBarTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const GRADE_COLORS = {
  FIRST: {
    background: "rgba(255, 99, 132, 0.6)",
    border: "rgba(255, 99, 132, 1)",
  },
  SECOND: {
    background: "rgba(54, 162, 235, 0.6)",
    border: "rgba(54, 162, 235, 1)",
  },
  THIRD: {
    background: "rgba(255, 206, 86, 0.6)",
    border: "rgba(255, 206, 86, 1)",
  },
  FOURTH: {
    background: "rgba(75, 192, 192, 0.6)",
    border: "rgba(75, 192, 192, 1)",
  },
};

const generateChartData = (title: string, year: number): ChartData => {
  const randomData = (length: number, max: number) =>
    Array.from({ length }, () => Math.floor(Math.random() * max));
  switch (title) {
    case "학과별 User 수":
      return {
        labels: [
          "SW 융합학부",
          "데이터사이언스",
          "모바일",
          "사이버보안",
          "소프트웨어",
          "컴퓨터공학",
        ],
        datasets: [
          {
            label: `${year}`,
            backgroundColor: "rgba(47, 137, 252, 0.6)",
            borderColor: "#2f89fc",
            borderWidth: 1,
            data: randomData(6, 13),
          },
        ],
      };
    case "학년별 계정수":
      return {
        labels: ["1학년", "2학년", "3학년", "4학년"],
        datasets: [
          {
            backgroundColor: [
              GRADE_COLORS.FIRST.background,
              GRADE_COLORS.SECOND.background,
              GRADE_COLORS.THIRD.background,
              GRADE_COLORS.FOURTH.background,
            ],
            borderColor: [
              GRADE_COLORS.FIRST.border,
              GRADE_COLORS.SECOND.border,
              GRADE_COLORS.THIRD.border,
              GRADE_COLORS.FOURTH.border,
            ],
            borderWidth: 1,
            data: randomData(4, 20),
          },
        ],
      };

    default:
      return null;
  }
};

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
        label: (tooltipItem: any) => {
          const label = tooltipItem.dataset.label || "";
          const value = tooltipItem.raw;
          return `${label}: ${value}명`;
        },
      },
    },
    datalabels: {
      color: "#fff",
      font: {
        size: 12,
      },
      anchor: "end",
      align: "end",
      formatter: (value: number) => `${value}명`,
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

const ChartCard = ({
  years,
  title,
  initialData,
  chartOptions,
}: ChartCardProps) => {
  const [chartData, setChartData] = useState<ChartData>(initialData);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const chartRef = useRef<HTMLDivElement>(null);

  const updateChartData = (year: number) => {
    setChartData(generateChartData(title, year));
    setSelectedYear(year);
  };

  const downloadChart = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const link = document.createElement("a");
      link.download = `${title}-${selectedYear}.jpg`;
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    }
  };

  return (
    <CCol className="mt-4">
      <CCard
        className="bg-dark text-white border-gray"
        style={{ height: "550px" }}
      >
        <CCardHeader className="bg-dawn-light text-white">
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
                value={selectedYear}
                onChange={(e) => updateChartData(Number(e.target.value))}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <span style={{ fontSize: "1.2rem", color: "#fff" }}>{title}</span>
            </div>
            <CButton
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
              onClick={downloadChart}
            >
              <CIcon icon={cilArrowThickToBottom} size="lg" />
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody className="bg-dawn">
          <div style={{ height: "450px" }} ref={chartRef}>
            {chartData ? (
              <Bar
                key={`${title}-${selectedYear}`}
                data={chartData}
                options={chartOptions}
              />
            ) : (
              <p style={{ color: "#fff" }}>데이터를 불러올 수 없습니다.</p>
            )}
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

const SolidCloud = () => {
  const data: ChartDataType = {
    labels: ["2024", "2025", "2026", "2027", "2028", "2029"],
    datasets: [
      {
        type: "line",
        label: "목표",
        data: [0, 250, 500, 750, 1000, 1000],
        borderColor: "rgb(255, 159, 64)",
        borderWidth: 2,
        tension: 0.4,
        order: 2,
      },
      {
        type: "bar",
        label: "총 User 수",
        data: [60, 200, 400, 800, 1100, 1100],
        backgroundColor: "rgba(53, 162, 235, 0.8)",
        order: 1,
      },
    ],
  };
  const years = [2024, 2025, 2026, 2027, 2028, 2029];

  return (
    <CContainer fluid className="flex-grow-1 px-4 body mt-5 mb-5">
      <CCard
        className="bg-dark text-white border-gray"
        style={{ width: "100%", maxWidth: "1200px" }}
      >
        <CCardHeader className="bg-dawn-light text-white">
          <span style={{ fontSize: "1.2rem", color: "#fff" }}>
            Solid Cloud 활용 현황
          </span>
        </CCardHeader>
        <CCardBody className="bg-dawn">
          <div
            style={{
              position: "relative",
              height: "50vh",
              minHeight: "300px",
            }}
          >
            <Chart type="bar" data={data} options={options} />
          </div>
          <div className="table-responsive mt-4">
            <SolidCloudUsage data={data} />
          </div>
        </CCardBody>
      </CCard>
      <ChartCard
        key="학과별 User 수"
        years={years}
        title="학과별 User 수"
        initialData={generateChartData("학과별 User 수", years[0])}
        chartOptions={createBaseChartOptions(5, 15)}
      />

      <MultiBarChart
        title="학년별 계정수"
        options={{
          responsive: true,
          plugins: {
            datalabels: {
              display: false,
            },
            legend: {
              display: true,
              labels: {
                generateLabels: (chart: any) => {
                  const datasets = chart.data.datasets[0];
                  return chart.data.labels.map((label: string, i: number) => ({
                    text: `${label} ${datasets.data[i]}명`,
                    fillStyle: datasets.backgroundColor[i],
                    hidden: false,
                    index: i,
                  }));
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#fff",
              },
            },
            x: {
              ticks: {
                color: "#fff",
              },
            },
          },
        }}
      />
    </CContainer>
  );
};

export default SolidCloud;
