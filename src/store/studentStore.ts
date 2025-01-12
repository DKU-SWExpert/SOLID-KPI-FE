import {create} from 'zustand';

interface StudentData {
    id: number;
    studentId: string;
    name: string;
    grade: string;
    major: string;
}

interface StudentStore {
    data: StudentData[];
    search: string;
    setSearch: (search: string) => void;
}

export const useStudentStore = create<StudentStore>((set) => ({
    data: [
        {id: 25, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 24, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 23, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 22, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 21, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 20, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 19, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 18, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 17, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 15, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 14, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 13, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 12, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 11, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
        {id: 10, studentId: '011234567', name: '홍길동', grade: '4학년', major: '소프트웨어학과'},
    ],
    search: '',
    setSearch: (search) => set({search}),
}));
