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

  const handleInputChange = (
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

  return <div className="container px-4"></div>;
};
