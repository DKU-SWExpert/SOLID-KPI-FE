import React, { useState } from "react";
import Title from "@components/Card/Title";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormSelect,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CPlaceholder,
} from "@coreui/react";
import { useUserStore } from "@store/user";

const Application = () => {
  const internTypes = {
    longterm: "장기",
    shortterm: "단기",
    lab: "랩",
    global: "글로벌",
  };

  const companies = {
    ktta: "한국정보통신 기술협회",
    ahnlab: "안랩",
    elim: "엘림주식회사",
    biometes: "바이옴에이츠",
    ivtech: "(주)아이브테크",
    aiteam: "에이아이팀",
    cpsix: "주식회사 씨피식스",
  };

  const [formData, setFormData] = useState({
    internType: "",
    startDate: "",
    endDate: "",
    company: "",
    professor: "",
    resume: null as File | null,
  });

  const { name, studentNumber, major } = useUserStore((state) => state);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
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
    const { internType, startDate, endDate, company, professor, resume } =
      formData;
    if (
      internType === "" ||
      startDate === "" ||
      endDate === "" ||
      company === "" ||
      professor === "" ||
      resume === null
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert("필수 항목을 입력해주세요.");
      return;
    }
    // 학생 이름, 학번, 학과는 백엔드에서 저장하고 있으므로 formData에 추가하지 않음

    console.log(formData);
  };

  return (
    <>
      <Title title="인턴쉽 신청" />
      {/* 구분 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4 ms-2"
        style={{ maxWidth: "100rem" }}
      >
        <CCardHeader className="text-white">구분</CCardHeader>
        <CCardBody className="bg-dawn">
          <CFormSelect
            name="internType"
            className="bg-dawn text-white border-gray"
            style={{ maxWidth: "15rem" }}
            value={formData.internType}
            onChange={handleInputChange}
          >
            <option>선택해주세요...</option>
            {Object.entries(internTypes).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>
      {/* 기간 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4 ms-2"
        style={{ maxWidth: "100rem" }}
      >
        <CCardHeader className="text-white">기간</CCardHeader>
        <CCardBody className="bg-dawn d-flex">
          <CInputGroup>
            <CInputGroupText
              className="bg-dawn text-white border-gray"
              style={{ maxWidth: "15rem", backgroundColor: "#2A303D" }}
            >
              시작 일자
            </CInputGroupText>
            <CFormInput
              name="startDate"
              type="date"
              className="bg-dawn text-white border-gray"
              style={{ maxWidth: "15rem" }}
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </CInputGroup>
          <CInputGroup>
            <CInputGroupText
              className="bg-dawn text-white border-gray"
              style={{ maxWidth: "15rem", backgroundColor: "#2A303D" }}
            >
              종료 일자
            </CInputGroupText>
            <CFormInput
              name="endDate"
              type="date"
              className="bg-dawn text-white border-gray"
              style={{ maxWidth: "15rem" }}
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </CInputGroup>
        </CCardBody>
      </CCard>
      {/* 업체 또는 랩 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4 ms-2"
        style={{ maxWidth: "100rem" }}
      >
        <CCardHeader className="text-white">구분</CCardHeader>
        <CCardBody className="bg-dawn">
          <CFormSelect
            name="company"
            className="bg-dawn text-white border-gray"
            style={{ maxWidth: "15rem" }}
            value={formData.company}
            onChange={handleInputChange}
          >
            <option>선택해주세요...</option>
            {Object.entries(companies).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>
      {/* 신청서 (기본정보) */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4 ms-2"
        style={{ maxWidth: "100rem" }}
      >
        <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
        <CCardBody className="bg-dawn">
          <div className="d-flex justify-content-between">
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">학번</div>
              <CPlaceholder
                as={CButton}
                color="secondary"
                disabled
                className="mb-4 text-start w-100 text-white"
                style={{
                  opacity: 1,
                  borderColor: "transparent",
                }}
              >
                {studentNumber}
              </CPlaceholder>
            </div>
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">이름</div>
              <CPlaceholder
                as={CButton}
                color="secondary"
                disabled
                className="mb-4 text-start w-100 text-white"
                style={{
                  opacity: 1,
                  borderColor: "transparent",
                }}
              >
                {name}
              </CPlaceholder>
            </div>
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">학과</div>
              <CPlaceholder
                as={CButton}
                color="secondary"
                disabled
                className="mb-4 text-start w-100 text-white"
                style={{
                  opacity: 1,
                  borderColor: "transparent",
                }}
              >
                {major}
              </CPlaceholder>
            </div>
          </div>
        </CCardBody>
      </CCard>
      {/* 담당 교수 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4 ms-2"
        style={{ maxWidth: "100rem" }}
      >
        <CCardHeader className="text-white">담당 교수</CCardHeader>
        <CCardBody className="bg-dawn">
          <CFormInput
            name="professor"
            type="text"
            className="mb-4 bg-dawn text-white border-gray gray-placeholder"
            placeholder="검색어를 입력하세요."
            style={{ maxWidth: "15rem" }}
            value={formData.professor}
            onChange={handleInputChange}
          />
        </CCardBody>
      </CCard>
      {/* 이력서 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4 ms-2"
        style={{ maxWidth: "100rem" }}
      >
        <CCardHeader className="text-white">이력서</CCardHeader>
        <CCardBody className="bg-dawn">
          <div className="mb-3">
            <CFormInput
              type="file"
              id="formFile"
              color="info"
              onChange={handleFileChange}
              name="resume"
            />
          </div>
        </CCardBody>
      </CCard>
      {/* 저장 */}
      <div className="mt-4 mb-4 ms-2">
        <CButton color="primary" className="w-100" onClick={handleSubmit}>
          Button
        </CButton>
      </div>
    </>
  );
};

export default Application;
