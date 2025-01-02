import { persist } from "zustand/middleware";
import { create } from "zustand";
import { ChartData } from "chart.js";

type ChartType = 'bar' | 'line';

interface ChartState {
    data: ChartData<ChartType>;
    reset: () => void;
}

const initialChartData: ChartData<'bar' | 'line'> = {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
    datasets: [
        {
            type: 'bar' as const,
            label: '인턴십 이수율',
            backgroundColor: 'rgba(135, 206, 235, 0.6)',
            borderColor: 'rgba(135, 206, 235, 0.6)',
            data: [25, 40, 15, 50, 30, 45],
        },
        {
            type: 'line' as const,
            label: '목표',
            borderColor: 'rgba(255, 165, 0, 1)',
            data: [50, 35, 25, 55, 40, 60],
        },
    ],
};

const useChartStore = create<ChartState>()(
    persist(
        (set) => ({
            data: initialChartData,
            reset: () => set({ data: initialChartData }),
        }),
        {
            name: "chart-storage",
        }
    )
);

export { useChartStore };
