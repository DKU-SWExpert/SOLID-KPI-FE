import React from 'react';
import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,} from '@coreui/react';
import {useFileStore} from '@/store/fileStore';
import "@styles/custom-color.css";

interface FileTableProps {
    currentPage: number;
    itemsPerPage: number;
}

const FileTable: React.FC<FileTableProps> = ({currentPage, itemsPerPage}) => {
    const {data, search} = useFileStore();

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const currentItems = filteredData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <CTable striped hover>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell>번호</CTableHeaderCell>
                    <CTableHeaderCell>이름</CTableHeaderCell>
                    <CTableHeaderCell>파일명</CTableHeaderCell>
                    <CTableHeaderCell>사이즈</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {currentItems.map((item) => (
                    <CTableRow key={item.id}>
                        <CTableDataCell className="bg-dawn-light text-white border-gray">{item.id}</CTableDataCell>
                        <CTableDataCell className="bg-dawn-light text-white border-gray">{item.name}</CTableDataCell>
                        <CTableDataCell className="bg-dawn-light text-white border-gray">{item.fileName}</CTableDataCell>
                        <CTableDataCell className="bg-dawn-light text-white border-gray">{item.size}</CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
        </CTable>
    );
};

export default FileTable;
