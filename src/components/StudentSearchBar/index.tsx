import React from 'react';
import {CFormInput} from '@coreui/react';
import {useStudentStore} from '@/store/studentStore';

const StudentSearchBar: React.FC = () => {
    const {search, setSearch} = useStudentStore();

    return (
        <CFormInput
            className="bg-dawn-light text-white border-gray gray-placeholder"
            placeholder="학생 이름을 입력해주세요..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default StudentSearchBar;
