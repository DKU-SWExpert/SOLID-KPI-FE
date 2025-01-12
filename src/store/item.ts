import { create } from "zustand";

interface ItemData {
  id: number;
  name: string;
}

interface ItemStore {
  data: ItemData[];
  search: string;
  setSearch: (search: string) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  data: [
    { id: 25, name: "Solid Cloud" },
    { id: 24, name: "인턴십" },
    { id: 23, name: "경진대회" },
    { id: 22, name: "장학금" },
    { id: 21, name: "SW 역량 테스트" },
    { id: 20, name: "SW 정원 비율" },
    { id: 19, name: "교원 1인당 학생수" },
    { id: 18, name: "산학협력 프로젝트 참여률" },
  ],
  search: "",
  setSearch: (search) => set({ search }),
}));
