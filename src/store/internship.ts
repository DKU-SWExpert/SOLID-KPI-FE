import {persist} from "zustand/middleware";
import {create} from "zustand";
import {ChartData} from "chart.js";

interface ChartState {
    internshipCompletion: ChartData<'bar' | 'line'>;
    departmentInternshipStatus: Record<string, ChartData<'bar'>>;
    internshipStatusByType: Record<string, ChartData<'pie'>>;
    reset: () => void;
}

const internshipCompletion: ChartData<'bar' | 'line'> = {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
    datasets: [
        {
            label: '실적',
            backgroundColor: 'rgba(135,170,235,0.6)',
            borderColor: 'rgb(135,182,235)',
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

const departmentInternshipStatus: Record<string, ChartData<'bar'>> = {
    '2024': {
        labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
        datasets: [
            {label: '대학', data: [0, 0, 1, 1, 1, 0], backgroundColor: 'rgba(54, 162, 235, 0.6)', stack: 'Stack 0'},
            {label: '업체 1', data: [0, 0, 0, 0, 1, 2], backgroundColor: 'rgba(255, 99, 132, 0.6)', stack: 'Stack 0'},
            {label: '업체 2', data: [1, 1, 2, 0, 2, 2], backgroundColor: 'rgba(75, 192, 192, 0.6)', stack: 'Stack 0'},
            {label: '업체 3', data: [2, 2, 1, 2, 0, 2], backgroundColor: 'rgba(255, 159, 64, 0.6)', stack: 'Stack 0'},
        ],
    },
    '2025': {
        labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
        datasets: [
            {label: '대학', data: [], backgroundColor: 'rgba(54, 162, 235, 0.6)', stack: 'Stack 0'},
            {label: '업체 1', data: [], backgroundColor: 'rgba(255, 99, 132, 0.6)', stack: 'Stack 0'},
            {label: '업체 2', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)', stack: 'Stack 0'},
            {label: '업체 3', data: [], backgroundColor: 'rgba(255, 159, 64, 0.6)', stack: 'Stack 0'},
        ],
    },
    '2026': {
        labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
        datasets: [
            {label: '대학', data: [], backgroundColor: 'rgba(54, 162, 235, 0.6)', stack: 'Stack 0'},
            {label: '업체 1', data: [], backgroundColor: 'rgba(255, 99, 132, 0.6)', stack: 'Stack 0'},
            {label: '업체 2', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)', stack: 'Stack 0'},
            {label: '업체 3', data: [], backgroundColor: 'rgba(255, 159, 64, 0.6)', stack: 'Stack 0'},
        ],
    },
    '2027': {
        labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
        datasets: [
            {label: '대학', data: [], backgroundColor: 'rgba(54, 162, 235, 0.6)', stack: 'Stack 0'},
            {label: '업체 1', data: [], backgroundColor: 'rgba(255, 99, 132, 0.6)', stack: 'Stack 0'},
            {label: '업체 2', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)', stack: 'Stack 0'},
            {label: '업체 3', data: [], backgroundColor: 'rgba(255, 159, 64, 0.6)', stack: 'Stack 0'},
        ],
    },
    '2028': {
        labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
        datasets: [
            {label: '대학', data: [], backgroundColor: 'rgba(54, 162, 235, 0.6)', stack: 'Stack 0'},
            {label: '업체 1', data: [], backgroundColor: 'rgba(255, 99, 132, 0.6)', stack: 'Stack 0'},
            {label: '업체 2', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)', stack: 'Stack 0'},
            {label: '업체 3', data: [], backgroundColor: 'rgba(255, 159, 64, 0.6)', stack: 'Stack 0'},
        ],
    },
    '2029': {
        labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
        datasets: [
            {label: '대학', data: [], backgroundColor: 'rgba(54, 162, 235, 0.6)', stack: 'Stack 0'},
            {label: '업체 1', data: [], backgroundColor: 'rgba(255, 99, 132, 0.6)', stack: 'Stack 0'},
            {label: '업체 2', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)', stack: 'Stack 0'},
            {label: '업체 3', data: [], backgroundColor: 'rgba(255, 159, 64, 0.6)', stack: 'Stack 0'},
        ],
    },
};

const internshipStatusByType: Record<string, ChartData<'pie'>> = {
    '2024': {
        labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
        datasets: [{
            data: [30, 48, 13, 9],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(135, 206, 235, 0.6)',
            borderWidth: 2,
        }],
    },
    '2025': {
        labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(135, 206, 235, 0.6)',
            borderWidth: 2,
        }],
    },
    '2026': {
        labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(135, 206, 235, 0.6)',
            borderWidth: 2,
        }],
    },
    '2027': {
        labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(135, 206, 235, 0.6)',
            borderWidth: 2,
        }],
    },
    '2028': {
        labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(135, 206, 235, 0.6)',
            borderWidth: 2,
        }],
    },
    '2029': {
        labels: ['인턴십 장기', '인턴십 단기', '랩 인턴', '글로벌 인턴'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgba(135, 206, 235, 0.6)',
            borderWidth: 2,
        }],
    },
};

const useChartStore = create<ChartState>()(
    persist(
        (set) => ({
            internshipCompletion,
            departmentInternshipStatus,
            internshipStatusByType,
            reset: () => set({
                internshipCompletion,
                departmentInternshipStatus,
                internshipStatusByType,
            }),
        }),
        {name: "chart-storage"}
    )
);

export {useChartStore};
