import {create} from 'zustand';

interface FileData {
    id: number;
    name: string;
    fileName: string;
    size: string;
}

interface FileStore {
    data: FileData[];
    search: string;
    setSearch: (search: string) => void;
}

export const useFileStore = create<FileStore>((set) => ({
    data: [
        {id: 25, name: '인턴십 이력서', fileName: '인턴십_이력서.hwp', size: '512,234'},
        {id: 24, name: '인턴십 결과보고서', fileName: '인턴십_결과보고서.hwp', size: '512,234'},
        {id: 23, name: 'TOPCIT 신청서', fileName: 'topcit_신청서.hwp', size: '512,234'},
        {id: 22, name: 'SW Expert 수행평가서', fileName: 'SW Expert_수행평가서.hwp', size: '512,234'},
        {id: 21, name: 'SW서포터즈 수행평가서', fileName: 'SW서포터즈_수행평가서.hwp', size: '512,234'},
        {id: 20, name: '지도교수 추천서', fileName: '지도교수_추천서.hwp', size: '512,234'},
        {id: 19, name: '재학증명서', fileName: '재학증명서.hwp', size: '512,234'},
        {id: 18, name: 'TOPCIT 성적증명서', fileName: 'TOPCIT_성적증명서.hwp', size: '512,234'},
        {id: 17, name: '지도교수 추천서', fileName: '지도교수_추천서.hwp', size: '512,234'},
    ],
    search: '',
    setSearch: (search) => set({search}),
}));
