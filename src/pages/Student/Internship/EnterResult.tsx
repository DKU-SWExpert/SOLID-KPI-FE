import React, { useState } from "react";
import Title from "@components/Card/Title";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CFormSelect,
  CButton,
  CInputGroupText,
  CInputGroup,
} from "@coreui/react";

const EnterResult = () => {
  // Todo : 상수로 뺄 지 고민
  const plans = {
    hired: "취업예정",
    noPlan: "계획없음",
  };

  const [formData, setFormData] = useState({
    result: null as File | null,
    plan: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      result: file,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { result, plan } = formData;
    if (plan === "" || result === null) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert("필수 항목을 입력해주세요.");
      return;
    }
    console.log(formData);
  };

  return (
    <>
      <Title title="인턴십 결과 입력" />
      {/* 이력서 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">수행평가서</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CInputGroup className="mb-3">
            <CFormInput
              className="bg-dawn-light text-white border-gray"
              type="file"
              id="formFile"
              color="info"
              onChange={handleFileChange}
              name="result"
            />
            <CInputGroupText
              className="bg-dawn text-white border-gray gray-placeholder"
              as="label"
              htmlFor="formFile"
            >
              Upload
            </CInputGroupText>
          </CInputGroup>
        </CCardBody>
      </CCard>
      {/* 업체 또는 랩 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">구분</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CFormSelect
            name="plan"
            className="bg-dawn-light text-white border-gray"
            style={{ maxWidth: "15rem" }}
            value={formData.plan}
            onChange={handleInputChange}
          >
            <option>선택해주세요...</option>
            {Object.entries(plans).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>

      {/* 저장 */}
      <div className="mt-4 mb-4">
        <CButton color="primary" className="w-100" onClick={handleSubmit}>
          저 장
        </CButton>
      </div>
    </>
  );
};

export default EnterResult;
