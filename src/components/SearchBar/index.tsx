import React from 'react';
import {CFormInput} from '@coreui/react';
import {useFileStore} from '@/store/fileStore';

const SearchBar: React.FC = () => {
    const {search, setSearch} = useFileStore();

    return (
        <CFormInput
            className="bg-dawn-light text-white border-gray gray-placeholder"
            placeholder="이름을 입력해주세요..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default SearchBar;
