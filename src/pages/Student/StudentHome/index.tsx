import React, { useState } from "react";
import { useUserStore } from "@/store/user";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CPlaceholder,
  CFormSelect,
  CFormInput,
  CForm,
} from "@coreui/react";
import Title from "@/components/Card/Title";

const StudentHome = () => {
  // 이건 유저 정보가 db에 저장되어 있는지에 따라 다른 화면 보여주도록 설계해야하
  const majors = {
    swMixed: "SW융합학부",
    dataScience: "데이터사이언스",
    mobile: "모바일",
    cyberSecurity: "사이버보안",
    software: "소프트웨어",
    computerEngineering: "컴퓨터공학",
  };

  const years = {
    first: "1학년",
    second: "2학년",
    third: "3학년",
    fourth: "4힉년",
  };

  const { name, studentNumber } = useUserStore((state) => state);
  const [formData, setFormData] = useState({
    major: "",
    year: "",
    phoneNumber: "",
    birth: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateFormData = () => {
    const { major, year, phoneNumber, birth, email } = formData;
    if (!major || !year || !phoneNumber || !birth || !email) {
      alert("모든 항목을 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateFormData()) {
      console.log(formData);
    }
  };

  return (
    <>
      <Title title="기본 정보 입력" />
      {/* 필수 항목 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">필수 항목</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
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
            <div className="me-4" style={{ flex: 1 }}></div>
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
          </div>
        </CCardBody>
      </CCard>
      {/* 학교 정보 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">학교 정보</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">학과</div>
              <CFormSelect
                name="major"
                className="bg-dawn-light mb-4 text-start w-100 text-white"
                style={{
                  opacity: 1,
                  borderColor: "#323A49",
                }}
                value={formData.major}
                onChange={handleInputChange}
              >
                <option>선택해주세요...</option>
                {Object.entries(majors).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </CFormSelect>
            </div>
            <div className="me-4" style={{ flex: 1 }}></div>
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">학년</div>
              <CFormSelect
                name="year"
                className="bg-dawn-light text-white border-gray"
                style={{ maxWidth: "15rem" }}
                value={formData.year}
                onChange={handleInputChange}
              >
                <option>선택해주세요...</option>
                {Object.entries(years).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </CFormSelect>
            </div>
          </div>
        </CCardBody>
      </CCard>
      {/* 기본 정보 */}
      <CCard
        textBgColor="info"
        className="mt-4 mb-4"
        style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">기본 정보</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">핸드폰 번호</div>
              <CForm>
                <CFormInput
                  name="phoneNumber"
                  type="string"
                  color="white"
                  style={{
                    maxWidth: "30rem",
                    borderColor: "#323A49",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                  value={formData.phoneNumber || "010-"}
                  onChange={handleInputChange}
                />
              </CForm>
            </div>
            <div className="me-4" style={{ flex: 1 }}></div>
            <div className="me-4" style={{ flex: 1 }}>
              <div className="text-white">생년월일</div>
              <CFormInput
                name="birth"
                type="date"
                color="white"
                style={{
                  maxWidth: "30rem",
                  borderColor: "#323A49",
                  backgroundColor: "transparent",
                  color: "white",
                }}
                value={formData.birth}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div className="text-white">이메일</div>
            <CForm>
              <CFormInput
                name="email"
                type="email"
                placeholder="E-mail을 입력하세요."
                color="white"
                style={{
                  maxWidth: "30rem",
                  borderColor: "#323A49",
                  backgroundColor: "transparent",
                  color: "white",
                }}
                value={formData.email}
                onChange={handleInputChange}
              />
            </CForm>
          </div>
        </CCardBody>
      </CCard>
      {/* 저장 */}
      <div className="mt-4 mb-4">
        <CButton color="primary" className="w-100" onClick={handleSubmit}>
          저 장
        </CButton>
      </div>
      <style>
        {`
          .form-control::placeholder {
              color: #A7A8AC !important;
            }
        `}
      </style>
    </>
  );
};

export default StudentHome;
