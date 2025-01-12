import React, { useState } from "react";
import { companies } from "./companies";
import {
  CTable,
  CContainer,
  CRow,
  CCol,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CButton,
  CPagination,
  CPaginationItem,
} from "@coreui/react";
import SearchBar from "@/components/SearchBar";
import AddButton from "./AddButton";
import "@styles/custom-color.css";

interface Company {
  id: number;
  name: string;
  ceo: string;
  address: string;
}

const Companies = () => {
  const [selectedId, setSelectedId] = useState<number | null>();
  const [editValues, setEditValues] = useState<
    Record<number, Partial<Company>>
  >({});

  const handleInputChange = (
    id: number,
    field: keyof Company,
    value: string
  ) => {
    setEditValues((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        [field]: value,
      },
    }));
  };

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
  };

  return (
    <CContainer className="py-4">
      <CRow className="mb-3">
        <CCol sm={4}>
          <SearchBar />
        </CCol>
        <CCol sm={8} className="text-end">
          <AddButton />
        </CCol>
      </CRow>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>번호</CTableHeaderCell>
            <CTableHeaderCell>업체명</CTableHeaderCell>
            <CTableHeaderCell>대표자명</CTableHeaderCell>
            <CTableHeaderCell>주소</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {companies.map(({ id, name, ceo, address }) => (
            <React.Fragment key={id}>
              <CTableRow
                onClick={() =>
                  setSelectedId((prev) => (prev === id ? null : id))
                }
                style={{ cursor: "pointer" }}
              >
                <CTableDataCell className="bg-dawn-light text-white border-gray">
                  {id}
                </CTableDataCell>
                <CTableDataCell className="bg-dawn-light text-white border-gray">
                  {name}
                </CTableDataCell>
                <CTableDataCell className="bg-dawn-light text-white border-gray">
                  {ceo}
                </CTableDataCell>
                <CTableDataCell className="bg-dawn-light text-white border-gray">
                  {address}
                </CTableDataCell>
              </CTableRow>

              {/* 선택한 항목의 세부 정보 표시 */}
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
                      {["업체명", "대표자명", "주소"].map((label, index) => {
                        const fields: (keyof Company)[] = [
                          "name",
                          "ceo",
                          "address",
                        ];
                        const values = [name, ceo, address];
                        return (
                          <div style={{ marginBottom: "12px" }} key={index}>
                            <label
                              style={{
                                fontWeight: "bold",
                                marginBottom: "4px",
                                display: "block",
                                color: "#fff",
                              }}
                            >
                              {label}
                            </label>
                            <input
                              type="text"
                              style={{
                                ...detailStyle,
                                width: "100%",
                                border: "none",
                                outline: "none",
                              }}
                              value={
                                editValues[id]?.[
                                  fields[index] as keyof Company
                                ] !== undefined
                                  ? editValues[id]?.[
                                      fields[index] as keyof Company
                                    ]
                                  : values[index]
                              }
                              onChange={(e) =>
                                handleInputChange(
                                  id,
                                  fields[index],
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        );
                      })}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <CButton color="primary" onClick={() => handleSave(id)}>
                          저장
                        </CButton>
                        <CButton
                          color="primary"
                          onClick={() => handleDelete(id)}
                        >
                          삭제
                        </CButton>
                      </div>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              )}
            </React.Fragment>
          ))}
        </CTableBody>
      </CTable>

      <CPagination className="justify-content-center mt-3">
        <CPaginationItem>Previous</CPaginationItem>
        <CPaginationItem>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem>Next</CPaginationItem>
      </CPagination>
    </CContainer>
  );
};

export default Companies;
