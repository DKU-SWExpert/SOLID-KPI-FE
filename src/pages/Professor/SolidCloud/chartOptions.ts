import { ChartOptions } from "chart.js";
export const options: ChartOptions<"bar" | "line"> = {
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
