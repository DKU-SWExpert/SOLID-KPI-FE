import { CContainer } from "@coreui/react";
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
  ChartOptions,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";

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

interface ChartDataType {
  labels: string[];
  datasets: {
    type: "bar" | "line";
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    tension?: number;
    order?: number;
  }[];
}

interface DataTableProps {
  data: ChartDataType;
}
const options: ChartOptions<"bar" | "line"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 1500,
      ticks: {
        stepSize: 500,
        color: "white",
      },
      grid: {
        color: "#383C46",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        minRotation: 0,
        color: "white",
        padding: 10,
      },
    },
  },
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        title: (context) => {
          return context[0].label + "년";
        },
        label: (context) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y;
          }
          return label;
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: 10,
      titleColor: "white",
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyColor: "white",
      bodyFont: {
        size: 13,
      },
      borderColor: "transparent",
      borderWidth: 1,
    },
    legend: {
      display: false,
    },
    datalabels: {
      color: "white",
      align: "end",
      formatter: function (value) {
        return value + " 명";
      },
      font: {
        size: 12,
      },
    },
  },

  interaction: {
    mode: "index",
    intersect: false,
  },
};

const DataTable = ({ data }: DataTableProps) => (
  <div className="table-responsive mt-4">
    <table className="table table-dark">
      <thead>
        <tr>
          <th className="text-center bg-white text-dark"></th>
          {data.labels.map((year: string) => (
            <th key={year} className="text-center bg-white text-dark">
              {year}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left ">총 User 수</td>
          {data.datasets[1].data.map((value: number, index: number) => (
            <td key={index} className="text-center">
              {value}
            </td>
          ))}
        </tr>
        <tr>
          <td className="text-left">목표</td>
          {data.datasets[0].data.map((value: number, index: number) => (
            <td key={index} className="text-center">
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

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

  return (
    <CContainer fluid className="body flex-grow-1 px-4">
      <CContainer className="my-5">
        <CCol className="mt-4">
          <CCard
            className="bg-dark text-white border-gray"
            style={{ height: "auto" }}
          >
            <CCardHeader className="bg-dawn-light text-white">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Solid Cloud 활용 현황
              </div>
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
                <DataTable data={data} />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CContainer>
    </CContainer>
  );
};

export default SolidCloud;
