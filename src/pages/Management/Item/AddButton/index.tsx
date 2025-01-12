import React from "react";
import { CButton } from "@coreui/react";

const AddButton: React.FC = () => {
  const handleAdd = () => {
    alert("아이템 추가 버튼 클릭");
  };

  return (
    <CButton color="primary" onClick={handleAdd}>
      아이템 추가
    </CButton>
  );
};

export default AddButton;
