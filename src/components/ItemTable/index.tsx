import React, { useState } from "react";
import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { useItemStore } from "@/store/item";
import "@styles/custom-color.css";

interface ItemTableProps {
  currentPage: number;
  itemsPerPage: number;
}

const ItemTable: React.FC<ItemTableProps> = ({ currentPage, itemsPerPage }) => {
  const { data, search } = useItemStore();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const currentItems = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleDelete = (id: number) => {
    alert(`Delete item with id: ${id}`);
  };

  const handleSave = (id: number) => {
    alert(`Save item with id: ${id}`);
  };

  const detailStyle = {
    padding: "8px",
    backgroundColor: "#333a49",
    borderRadius: "8px",
    color: "#fff",
    width: "30%",
  };

  return (
    <CTable striped hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>번호</CTableHeaderCell>
          <CTableHeaderCell>이름</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {currentItems.map(({ id, name }) => (
          <React.Fragment key={id}>
            {/* 기본 테이블 행 */}
            <CTableRow
              onClick={() => setSelectedId((prev) => (prev === id ? null : id))}
              style={{ cursor: "pointer" }}
            >
              <CTableDataCell className="bg-dawn-light text-white border-gray">
                {id}
              </CTableDataCell>
              <CTableDataCell className="bg-dawn-light text-white border-gray">
                {name}
              </CTableDataCell>
            </CTableRow>

            {/* 선택된 항목의 세부 정보 표시 */}
            {selectedId === id && (
              <CTableRow>
                <CTableDataCell
                  className="bg-dawn-light border-gray"
                  colSpan={4}
                  style={{ padding: "0" }}
                >
                  <div
                    className="text-white"
                    style={{
                      border: "1px solid",
                      borderRadius: "16px",
                      borderColor: "#6261cc",
                      padding: "16px",
                      margin: "16px",
                    }}
                  >
                    <div style={{ marginBottom: "12px" }}>
                      <label
                        style={{
                          fontWeight: "bold",
                          marginBottom: "4px",
                          display: "block",
                          color: "#fff",
                        }}
                      >
                        이름
                      </label>
                      <div style={detailStyle}>{name}</div>
                    </div>

                    <CButton
                      color="primary"
                      onClick={() => handleSave(id)}
                      style={{
                        display: "block",
                        marginTop: "16px",
                        marginLeft: "0",
                        marginRight: "auto",
                      }}
                    >
                      저장
                    </CButton>
                    <CButton
                      color="primary"
                      onClick={() => handleDelete(id)}
                      style={{
                        display: "block",
                        marginTop: "16px",
                        marginLeft: "0",
                        marginRight: "auto",
                      }}
                    >
                      삭제
                    </CButton>
                  </div>
                </CTableDataCell>
              </CTableRow>
            )}
          </React.Fragment>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default ItemTable;
