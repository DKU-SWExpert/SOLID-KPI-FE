import React from 'react';
import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,} from '@coreui/react';
import {useFileStore} from '@/store/fileStore';

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
                        <CTableDataCell>{item.id}</CTableDataCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.fileName}</CTableDataCell>
                        <CTableDataCell>{item.size}</CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
        </CTable>
    );
};

export default FileTable;
