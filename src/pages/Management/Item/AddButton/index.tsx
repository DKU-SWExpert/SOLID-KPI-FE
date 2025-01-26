import { CButton } from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAdd = () => {
    if (!location.pathname.includes("/add")) {
      navigate(location.pathname + "/add");
    }
  };

  return (
    <CButton color="primary" onClick={handleAdd}>
      아이템 추가
    </CButton>
  );
};

export default AddButton;
