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
} from "@coreui/react";

import { useUserStore } from "@/store/user";

const CompetitionContest = () => {
  //  로그인 사용자 정보
  const { studentNumber, name, major } = useUserStore();

  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    // 기간
    startDate: "",
    endDate: "",

    // 대회명 라디오
    contestType: "캡스톤", // 기본 선택값
    contestTypeEtc: "",    // '기타' 선택 시 입력 내용

    // 주관 라디오
    hostOrg: "SW중심대학", // 기본 선택값
    hostOrgEtc: "",        // '외부' 선택 시 입력 내용

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 저장 버튼
  const handleSave = () => {
    // 기간 필수값 (시작일자, 종료일자)
    if (!formData.startDate) {
      alert("시작일자를 입력해주세요.");
      return;
    }
    if (!formData.endDate) {
      alert("종료일자를 입력해주세요.");
      return;
    }

    // 대회명 필수값
    // '기타' 선택 시, contestTypeEtc가 비어있으면 경고
    if (!formData.contestType) {
      alert("대회명을 선택해주세요.");
      return;
    }
    if (formData.contestType === "기타" && !formData.contestTypeEtc) {
      alert("대회명이 '기타'일 경우, 기타 입력값을 작성해주세요.");
      return;
    }

    // 주관 필수값
    // '외부' 선택 시, hostOrgEtc가 비어있으면 경고
    if (!formData.hostOrg) {
      alert("주관을 선택해주세요.");
      return;
    }
    if (formData.hostOrg === "외부" && !formData.hostOrgEtc) {
      alert("주관이 '외부'일 경우, 외부 입력값을 작성해주세요.");
      return;
    }

    // 개인/팀 필수값
    // 팀 선택 시, totalMembers 필수
    if (!formData.participantType) {
      alert("개인 또는 팀을 선택해주세요.");
      return;
    }
    if (formData.participantType === "팀" && !formData.totalMembers) {
      alert("팀을 선택하셨다면, 총 인원을 입력해주세요.");
      return;
    }

    // 기본정보(로그인 기입된 항목 제외)
    if (!formData.grade) {
      alert("학년을 입력해주세요.");
      return;
    }
    if (!formData.phone) {
      alert("핸드폰 번호를 입력해주세요.");
      return;
    }
    if (!formData.email) {
      alert("이메일 주소를 입력해주세요.");
      return;
    }

    // 4.6 담당교수 (필수 여부에 따라 추가)
    if (!formData.professor) {
      alert("담당 교수를 입력해주세요.");
      return;
    }

    // 모든 필수값 통과 후
    console.log("저장할 데이터:", formData);
    alert("신청이 완료되었습니다.");
  };

  return (
    <div className="container px-4">
      <Title title="경진대회/공모전 신청" />

      {/* 기간 섹션 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">기간</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-3 flex-wrap">
            <CInputGroup>
              <CInputGroupText
                className="text-white border-gray"
                style={{ maxWidth: "10rem", backgroundColor: "#2A303D" }}
              >
                시작일자
              </CInputGroupText>
              <CFormInput
                name="startDate"
                type="date"
                className="bg-dawn-light text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </CInputGroup>

            <CInputGroup>
              <CInputGroupText
                className="text-white border-gray"
                style={{ maxWidth: "10rem", backgroundColor: "#2A303D" }}
              >
                종료일자
              </CInputGroupText>
              <CFormInput
                name="endDate"
                type="date"
                className="bg-dawn-light text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </CInputGroup>
          </div>
        </CCardBody>
      </CCard>

      {/* 대회명 섹션 (라디오 + 기타 입력) */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">대회명</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-4 align-items-center flex-wrap">
            <label>
              <input
                type="radio"
                name="contestType"
                value="캡스톤"
                checked={formData.contestType === "캡스톤"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">캡스톤</span>
            </label>
            <label>
              <input
                type="radio"
                name="contestType"
                value="해커톤"
                checked={formData.contestType === "해커톤"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">해커톤</span>
            </label>
            <label>
              <input
                type="radio"
                name="contestType"
                value="기타"
                checked={formData.contestType === "기타"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">기타</span>
            </label>

            {/* '기타' 선택 시 보이는 입력창 */}
            {formData.contestType === "기타" && (
              <CFormInput
                type="text"
                name="contestTypeEtc"
                placeholder="기타 입력"
                className="bg-dawn-light text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={formData.contestTypeEtc}
                onChange={handleInputChange}
              />
            )}
          </div>
        </CCardBody>
      </CCard>

      {/* 주관 섹션 (라디오 + 외부 입력) */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">주관</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-4 align-items-center flex-wrap">
            <label>
              <input
                type="radio"
                name="hostOrg"
                value="SW중심대학"
                checked={formData.hostOrg === "SW중심대학"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">SW중심대학</span>
            </label>
            <label>
              <input
                type="radio"
                name="hostOrg"
                value="기타 단과대"
                checked={formData.hostOrg === "기타 단과대"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">기타 단과대</span>
            </label>
            <label>
              <input
                type="radio"
                name="hostOrg"
                value="외부"
                checked={formData.hostOrg === "외부"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">외부</span>
            </label>

            {/* '외부' 선택 시 보이는 입력창 */}
            {formData.hostOrg === "외부" && (
              <CFormInput
                type="text"
                name="hostOrgEtc"
                placeholder="외부 입력"
                className="bg-dawn-light text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={formData.hostOrgEtc}
                onChange={handleInputChange}
              />
            )}
          </div>
        </CCardBody>
      </CCard>

      {/* 개인/팀 섹션 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">개인/팀</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex gap-4 mb-3">
            <label>
              <input
                type="radio"
                name="participantType"
                value="개인"
                checked={formData.participantType === "개인"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">개인</span>
            </label>
            <label>
              <input
                type="radio"
                name="participantType"
                value="팀"
                checked={formData.participantType === "팀"}
                onChange={handleInputChange}
              />
              <span className="text-white ms-2">팀 (총 인원)</span>
            </label>
          </div>
          {formData.participantType === "팀" && (
            <div style={{ maxWidth: "15rem" }}>
              <CFormInput
                type="number"
                name="totalMembers"
                placeholder="예) 5"
                className="bg-dawn-light text-white border-gray"
                value={formData.totalMembers}
                onChange={handleInputChange}
              />
            </div>
          )}
        </CCardBody>
      </CCard>

      {/* 신청서 (기본정보) */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CRow className="mb-3">
            <CCol md="4">
              <label className="text-white mb-1">학번</label>
              <CFormInput
                name="studentNumber"
                className="bg-dawn-light text-white border-gray"
                value={formData.studentNumber}
                onChange={handleInputChange}
                readOnly
              />
            </CCol>
            <CCol md="4">
              <label className="text-white mb-1">이름</label>
              <CFormInput
                name="name"
                className="bg-dawn-light text-white border-gray"
                value={formData.name}
                onChange={handleInputChange}
                readOnly
              />
            </CCol>
            <CCol md="4">
              <label className="text-white mb-1">학과</label>
              <CFormInput
                name="major"
                className="bg-dawn-light text-white border-gray"
                value={formData.major}
                onChange={handleInputChange}
                readOnly
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md="4">
              <label className="text-white mb-1">생년월일</label>
              <CFormInput
                name="birthDate"
                className="bg-dawn-light text-white border-gray"
                placeholder="예) 1999-01-01"
                value={formData.birthDate}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <label className="text-white mb-1">학년</label>
              <CFormInput
                name="grade"
                className="bg-dawn-light text-white border-gray"
                placeholder="예) 3"
                value={formData.grade}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <label className="text-white mb-1">핸드폰</label>
              <CFormInput
                name="phone"
                className="bg-dawn-light text-white border-gray"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md="4">
              <label className="text-white mb-1">직전학기 취득성적</label>
              <CFormInput
                name="lastSemesterGpa"
                placeholder="예) 3.5"
                className="bg-dawn-light text-white border-gray"
                value={formData.lastSemesterGpa}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <label className="text-white mb-1">직전학기 취득학점</label>
              <CFormInput
                name="lastSemesterCredits"
                placeholder="예) 15"
                className="bg-dawn-light text-white border-gray"
                value={formData.lastSemesterCredits}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol md="4">
              <label className="text-white mb-1">E-mail</label>
              <CFormInput
                type="email"
                name="email"
                placeholder="이메일 주소"
                className="bg-dawn-light text-white border-gray"
                value={formData.email}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* 담당 교수 섹션 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">담당 교수</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CFormInput
            name="professor"
            placeholder="검색어를 입력하세요"
            className="bg-dawn-light text-white border-gray"
            value={formData.professor}
            onChange={handleInputChange}
          />
        </CCardBody>
      </CCard>

      {/* 저장 버튼 */}
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

export default CompetitionContest;
