import React from "react";
import { CFormInput } from "@coreui/react";
import CommonCard from "@components/CommonCard";

const TestDate: React.FC = () => {
    return (
        <CommonCard header="시험 일자" textBgColor="info" style={{ maxWidth: "100rem" }}>
            <CFormInput type="date" className="bg-dawn text-white border-gray" style={{ maxWidth: "15rem" }} />
        </CommonCard>
    );
};

export default TestDate;
