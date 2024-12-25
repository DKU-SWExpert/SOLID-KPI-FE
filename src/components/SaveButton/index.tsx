import React from "react";
import { CButton, CCard } from "@coreui/react";

interface SaveButtonProps {
    onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
    return (
        <CCard className="mt-4 mb-4 border-gray" style={{ maxWidth: "100rem", borderRadius: "0.75rem" }}>
            <CButton color="primary" onClick={onClick}>
                저 장
            </CButton>
        </CCard>
    );
};

export default SaveButton;
