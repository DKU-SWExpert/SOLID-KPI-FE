import {persist} from "zustand/middleware";
import {create} from "zustand";
import {ChartData} from "chart.js";

interface ChartState {
  participationRate: ChartData<'bar' | 'line'>;
  reset: () => void;
}

const participationRate: ChartData<'bar' | 'line'> = {
  labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
  datasets: [
    {
        label: '참여율',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgb(135,182,235)',
        data: [10,15,30,45,60,80],
        type: 'bar',
    },
    {
        label: '목표',
        borderColor: 'rgba(255, 165, 0, 1)',
        data: [25, 35, 45, 60, 70, 90],
        type: 'line',
    },
],
}

const useChartStore = create<ChartState>()(
  persist(
      (set) => ({
          participationRate,
          reset: () => set({
            participationRate,
          }),
      }),
      {name: "chart-storage"}
  )
);

export {useChartStore};

