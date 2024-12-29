import { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
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
};
