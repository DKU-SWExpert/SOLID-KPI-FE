import {persist} from "zustand/middleware";
import {create} from "zustand";
import {ChartData} from "chart.js";

interface ChartState {
    internshipCompletion: ChartData<'bar' | 'line'>;
    departmentInternshipStatus: ChartData<'bar'>;
    internshipStatusByType: ChartData<'pie'>;
    reset: () => void;
}

const internshipCompletion: ChartData<'bar' | 'line'> = {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
    datasets: [
        {
            label: '실적',
            backgroundColor: 'rgba(135, 206, 235, 0.6)',
            borderColor: 'rgba(135, 206, 235, 0.6)',
            data: [4.3],
            type: 'bar',
        },
        {
            label: '목표',
            borderColor: 'rgba(255, 165, 0, 1)',
            data: [4.1, 5.6, 7.1, 8.6, 10.1, 11.6],
            type: 'line',
        },
    ],
};

const departmentInternshipStatus: ChartData<'bar'> = {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
        {label: '대학', data: [0, 0, 1, 1, 1, 0], backgroundColor: '#36A2EB', stack: 'Stack 0'},
        {label: '입체 1', data: [0, 0, 0, 0, 1, 2], backgroundColor: '#FF6384', stack: 'Stack 0'},
        {label: '입체 2', data: [1, 1, 2, 0, 2, 2], backgroundColor: '#4BC0C0', stack: 'Stack 0'},
        {label: '입체 3', data: [2, 2, 1, 2, 0, 2], backgroundColor: '#FFB74D', stack: 'Stack 0'},
    ],
};

const internshipStatusByType: ChartData<'pie'> = {
    labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
    datasets: [{data: [30, 48, 13, 9], backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0', '#FFB74D']}],
};

const useChartStore = create<ChartState>()(
    persist(
        (set) => ({
            internshipCompletion: internshipCompletion,
            departmentInternshipStatus: departmentInternshipStatus,
            internshipStatusByType: internshipStatusByType,
            reset: () => set({
                internshipCompletion: internshipCompletion,
                departmentInternshipStatus: departmentInternshipStatus,
                internshipStatusByType: internshipStatusByType,
            }),
        }),
        {
            name: "chart-storage",
        }
    )
);

export {useChartStore};
