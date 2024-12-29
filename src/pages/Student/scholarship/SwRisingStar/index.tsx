import { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCol,
} from "@coreui/react";

const SwRisingStar = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    department: "",
    grade: "",
    phoneNumber: "",
    birth: "",
    email: "",
    professor: "",
    selectedPeriod: "",
  });

  const periods = ["2025년", "2026년", "2027년", "2028년", "2029년"];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function addHyphen(obj: HTMLInputElement): void {
    const phone = obj;
    const num = phone.value.replace(/-/g, "");
    const len = num.length;

    if (len < 4) {
      phone.value = num;
    } else {
      if (num.substring(0, 2) === "02") {
        if (len < 7) {
          phone.value = num.substring(0, 2) + "-" + num.substring(2);
        } else if (len < 10) {
          phone.value =
            num.substring(0, 2) +
            "-" +
            num.substring(2, 3) +
            "-" +
            num.substring(5);
        } else {
          phone.value =
            num.substring(0, 2) +
            "-" +
            num.substring(2, 4) +
            "-" +
            num.substring(6);
        }
      } else {
        if (len < 7) {
          phone.value = num.substring(0, 3) + "-" + num.substring(3);
        } else if (len < 12) {
          phone.value =
            num.substring(0, 3) +
            "-" +
            num.substring(3, 4) +
            "-" +
            num.substring(7);
        } else {
          phone.value =
            num.substring(0, 4) +
            "-" +
            num.substring(4, 4) +
            "-" +
            num.substring(8);
        }
      }
    }
  }

  const handleSave = () => {
    if (!formData.selectedPeriod) {
      alert("신청년도를 선택해주세요.");
      return;
    }

    if (
      !formData.studentId ||
      !formData.name ||
      !formData.department ||
      !formData.grade ||
      !formData.phoneNumber ||
      !formData.birth ||
      !formData.email
    ) {
      alert("모든 기본정보를 입력해주세요.");
    }

    if (!formData.professor) {
      alert("담당 교수를 입력해주세요.");
      return;
    }

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
            onChange={handleFormChange}
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
          <CRow>
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>학번</CFormLabel>
                <CFormInput
                  type="text"
                  className="mb-4 bg-dawn-light text-white border"
                  placeholder="20123456"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleFormChange}
                />
              </div>
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>이름</CFormLabel>
                <CFormInput
                  type="text"
                  className="mb-4 bg-dawn-light text-white border"
                  placeholder="홍길동"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <div className="text-white">
                <CFormLabel>학과</CFormLabel>
                <CFormInput
                  type="text"
                  className="mb-4 bg-dawn-light text-white border"
                  placeholder="소프트웨어"
                  name="department"
                  value={formData.department}
                  onChange={handleFormChange}
                />
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default SwRisingStar;
