import { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CCard, CCardBody, CCardHeader, CCol, CButton } from "@coreui/react";
import { cilArrowThickToBottom } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import html2canvas from "html2canvas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["1학년", "2학년", "3학년", "4학년"],
  datasets: [
    {
      data: [12, 9, 19, 19],
      backgroundColor: [
        "#4B89DC", // 파란색
        "#DA4453", // 빨간색
        "#37BC9B", // 초록색
        "#967ADC", // 보라색
      ],
      borderWidth: 0,
    },
  ],
};

interface MultiBarChartProps {
  title: string;
  options: any;
}

const MultiBarChart = ({ title, options }: MultiBarChartProps) => {
  const years = [2024, 2025, 2026, 2027, 2028, 2029];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const chartRef = useRef<HTMLDivElement>(null);

  const downloadChart = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const link = document.createElement("a");
      link.download = `download.jpg`;
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    }
  };

  return (
    <>
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
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <span style={{ fontSize: "1.2rem", color: "#fff" }}>
                  {title}
                </span>
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
            <CCard
              className={`bg-dark text-white border-gray mb-5`}
              style={{ width: "100%", maxWidth: "1200px" }}
            >
              <CCardBody
                className="bg-dawn pt-0 d-flex justify-content-center align-items-center border-none"
                style={{ height: "500px" }}
              >
                <Bar data={data} options={options} />
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default MultiBarChart;
