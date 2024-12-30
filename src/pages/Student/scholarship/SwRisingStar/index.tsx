import { useState } from "react";
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
} from "@coreui/react";
import { useUserStore } from "@store/user";

const SwRisingStar = () => {
  const [formData, setFormData] = useState({
    grade: "",
    phoneNumber: "",
    birth: "",
    email: "",
    professor: "",
    selectedPeriod: "",
  });

  //internship과 변수 통일
  const { name, studentNumber, major} = useUserStore((state) => state); 

  const periods = ["2025년", "2026년", "2027년", "2028년", "2029년"];

  const handleFormChange = (field: string, value: string | null) => {
    setFormData((prev) => ({
        ...prev,
        [field]: value,
    }));
  };

  const validateFormData = () => {
    if (!formData.selectedPeriod) {
      alert("신청년도를 선택해주세요.");
      return;
    }
    //학번, 이름, 학과는 유효성 검사에서 제외
    if (
      !formData.grade ||
      !formData.phoneNumber ||
      !formData.birth ||
      !formData.email
    ) {
      alert("모든 기본정보를 입력해주세요.");
      return;
    }

    if (!formData.professor) {
      
      alert("담당 교수를 입력해주세요.");
      return;
    }
  }

  const handleSave = () => {
    validateFormData();
    console.log("Saved Data:", formData);
  };

  return (
    <div className="container px-4">
      <div className="d-flex align-itens-center mt-4 mb-4">
        <CCard
          textBgColor="primary"
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ maxWidth: "15rem", height: "4.5rem" }}
        >
          <CCardHeader className="text-white text-center fw-semibold fs-5 border-0">
            SW 유망주 신청
          </CCardHeader>
        </CCard>
      </div>
      
      <CCard
        textBgColor="info"
        className="d-flex mt-4 mb-4"
        style={{ borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">신청년도</CCardHeader>

        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CFormSelect
            className="bg-dawn-light text-white border-gray col-md-4"
            style={{ maxWidth: "25rem" }}
            value={formData.selectedPeriod}
            onChange={(e) =>
              handleFormChange("selectedPeriod", e.target.value)
          }
          >
            <option>수혜년도를 선택해주세요...</option>
            {periods.map((period, index) => (
              <option key={index} value={period}>
                {period}
              </option>
            ))}
          </CFormSelect>
        </CCardBody>
      </CCard>

      <CCard
        textBgColor="info"
        className="d-flex mt-4 mb-4"
        style={{ borderRadius: "0.75rem" }}
      >
        <CCardHeader className="text-white">신청서(기본정보)</CCardHeader>
        <CCardBody
          className="bg-dawn-light"
          style={{
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}
        >
          <CRow className="mb-4">
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>학번</CFormLabel>
                <CFormInput className="bg-dawn-light text-white border-gray gray-placeholder" value={studentNumber}
                />
              </div>
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>이름</CFormLabel>
                <CFormInput className="bg-dawn-light text-white border-gray gray-placeholder" value={name}
                />
              </div>
            </CCol>
            <CCol xs="12" md="6" lg="4">
            <div className="text-white">
                <CFormLabel>학과</CFormLabel>
                <CFormInput className="bg-dawn-light text-white border-gray gray-placeholder" value={major}
                />
              </div>
            </CCol>
          </CRow>
          <CRow className="mb-4">
          <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>학년</CFormLabel>
                <CFormInput
                  type="text"
                  className="bg-dawn-light text-white border-gray gray-placeholder"
                  name="grade"
                  value={formData.grade}
                  onChange={(e) =>
                    handleFormChange("grade", e.target.value)
                }
                />
              </div>
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>핸드폰</CFormLabel>
                <CFormInput
                  type="text"
                  className="bg-dawn-light text-white border-gray gray-placeholder"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleFormChange("phoneNumber", e.target.value)
                    }
                />
              </div>
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>생년월일</CFormLabel>
                <CFormInput
                  type="date"
                  className="bg-dawn-light text-white border-gray gray-placeholder"
                  name="birth"
                  value={formData.birth}
                  onChange={(e) =>
                    handleFormChange("birth", e.target.value)
                }
                />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12" md="6" lg="4">
                <div className="text-white">
                  <CFormLabel>E-mail</CFormLabel>
                  <CFormInput
                    type="text"
                    className="bg-dawn-light text-white border-gray gray-placeholder"
                    style={{ width: "450px" }}
                    placeholder="E-mail을 입력하세요."
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleFormChange("email", e.target.value)
                  }
                  />
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        <CCard
          textBgColor="info"
          className="d-flex mt-4 mb-4"
          style={{ borderRadius: "0.75rem" }}
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
                    type="text"
                    className="bg-dawn-light text-white border-gray gray-placeholder"
                    style={{ maxWidth: "15rem" }}
                    placeholder="검색어를 입력하세요."
                    name="professor"
                    value={formData.professor}
                    onChange={(e) =>
                      handleFormChange("professor", e.target.value)
                  }
                  />
          </CCardBody>
        </CCard>

        <div className="mt-4 mb-4">
                <CButton color="primary" className="w-100" onClick={handleSave}>
                    저 장
                </CButton>
            </div>
      </div>
  );
};

export default SwRisingStar;
