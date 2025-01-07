import React, { useState } from "react";
import Title from "@components/Card/Title";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CRow,
  CCol,
  CFormLabel,
} from "@coreui/react";
import { useUserStore } from "@/store/user";

const CompetitionContest = () => {
  const { studentNumber, name, major } = useUserStore();

  const [formData, setFormData] = useState({
    // 기간
    startDate: "",
    endDate: "",

    // 대회명 (라디오 + 기타)
    contestType: "캡스톤",
    contestTypeEtc: "",

    // 주관 (라디오 + 외부)
    hostOrg: "SW중심대학",
    hostOrgEtc: "",

    // 개인/팀
    participantType: "개인",
    totalMembers: "",

    // 기본정보
    studentNumber: studentNumber || "",
    name: name || "",
    major: major || "",
    birthDate: "",
    grade: "",
    phone: "",
    lastSemesterGpa: "",
    lastSemesterCredits: "",
    email: "",

    // 담당 교수
    professor: "",
  });

  // 입력 핸들러
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 저장 버튼
  const handleSave = () => {
    // (동일한 검증 로직)
    if (!formData.startDate) return alert("시작일자를 입력해주세요.");
    if (!formData.endDate) return alert("종료일자를 입력해주세요.");
    if (formData.contestType === "기타" && !formData.contestTypeEtc) {
      return alert("대회명이 '기타'일 경우, 기타 입력을 작성해주세요.");
    }
    if (formData.hostOrg === "외부" && !formData.hostOrgEtc) {
      return alert("주관이 '외부'일 경우, 외부 입력을 작성해주세요.");
    }
    if (formData.participantType === "팀" && !formData.totalMembers) {
      return alert("팀 인원을 입력해주세요.");
    }
    if (!formData.birthDate) return alert("생년월일을 입력해주세요.");
    if (!formData.grade) return alert("학년을 입력해주세요.");
    if (!formData.phone) return alert("핸드폰 번호를 입력해주세요.");
    if (!formData.email) return alert("이메일 주소를 입력해주세요.");
    if (!formData.professor) return alert("담당 교수를 입력해주세요.");

    console.log("저장할 데이터:", formData);
    alert("신청이 완료되었습니다.");
  };

  return (
    <div className="container px-4">
      <Title title="경진대회/공모전 신청" />

      {/* ====== 기간 섹션 (SWConvergence처럼 bg-dark) ====== */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">기간</CCardHeader>
        <CCardBody
          className="bg-dark" // SWConvergence: bg-dark
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-3" style={{ flexWrap: "nowrap" }}>
            <CInputGroup>
              <CInputGroupText
                className="text-white border-secondary"
                style={{ maxWidth: "10rem", backgroundColor: "#2A303D" }}
              >
                시작일자
              </CInputGroupText>
              <CFormInput
                name="startDate"
                type="date"
                className="text-white border-secondary bg-dark"
                style={{ maxWidth: "15rem" }}
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </CInputGroup>

            <CInputGroup>
              <CInputGroupText
                className="text-white border-secondary"
                style={{ maxWidth: "10rem", backgroundColor: "#2A303D" }}
              >
                종료일자
              </CInputGroupText>
              <CFormInput
                name="endDate"
                type="date"
                className="text-white border-secondary bg-dark"
                style={{ maxWidth: "15rem" }}
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </CInputGroup>
          </div>
        </CCardBody>
      </CCard>

      {/* ====== 대회명 (라디오) ====== */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">대회명</CCardHeader>
        <CCardBody
          className="bg-dark" // 배경 어둡게
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          {/* 라디오 (SWConvergence 스타일) */}
          <div className="d-flex gap-3 flex-wrap">
            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="contestType"
                value="캡스톤"
                style={{ accentColor: "#229AFF" }}
                checked={formData.contestType === "캡스톤"}
                onChange={handleInputChange}
              />
              <span className="ms-2">캡스톤</span>
            </label>

            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="contestType"
                value="해커톤"
                style={{ accentColor: "#229AFF" }}
                checked={formData.contestType === "해커톤"}
                onChange={handleInputChange}
              />
              <span className="ms-2">해커톤</span>
            </label>

            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="contestType"
                value="기타"
                style={{ accentColor: "#229AFF" }}
                checked={formData.contestType === "기타"}
                onChange={handleInputChange}
              />
              <span className="ms-2">기타</span>
            </label>

            {formData.contestType === "기타" && (
              <CFormInput
                type="text"
                name="contestTypeEtc"
                placeholder="기타 입력"
                className="text-white border-secondary bg-dark"
                style={{ maxWidth: "15rem" }}
                value={formData.contestTypeEtc}
                onChange={handleInputChange}
              />
            )}
          </div>
        </CCardBody>
      </CCard>

      {/* ====== 주관 (라디오) ====== */}
      <CCard
        textBgColor="info"
        className="mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">주관</CCardHeader>
        <CCardBody
          className="bg-dark" // SWConvergence
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-3 flex-wrap">
            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="hostOrg"
                value="SW중심대학"
                style={{ accentColor: "#229AFF" }}
                checked={formData.hostOrg === "SW중심대학"}
                onChange={handleInputChange}
              />
              <span className="ms-2">SW융합학부 1전공자</span>
            </label>
            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="hostOrg"
                value="기타 단과대"
                style={{ accentColor: "#229AFF" }}
                checked={formData.hostOrg === "기타 단과대"}
                onChange={handleInputChange}
              />
              <span className="ms-2">기타 단과대</span>
            </label>
            <label className="text-white d-flex align-items-center">
              <input
                type="radio"
                name="hostOrg"
                value="외부"
                style={{ accentColor: "#229AFF" }}
                checked={formData.hostOrg === "외부"}
                onChange={handleInputChange}
              />
              <span className="ms-2">외부</span>
            </label>

            {formData.hostOrg === "외부" && (
              <CFormInput
                type="text"
                name="hostOrgEtc"
                placeholder="외부 입력"
                className="text-white border-secondary bg-dark"
                style={{ maxWidth: "15rem" }}
                value={formData.hostOrgEtc}
                onChange={handleInputChange}
              />
            )}
          </div>
        </CCardBody>
      </CCard>

      {/* ====== 개인/팀 (라디오) ====== */}
      <CCard
        textBgColor="info"
        className="mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">개인/팀</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-3 mb-3 flex-wrap">
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
            <div style={{ maxWidth: "15rem" }}>
              <CFormInput
                type="number"
                name="totalMembers"
                placeholder="예) 5"
                className="text-white border-secondary bg-dark"
                value={formData.totalMembers}
                onChange={handleInputChange}
              />
            </div>
          )}
        </CCardBody>
      </CCard>

      {/* ====== 신청서 (기본정보) ====== */}
      <CCard
        textBgColor="info"
        className="mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          {/* 1행: 학번 / 이름 / 학과 */}
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
                value={formData.name}
                readOnly
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">학과</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={formData.major}
                readOnly
              />
            </CCol>
          </CRow>
          {/* 2행: 생년월일 / 학년 / 핸드폰 */}
          <CRow className="mb-3">
            <CCol md="4">
              <CFormLabel className="text-white mb-1">생년월일</CFormLabel>
              <CFormInput
                type="date"
                className="text-white border-secondary bg-dark"
                value={formData.birthDate}
                name="birthDate"
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">학년</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                placeholder="예) 3"
                value={formData.grade}
                name="grade"
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">핸드폰</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                placeholder="010-1234-5678"
                value={formData.phone}
                name="phone"
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          {/* 3행: E-mail / 직전학기 취득성적 / 직전학기 취득학점 */}
          <CRow className="mb-3">
            <CCol md="4">
              <CFormLabel className="text-white mb-1">E-mail</CFormLabel>
              <CFormInput
                type="email"
                className="text-white border-secondary bg-dark"
                placeholder="E-mail을 입력하세요."
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">직전학기 취득성적</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                placeholder="예) 3.5"
                value={formData.lastSemesterGpa}
                name="lastSemesterGpa"
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <CFormLabel className="text-white mb-1">직전학기 취득학점</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                placeholder="예) 15"
                value={formData.lastSemesterCredits}
                name="lastSemesterCredits"
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* ====== 담당 교수 ====== */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">담당 교수</CCardHeader>
        <CCardBody
          className="bg-dark"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CFormInput
            type="text"
            className="text-white border-secondary bg-dark"
            placeholder="검색어를 입력하세요"
            value={formData.professor}
            name="professor"
            onChange={handleInputChange}
          />
        </CCardBody>
      </CCard>

      {/* ====== 저장 버튼 ====== */}
      <div className="mt-4 mb-4 text-center">
        <CButton color="primary" className="w-100" style={{ fontSize: "1rem", fontWeight: 500 }}
          onClick={handleSave}
        >
          저 장
        </CButton>
      </div>
    </div>
  );
};

export default CompetitionContest;
