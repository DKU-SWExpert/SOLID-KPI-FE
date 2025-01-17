import React, { useState } from "react";
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
} from "@coreui/react";

const AddCompany = () => {
  const [companyName, setCompanyName] = useState("업체를 입력해주세요...");
  const [ceoName, setCeoName] = useState("대표자명을 입력해주세요...");
  const [address, setAddress] = useState("");

  const validate = () => {
    if (companyName === "" || ceoName === "" || address === "") {
      alert("모든 항목을 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (!validate()) return;
    alert("저장되었습니다.");
  };

  return (
    <CContainer className="py-4">
      <CCol className="mb-4" md={6}>
        <CFormLabel className="text-white">업체명 또는 랩</CFormLabel>
        <CFormInput
          className="text-white border-gray bg-dark"
          placeholder="업체명 또는 랩을 입력해주세요..."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </CCol>
      <CCol className="mb-4" md={6}>
        <CFormLabel className="text-white">대표자명</CFormLabel>
        <CFormInput
          className="text-white border-gray bg-dark "
          placeholder="대표자명을 입력해주세요..."
          value={ceoName}
          onChange={(e) => setCeoName(e.target.value)}
        />
      </CCol>
      <CCol className="mb-4" md={6}>
        <CFormLabel className="text-white">주소</CFormLabel>
        <CFormInput
          className="text-white border-gray bg-dark"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </CCol>

      <CButton
        className="mt-4 text-center"
        color="primary"
        style={{ width: "100%" }}
        onClick={handleClick}
      >
        저 장
      </CButton>
    </CContainer>
  );
};

export default AddCompany;
