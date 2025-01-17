import React from "react";
import { CButton } from "@coreui/react";
import { useNavigate, useLocation } from "react-router-dom";

const AddButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleAdd = () => {
    if (!location.pathname.includes("/add")) {
      navigate(location.pathname + "/add");
    }
  };

  return (
    <CButton color="primary" onClick={handleAdd}>
      업체 추가
    </CButton>
  );
};

export default AddButton;
