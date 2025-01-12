// useManagerStore.ts

import { create } from 'zustand';

// 1) 관리자 개별 항목 타입
export interface ManagerItem {
  id: number;
  name: string;
  phone: string;       // 예) "010-1234-5678"
  email: string;
  department: string;
}

// 2) Store 인터페이스
interface ManagerStore {
  managers: ManagerItem[];  // 관리자 목록
  search: string;           // 검색어

  // 검색어 설정
  setSearch: (search: string) => void;

  // 새 관리자 추가
  addManager: (newItem: ManagerItem) => void;
}

// 3) zustand 스토어 생성
export const useManagerStore = create<ManagerStore>((set) => ({
  // 초기 데이터
  managers: [
    { id: 25, name: '홍길동', phone: '010-1234-1234', email: 'manager@dku.ac.kr', department: '학교 본부' },
    { id: 24, name: '홍길동', phone: '010-1234-1234', email: 'manager@dku.ac.kr', department: '학교 본부' },
    // ... 필요에 따라 추가
  ],

  search: '',

  // 검색어 업데이트
  setSearch: (search: string) => {
    set({ search });
  },

  // 관리자 추가
  addManager: (newItem: ManagerItem) => {
    set((state) => ({
      managers: [newItem, ...state.managers],
    }));
  },
}));
