import { useState } from "react";
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
} from "@coreui/react";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert("저장되었습니다!");
  };

  return (
    <CContainer className="py-4">
      <CCol className="mb-5" md={6}>
        <CFormLabel className="text-white">이름</CFormLabel>
        <CFormInput
          className="text-white border-gray bg-dark"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </CCol>
      <CButton
        className="mt-4 text-center"
        color="primary"
        onClick={handleSave}
        style={{ width: "100%" }}
      >
        저 장
      </CButton>
    </CContainer>
  );
};

export default AddItem;
