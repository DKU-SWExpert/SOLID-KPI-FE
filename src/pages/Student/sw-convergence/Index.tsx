import { useState } from "react"
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CCol,
  CInputGroup
} from "@coreui/react"
import { useUserStore } from "@/store/user"

const SWConvergence = () => {
  const { name, studentNumber, major } = useUserStore() // Zustand에서 가져온 사용자 정보

  const [formData, setFormData] = useState({
    professor: "",
    selectedPeriod: "",
    category: "SW 융합학부 1전공자", // 라디오 기본 선택값
    birth: "",
    grade: "",
    phone: "",
    email: ""
    // 이부분이 정확히 어떤 부분을 말씀하신건지 모르겠습니다..
  })

  const periods = [
    "2025년 1학기",
    "2025년 2학기",
    "2026년 1학기",
    "2026년 2학기",
    "2027년 1학기",
    "2027년 2학기",
    "2028년 2학기",
    "2028년 1학기",
    "2029년 2학기",
    "2029년 1학기",
    // ...
  ]

  // 폼 변경 핸들러
  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  // 저장 버튼 클릭
  const handleSave = () => {
    if (!formData.selectedPeriod) {
      alert("기간을 선택해주세요.")
      return
    }
    if (!formData.professor) {
      alert("담당 교수를 입력해주세요.")
      return
    }

    console.log("Saved Data:", { ...formData, name, studentNumber, major })
    alert("SW 융합 신청이 완료되었습니다.")
  }

  return (
    <div className="container px-4">
      {/* 상단 헤더(Title) */}
      <div className="d-flex align-items-center mt-4 mb-4">
        <CCard
          textBgColor="primary"
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ maxWidth: "15rem", height: "4.5rem" }}
        >
          <CCardHeader className="text-white text-center fw-semibold fs-5 border-0">
            SW 융합 신청
          </CCardHeader>
        </CCard>
      </div>

      {/* 신청학기 섹션 */}
      <CCard
        textBgColor="info"
        className="d-flex mt-3 mb-3"
        style={{ borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">신청학기</CCardHeader>
        <CCardBody className="bg-dark" style={{ borderRadius: "0 0 0.75rem 0.75rem" }}>
          <CFormSelect
            className="text-white border-secondary bg-dark"
            value={formData.selectedPeriod}
            onChange={(e) => handleFormChange("selectedPeriod", e.target.value)}
          >
            <option value="">선택해주세요...</option>
            {periods.map((period, index) => (
              <option key={index} value={period}>
                {period}
              </option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>

      {/* 구분 섹션 (라디오 버튼) */}
      <CCard
        textBgColor="info"
        className="d-flex mt-3 mb-3"
        style={{ borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">구분</CCardHeader>
        <CCardBody className="bg-dark" style={{ borderRadius: "0 0 0.75rem 0.75rem" }}>
          <div className="d-flex gap-4">
            <CInputGroup className="align-items-center">
              <input
                type="radio"
                id="category1"
                name="category"
                value="SW 융합학부 1전공자"
                checked={formData.category === "SW 융합학부 1전공자"}
                onChange={(e) => handleFormChange("category", e.target.value)}
              />
              <label htmlFor="category1" className="text-white ms-2">
                SW 융합학부 1전공자
              </label>
            </CInputGroup>
            <CInputGroup className="align-items-center">
              <input
                type="radio"
                id="category2"
                name="category"
                value="마이크로 전공/SOCC 전공자"
                checked={formData.category === "마이크로 전공/SOCC 전공자"}
                onChange={(e) => handleFormChange("category", e.target.value)}
              />
              <label htmlFor="category2" className="text-white ms-2">
                마이크로 전공/SOCC 전공자
              </label>
            </CInputGroup>
          </div>
        </CCardBody>
      </CCard>

      {/* 신청서 (기본정보) 섹션 */}
      <CCard
        textBgColor="info"
        className="d-flex mt-3 mb-3"
        style={{ borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
        <CCardBody className="bg-dark" style={{ borderRadius: "0 0 0.75rem 0.75rem" }}>
          <CRow className="mb-3">
            <CCol md={4}>
              <CFormLabel className="text-white">학번</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={studentNumber}
                readOnly
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel className="text-white">이름</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={name}
                readOnly
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel className="text-white">학과</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                value={major}
                readOnly
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={4}>
              <CFormLabel className="text-white">생년월일</CFormLabel>
              <CFormInput
                type="date"
                className="text-white border-secondary bg-dark"
                value={formData.birth}
                onChange={(e) => handleFormChange("birth", e.target.value)}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel className="text-white">학년</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                placeholder="학년"
                value={formData.grade}
                onChange={(e) => handleFormChange("grade", e.target.value)}
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel className="text-white">핸드폰</CFormLabel>
              <CFormInput
                className="text-white border-secondary bg-dark"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={12}>
              <CFormLabel className="text-white">E-mail</CFormLabel>
              <CFormInput
                type="email"
                className="text-white border-secondary bg-dark"
                placeholder="E-mail을 입력하세요."
                value={formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* 담당 교수 섹션 */}
      <CCard
        textBgColor="info"
        className="d-flex mt-3 mb-3"
        style={{ borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">담당 교수</CCardHeader>
        <CCardBody className="bg-dark" style={{ borderRadius: "0 0 0.75rem 0.75rem" }}>
          <CFormInput
            type="text"
            className="text-white border-secondary bg-dark"
            placeholder="검색어를 입력하세요"
            value={formData.professor}
            onChange={(e) => handleFormChange("professor", e.target.value)}
          />
        </CCardBody>
      </CCard>

      {/* 저장 버튼 */}
      <div className="mt-4 mb-4">
        <CButton color="primary" className="w-100" onClick={handleSave}>
          저 장
        </CButton>
      </div>
    </div>
  )
}

export default SWConvergence
