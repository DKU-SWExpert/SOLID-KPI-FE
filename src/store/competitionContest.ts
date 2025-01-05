import {ChartData} from "chart.js";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface ChartState {
  participant: ChartData<'bar'>;
  departmentParticipant: Record<string, ChartData<'bar'>>;
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

const departmentParticipant: Record<string, ChartData<'bar'>> = {
  '2024': {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
      {label: '단체', data: [9, 3, 9, 0, 8, 8], backgroundColor: 'rgba(54, 162, 235, 0.6)'},
      {label: '개인', data: [1, 1, 1, 1, 3, 1], backgroundColor: 'rgba(255, 159, 64, 0.6)'},
      {label: '종합', data: [10, 4, 10, 1, 11, 9], backgroundColor: 'rgba(75, 192, 192, 0.6)'}
    ]
  },
  '2025': {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
      {label: '단체', data: [1, 1, 1, 1, 1, 1], backgroundColor: 'rgba(54, 162, 235, 0.6)'},
      {label: '개인', data: [1, 1, 1, 1, 1, 1], backgroundColor: 'rgba(255, 159, 64, 0.6)'},
      {label: '종합', data: [2, 2, 2, 2, 2, 2], backgroundColor: 'rgba(75, 192, 192, 0.6)'}
    ]
  },
  '2026': {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
      {label: '단체', data: [1, 1, 1, 1, 1, 1], backgroundColor: 'rgba(54, 162, 235, 0.6)'},
      {label: '개인', data: [1, 1, 1, 1, 1, 2], backgroundColor: 'rgba(255, 159, 64, 0.6)'},
      {label: '종합', data: [2, 2, 2, 2, 2, 3], backgroundColor: 'rgba(75, 192, 192, 0.6)'}
    ]
  },
  '2027': {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
      {label: '단체', data: [1, 1, 1, 1, 1, 1], backgroundColor: 'rgba(54, 162, 235, 0.6)'},
      {label: '개인', data: [1, 1, 1, 1, 1, 3], backgroundColor: 'rgba(255, 159, 64, 0.6)'},
      {label: '종합', data: [2, 2, 2, 2, 2, 4], backgroundColor: 'rgba(75, 192, 192, 0.6)'}
    ]
  },
  '2028': {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
      {label: '단체', data: [1, 1, 1, 1, 1, 1], backgroundColor: 'rgba(54, 162, 235, 0.6)'},
      {label: '개인', data: [1, 1, 1, 1, 1, 4], backgroundColor: 'rgba(255, 159, 64, 0.6)'},
      {label: '종합', data: [2, 2, 2, 2, 2, 5], backgroundColor: 'rgba(75, 192, 192, 0.6)'}
    ]
  },
  '2029': {
    labels: ['SW융합학부', '데이터사이언스', '모바일', '사이버보안', '소프트웨어', '컴퓨터공학'],
    datasets: [
      {label: '단체', data: [1, 1, 1, 1, 1, 1], backgroundColor: 'rgba(54, 162, 235, 0.6)'},
      {label: '개인', data: [1, 1, 1, 1, 1, 5], backgroundColor: 'rgba(255, 159, 64, 0.6)'},
      {label: '종합', data: [2, 2, 2, 2, 2, 6], backgroundColor: 'rgba(75, 192, 192, 0.6)'}
    ]
  },


}

const useChartStore = create<ChartState>()(
  persist(
    (set) => ({
      participant,
      departmentParticipant,
      reset: () => set({
        participant,
        departmentParticipant,
      }),
    }),
    {name: "chartStorage"}
  )
);

export {useChartStore};