import {ChartData} from "chart.js";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface ChartState {
  participant: ChartData<'bar'>;
  
  reset: () => void;
}


const participant : ChartData<'bar'> = {
  labels: ['2023','2024','총계'],
  datasets: [ 
    { label: '팀(인원)', 
      data: [0, 9, 9],
      backgroundColor:'rgba(54, 162, 235, 0.6)',
      stack:'Stack 0'
    },
    { label: '개인',
      data: [3, 3, 6],
      backgroundColor:'rgba(255, 99, 132, 0.6)',
      stack:'Stack 0'
    },
  ],
};

const useChartStore = create<ChartState>()(
  persist(
    (set) => ({
      participant,
      reset: () => set({
        participant,
      }),
    }),
    {name: "chartStorage"}
  )
);

export {useChartStore};