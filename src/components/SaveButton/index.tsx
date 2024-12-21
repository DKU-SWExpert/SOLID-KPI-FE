import React from "react";
import { CButton, CCard } from "@coreui/react";

interface SaveButtonProps {
    onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
    return (
        <CCard className="mt-5 mb-4 ms-2 me-2">
            <CButton color="primary" onClick={onClick}>
                저 장
            </CButton>
        </CCard>
    );
};

export default SaveButton;
