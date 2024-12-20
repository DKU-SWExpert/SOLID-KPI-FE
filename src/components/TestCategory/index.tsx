import React from "react";
import { CFormSelect } from "@coreui/react";
import CommonCard from "@components/CommonCard";

const TestCategory: React.FC = () => {
    return (
        <CommonCard header="시험 구분" textBgColor="info" style={{ maxWidth: "100rem" }}>
            <CFormSelect className="bg-dawn text-white border-gray" style={{ maxWidth: "15rem" }}>
                <option>시험 선택</option>
                <option value="topcit">TOPCIT</option>
                <option value="pccp">PCCP</option>
                <option value="pcce">PCCE</option>
            </CFormSelect>
        </CommonCard>
    );
};

export default TestCategory;
