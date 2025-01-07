// ThesisApplication.tsx

import React, { useState } from "react";
import Title from "@components/Card/Title";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormSelect,
  CRow,
  CCol,
  CFormLabel,
  CFormInput,
  CButton,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
} from "@coreui/react";
import { useUserStore } from "@/store/user";

// 1) formData 인터페이스
interface IThesisFormData {
  selectedPeriod: string;
  participantType: "개인" | "팀";
  totalMembers: string;
  thesisTitle: string;
  submissionDeadline: string;
  thesisOverview: string;
  studentNumber: string;
  userName: string;
  userMajor: string;
  applicationFile: File | null;
  recommendationFile: File | null;
  certificateFile: File | null;
  topcitFile: File | null;
  professor: string;
}

// 2) 파일 필드 키
type FileField = "applicationFile" | "recommendationFile" | "certificateFile" | "topcitFile";

const ThesisApplication = () => {
  // 3) 로그인 사용자 정보
  const { studentNumber, name, major } = useUserStore();

  // 4) 신청학기 목록
  const periods = [
    "선택해주세요...",
    "2025년 1학기",
    "2025년 2학기",
    "2026년 1학기",
    "2026년 2학기",
    "2027년 1학기",
    "2027년 2학기",
    "2028년 1학기",
    "2028년 2학기",
    "2029년 1학기",
    "2029년 2학기",
  ];

  // 5) 폼 상태
  const [formData, setFormData] = useState<IThesisFormData>({
    selectedPeriod: "",
    participantType: "개인",
    totalMembers: "",
    thesisTitle: "",
    submissionDeadline: "",
    thesisOverview: "",
    studentNumber: studentNumber || "",
    userName: name || "",
    userMajor: major || "",
    applicationFile: null,
    recommendationFile: null,
    certificateFile: null,
    topcitFile: null,
    professor: "",
  });

  // 6) 일반 입력 핸들러
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 7) 파일 선택 시
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: FileField) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, [field]: file }));
    }
  };

  // 8) 파일 업로드
  const handleFileUpload = (field: FileField) => {
    const file = formData[field];
    if (!file) {
      alert("파일이 선택되지 않았습니다.");
      return;
    }
    // 템플릿 리터럴 주의: 백틱(`) 안에서 ${} 사용
    alert(`'${file.name}' 파일 업로드 요청!`);
  };

  // 9) 저장 버튼
  const handleSave = () => {
    if (!formData.selectedPeriod || formData.selectedPeriod === "선택해주세요...") {
      alert("기간을 선택해주세요.");
      return;
    }
    if (!formData.thesisTitle) {
      alert("논문 제목을 입력해주세요.");
      return;
    }
    // 추가 검증...
    console.log("저장할 데이터:", formData);
    alert("논문 신청이 완료되었습니다.");
  };

  return (
    <div className="container px-4">
      <Title title="논문 신청" />

      {/* ====== 기간 섹션 ====== */}
      <CCard textBgColor="info" className="mt-4 mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">기간</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <CFormSelect
            name="selectedPeriod"
            className="text-white border-secondary bg-dark"
            style={{ maxWidth: "15rem" }}
            value={formData.selectedPeriod}
            onChange={handleInputChange}
          >
            {periods.map((period, idx) => (
              <option key={idx} value={period}>
                {period}
              </option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>

      {/* ====== 개인/팀 ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">개인/팀</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <div className="d-flex gap-4">
            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="participantType"
                value="개인"
                style={{ accentColor: "#229AFF" }}
                checked={formData.participantType === "개인"}
                onChange={handleInputChange}
              />
              <span className="ms-2">개인</span>
            </label>
            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="participantType"
                value="팀"
                style={{ accentColor: "#229AFF" }}
                checked={formData.participantType === "팀"}
                onChange={handleInputChange}
              />
              <span className="ms-2">팀 (총 인원)</span>
            </label>
          </div>
          {formData.participantType === "팀" && (
            <div style={{ maxWidth: "15rem" }} className="mt-3">
              <CFormInput
                name="totalMembers"
                type="number"
                className="text-white border-secondary bg-dark"
                placeholder="예) 3"
                value={formData.totalMembers}
                onChange={handleInputChange}
              />
            </div>
          )}
        </CCardBody>
      </CCard>

      {/* ====== 논문개요 ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">논문개요</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          {/* 논문제목, 학술지명 한 줄 */}
          <CRow className="mb-3">
            <CCol md="6">
              <CFormLabel className="text-white">논문제목</CFormLabel>
              <CFormInput
                name="thesisTitle"
                placeholder="논문 제목을 입력하세요."
                className="text-white border-secondary bg-dark"
                value={formData.thesisTitle}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="6">
              <CFormLabel className="text-white">학술지명</CFormLabel>
              <CFormInput
                name="submissionDeadline"
                placeholder="예) 2025-06-30"
                className="text-white border-secondary bg-dark"
                value={formData.submissionDeadline}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>

          {/* 개요 (여유 공간 5줄) */}
          <CRow>
            <CCol md="12">
              <CFormLabel className="text-white">개요</CFormLabel>
              <CFormTextarea
                name="thesisOverview"
                placeholder="개요를 입력하세요."
                className="text-white border-secondary bg-dark"
                rows={5}
                value={formData.thesisOverview}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* ====== 신청서 (기본정보) ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <CRow className="mb-3">
            <CCol md="4">
              <CFormLabel className="text-white mb-1">학번</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={formData.studentNumber}
                readOnly
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">이름</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={formData.userName}
                readOnly
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">학과</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={formData.userMajor}
                readOnly
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* ====== 신청서 파일 업로드 ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">신청서</CCardHeader>
        <CCardBody
          className="bg-dark d-flex align-items-center justify-content-between"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <div className="d-flex flex-column flex-sm-row gap-3 align-items-start align-items-sm-center">
            <CFormInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "applicationFile")}
              className="text-white border-secondary bg-dark"
            />
          </div>
          <CButton color="primary" onClick={() => handleFileUpload("applicationFile")}>
            Upload
          </CButton>
        </CCardBody>
      </CCard>

      {/* ====== 지도교수 추천서 ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">지도교수 추천서</CCardHeader>
        <CCardBody
          className="bg-dark d-flex align-items-center justify-content-between"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <div className="d-flex flex-column flex-sm-row gap-3 align-items-start align-items-sm-center">
            <CFormInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "recommendationFile")}
              className="text-white border-secondary bg-dark"
            />
          </div>
          <CButton color="primary" onClick={() => handleFileUpload("recommendationFile")}>
            Upload
          </CButton>
        </CCardBody>
      </CCard>

      {/* ====== 재학증명서 (원래 'certificateFile'로 관리) ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">재학증명서</CCardHeader>
        <CCardBody
          className="bg-dark d-flex align-items-center justify-content-between"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <div className="d-flex flex-column flex-sm-row gap-3 align-items-start align-items-sm-center">
            <CFormInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "certificateFile")}
              className="text-white border-secondary bg-dark"
            />
          </div>
          <CButton color="primary" onClick={() => handleFileUpload("certificateFile")}>
            Upload
          </CButton>
        </CCardBody>
      </CCard>

      {/* ====== TOPCIT 성적증명서 ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">TOPCIT 성적증명서</CCardHeader>
        <CCardBody
          className="bg-dark d-flex align-items-center justify-content-between"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <div className="d-flex flex-column flex-sm-row gap-3 align-items-start align-items-sm-center">
            <CFormInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "topcitFile")}
              className="text-white border-secondary bg-dark"
            />
          </div>
          <CButton color="primary" onClick={() => handleFileUpload("topcitFile")}>
            Upload
          </CButton>
        </CCardBody>
      </CCard>

      {/* ====== 담당 교수 ====== */}
      <CCard textBgColor="info" className="mb-4" style={{ borderRadius: "0.75rem" }}>
        <CCardHeader className="text-white">담당 교수</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{ borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }}
        >
          <CFormInput
            name="professor"
            placeholder="검색어를 입력하세요"
            className="text-white border-secondary bg-dark"
            value={formData.professor}
            onChange={handleInputChange}
          />
        </CCardBody>
      </CCard>

      {/* ==== 저장 버튼 ==== */}
      <div className="mt-4 mb-4 text-center">
        <CButton
          color="primary"
          className="w-100"
          style={{ fontSize: "1rem", fontWeight: 500 }}
          onClick={handleSave}
        >
          저 장
        </CButton>
      </div>
    </div>
  );
};

export default ThesisApplication;
