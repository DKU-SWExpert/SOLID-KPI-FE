// ManagerTable.tsx

import React from 'react';
import { useManagerStore } from '@/store/useManagerStore';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react';

interface Props {
  currentPage: number;
  itemsPerPage: number;
}

const ManagerTable: React.FC<Props> = ({ currentPage, itemsPerPage }) => {
  const { managers, search } = useManagerStore();

  // 검색필터
  const filteredData = managers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 페이지네이션
  const startIndex = currentPage * itemsPerPage;
  const selectedItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <CTable hover responsive>
      <CTableHead color="dark">
        <CTableRow>
          <CTableHeaderCell>번호</CTableHeaderCell>
          <CTableHeaderCell>이름</CTableHeaderCell>
          <CTableHeaderCell>전화번호</CTableHeaderCell>
          <CTableHeaderCell>이메일</CTableHeaderCell>
          <CTableHeaderCell>소속</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {selectedItems.map((mgr) => (
          <CTableRow key={mgr.id}>
            <CTableDataCell>{mgr.id}</CTableDataCell>
            <CTableDataCell>{mgr.name}</CTableDataCell>
            <CTableDataCell>{mgr.phone}</CTableDataCell>
            <CTableDataCell>{mgr.email}</CTableDataCell>
            <CTableDataCell>{mgr.department}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default ManagerTable;
