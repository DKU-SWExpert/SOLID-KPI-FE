import React, { useState } from "react";
import { CContainer, CButton } from "@coreui/react";
import { useManagerStore } from "@/store/useManagerStore";

// 재사용 컴포넌트
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import ExpandedRow from "@/components/ExpandedRow";
import { useNavigate } from "react-router-dom"; // 추가

const ManagerListPage: React.FC = () => {
  const { managers, search } = useManagerStore();

  const filteredData = managers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const navigate = useNavigate(); // 네비게이션 함수

  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleAddManager = () => {
    navigate("/super-admin/manager/add"); // 추가 페이지로 이동
  };

  return (
    <CContainer className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* 검색 */}
        <div style={{ maxWidth: "20rem" }}>
          <SearchBar />
        </div>

        {/* 관리자 추가 버튼 */}
        <CButton color="primary" onClick={handleAddManager}>
          관리자 추가
        </CButton>
      </div>

      {/* 관리자 목록 테이블 */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>전화번호</th>
            <th>이메일</th>
            <th>소속</th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            .slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage)
            .map((manager) => (
              <React.Fragment key={manager.id}>
                <tr onClick={() => handleRowClick(manager.id)}>
                  <td>{manager.id}</td>
                  <td>{manager.name}</td>
                  <td>{manager.phone}</td>
                  <td>{manager.email}</td>
                  <td>{manager.department}</td>
                </tr>
                {expandedRow === manager.id && (
                  <ExpandedRow
                    manager={manager}
                    onSave={() => alert("저장 완료!")}
                    onDelete={() => alert("삭제 완료!")}
                  />
                )}
              </React.Fragment>
            ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </CContainer>
  );
};

export default ManagerListPage;
