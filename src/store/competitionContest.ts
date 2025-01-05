import {ChartData} from "chart.js";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface ChartState {
  participant: ChartData<'bar'>;
  departmentParticipant: Record<string, ChartData<'bar'>>;
  manpowerByCompetition: Record<string, ChartData<'pie'>>;
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

const manpowerByCompetition: Record<string, ChartData<'pie'>> = {
  '2024':{
    labels: ['인턴쉽', '캡스톤', '경진대회'],
    datasets: [{
      data: [15, 32, 15],
      backgroundColor: [ 
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(135, 206, 235, 0.6)',
      borderWidth: 2,
    }],
  },
  '2025':{
    labels: ['인턴쉽', '캡스톤', '경진대회'],
    datasets: [{
      data: [10, 12, 9],
      backgroundColor: [ 
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(135, 206, 235, 0.6)',
      borderWidth: 2,
    }],
  },
  '2026':{
    labels: ['인턴쉽', '캡스톤', '경진대회'],
    datasets: [{
      data: [15, 10, 15],
      backgroundColor: [ 
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(135, 206, 235, 0.6)',
      borderWidth: 2,
    }],
  },
  '2027':{
    labels: ['인턴쉽', '캡스톤', '경진대회'],
    datasets: [{
      data: [12, 12, 10],
      backgroundColor: [ 
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(135, 206, 235, 0.6)',
      borderWidth: 2,
    }],
  },
  '2028':{
    labels: ['인턴쉽', '캡스톤', '경진대회'],
    datasets: [{
      data: [15, 22, 10],
      backgroundColor: [ 
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(135, 206, 235, 0.6)',
      borderWidth: 2,
    }],
  },
  '2029':{
    labels: ['인턴쉽', '캡스톤', '경진대회'],
    datasets: [{
      data: [9, 14, 12],
      backgroundColor: [ 
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(135, 206, 235, 0.6)',
      borderWidth: 2,
    }],
  },

}

const useChartStore = create<ChartState>()(
  persist(
    (set) => ({
      participant,
      departmentParticipant,
      manpowerByCompetition,
      reset: () => set({
        participant,
        departmentParticipant,
        manpowerByCompetition,
      }),
    }),
    {name: "chartStorage"}
  )
);

export {useChartStore};