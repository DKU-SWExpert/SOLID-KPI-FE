import { CButton } from "@coreui/react";
import { useNavigate } from "react-router-dom";

const GoBackHomeButton = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/");
  };

  return (
    <div>
      <CButton color="info" className="px-4" onClick={onClickButton}>
        <span
          style={{
            fontSize: "1.2rem",
            color: "white",
          }}
        >
          홈 화면으로 돌아갑니다.
        </span>
      </CButton>
    </div>
  );
};

export default GoBackHomeButton;
